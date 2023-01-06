<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\ProductDetail;
use App\Models\Voucher;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return;
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

            // add order
            $order = Order::create([
                'customer_id' => $user->id,
                'status' => $request->orderStatus,
                'price' => $request->totalPrice + $request->shipping,
                'price_discount' => 0,
                'address' => $request->address
            ]);

            $productList = [];
            $productsOrder = array_map(function ($data) use ($order) {
                $newData = [];
                $newData['order_id'] = $order->id;
                $newData['product_id'] = $data['id'];
                $newData['product_name'] = $data['product']['name'];
                $newData['product_price'] = $data['price'];
                $newData['qty'] = $data['pivot']['qty'];

                $productList[] = $data['product']['id'];

                return $newData;
            }, $request->cart);

            $productList = array_unique($productList);
            if (isset($request->voucher->id)) {
                $voucher = Voucher::find($request->voucher->id);
                $user = Auth::guard('customerApi')->user();
                if ($this->checkVouchervalid($voucher, $productList, $user->id)) {
                    $order->update([
                        'price' => $order->price - $voucher->price,
                        'price_discount' => $voucher->price
                    ]);
                }
            }
            $order->orderDetail()->createMany($productsOrder);

            // update qty product
            $product = ProductDetail::whereIn('id', Arr::pluck($productsOrder, 'product_id'))->get();
            $product->map(function ($data) use ($productsOrder) {
                $item = collect($productsOrder)->first(function($data1) use ($data) {
                    return $data1['product_id'] == $data['id'];
                });

                $data['qty'] = $data['qty'] - $item['qty'];
                $data['sold_qty'] = $item['qty'];
                $data->save();
                return $data;
            });

            // delete cart
            $user->cart->products()->delete();

            DB::commit();
            return response([
                'message' => "success",
                'code' => Response::HTTP_OK
            ], Response::HTTP_OK);
        } catch (\Throwable $th) {
            DB::rollBack();
            dd($th);
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
        return;
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
        return;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return;
    }

    /**
     * checkVouchervalid.
     *
     * @param  collection  voucher
     * @param  array  product
     * @param  string  user id
     * 
     * @return \Illuminate\Http\Response
     */
    public function checkVouchervalid($voucher, $product, $user)
    {
        $result = true;
        if (isset($voucher->expried_date) && Carbon::parse($voucher->expried_date)->format('Y-m-d h:i:s') < Carbon::now()->format('Y-m-d h:i:s')) {
            $result = false;
        }

        $productList = json_decode($voucher->product_id);
        if (!array_intersect($productList, $product)) {
            $result = false;
        }

        $customerList = json_decode($voucher->customer_id);
        if (in_array($user, $customerList)) {
            $result = false;
        }
        return $result;
    }
}
