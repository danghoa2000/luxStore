<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Coupon;
use App\Models\Order;
use App\Models\ProductDetail;
use App\Models\Voucher;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $orders = Order::query()->filter($request);
        $total = $orders->count();
        if ($request->pageSize) {
            $orders->limit($request->pageSize)
                ->offset(($request->currentPage - 1) * $request->pageSize);
        }
        return response([
            'orders' => $orders->get(),
            'total' => $total,
            'code' => Response::HTTP_OK
        ], Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            DB::beginTransaction();
            $user = Auth::guard('customerApi')->user();

            // Add order
            $order = Order::create([
                'customer_id' => $user->id,
                'status' => $request->orderStatus,
                'price' => $request->totalPrice + $request->shipping,
                'price_discount' => 0,
                'note' => $request->note,
                'address' => $request->address,
                'payment_method' => $request->paymentMethod,
            ]);

            $productsOrder = $this->prepareOrderDetails($request->cart, $order->id);

            if (isset($request->voucher["id"])) {
                $this->applyVoucher($request->voucher["id"], $order);
            }

            $order->orderDetail()->attach($productsOrder);

            // Update product quantities
            $this->updateProductQuantities($productsOrder);

            // Delete cart
            $user->cart->products()->detach(array_keys($productsOrder));

            DB::commit();
            return response([
                'message' => "success",
                'code' => Response::HTTP_OK
            ], Response::HTTP_OK);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response([
                'message' => 'error!',
                'code' => Response::HTTP_INTERNAL_SERVER_ERROR
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $order = Order::with('orderDetail.propertyValue')->find($request->id);
        if ($order) {
            return response([
                'order' => $order,
                'message' => 'success!',
                'code' => Response::HTTP_OK
            ], Response::HTTP_OK);
        }

        return response([
            'message' => 'This order does not exist!',
            'code' => Response::HTTP_NOT_FOUND
        ], Response::HTTP_NOT_FOUND);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        try {
            DB::beginTransaction();
            $order = Order::with('orderDetail.propertyValue')->find($request->id);
            if ($order) {
                $order->update(['status' => $request->order_status]);
                if ($request->order_status == 3) {
                    $this->restoreProductQuantities($order->orderDetail);
                }
                DB::commit();
                return response([
                    'order' => $order,
                    'message' => 'success!',
                    'code' => Response::HTTP_OK
                ], Response::HTTP_OK);
            } else {
                return response([
                    'message' => 'This order does not exist!',
                    'code' => Response::HTTP_NOT_FOUND
                ], Response::HTTP_NOT_FOUND);
            }
        } catch (\Throwable $th) {
            DB::rollBack();
            return response([
                'message' => 'server error!',
                'code' => Response::HTTP_INTERNAL_SERVER_ERROR
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // Implement the destroy method if needed
    }

    /**
     * Check if the voucher is valid.
     *
     * @param  collection  $voucher
     * @param  array  $product
     * @param  string  $userId
     * @return bool
     */
    public function checkVoucherValid($voucher, $product, $userId)
    {
        $result = true;
        if (isset($voucher->expired_date) && Carbon::parse($voucher->expired_date)->format('Y-m-d H:i:s') < Carbon::now()->format('Y-m-d H:i:s')) {
            $result = false;
        }

        $productList = json_decode($voucher->product_id);
        if (!array_intersect($productList, $product)) {
            $result = false;
        }

        $customerList = json_decode($voucher->customer_id);
        if (in_array($userId, $customerList)) {
            $result = false;
        }
        return $result;
    }

    private function prepareOrderDetails($cart, $orderId)
    {
        $productsOrder = [];
        foreach ($cart as $value) {
            $key = $value['id'];
            $productsOrder[$key] = [
                'product_id' => $key,
                'order_id' => $orderId,
                'product_name' => $value['product']['name'],
                'product_price' => $value['price'],
                'qty' => $value['pivot']['qty']
            ];
        }
        return $productsOrder;
    }

    private function applyVoucher($voucherId, $order)
    {
        $voucher = Coupon::find($voucherId);
        if ($voucher->qty > 0 && Carbon::parse($voucher->date_finish)->format('Y-m-d') >= Carbon::now()->format('Y-m-d')) {
            $order->update([
                'price' => $order->price - $voucher->value,
                'price_discount' => $voucher->value
            ]);
            $voucher->update(['qty' => $voucher->qty - 1]);
        }
    }

    private function updateProductQuantities($productsOrder)
    {
        $product = ProductDetail::whereIn('id', array_keys($productsOrder))->get();
        $options = [];
        foreach ($product as $data) {
            $options[$data->id] = [
                'id' => $data->id,
                'qty' => $data['qty'] - $productsOrder[$data->id]['qty'],
                'sold_qty' => $data['sold_qty'] + $productsOrder[$data->id]['qty']
            ];
        }
        ProductDetail::upsert($options, ['id'], ['qty', 'sold_qty']);
    }

    private function restoreProductQuantities($orderDetails)
    {
        $productsOrder = [];
        foreach ($orderDetails as $value) {
            $key = $value['id'];
            $productsOrder[$key] = [
                'id' => $key,
                'qty' => $value['pivot']['qty']
            ];
        }

        $product = ProductDetail::whereIn('id', array_keys($productsOrder))->get();
        $options = [];
        foreach ($product as $data) {
            $options[$data->id] = [
                'id' => $data->id,
                'qty' => $data['qty'] + $productsOrder[$data->id]['qty'],
                'sold_qty' => $data['sold_qty'] - $productsOrder[$data->id]['qty']
            ];
        }
        ProductDetail::upsert($options, ['id'], ['qty', 'sold_qty']);
    }
}
