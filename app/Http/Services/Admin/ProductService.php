<?php

namespace App\Http\Services\Admin;

use App\Models\Product;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class ProductService
{
    public function list($request)
    {
        $products = Product::with(
            'productMedia',
            'productPrice',
            'productProperties',
            'productSuggest',
            'category',
            'groupCategory'
        )
            ->filter($request)
            ->where('status', config('constants.user.status.active'));
        $total = count($products->get());
        $products->limit($request->pageSize)
            ->offset(($request->currentPage) * $request->pageSize);

        return response([
            'products' => $products->get(),
            'total' => $total,
            'code' => Response::HTTP_OK
        ], Response::HTTP_OK);
    }

    public function create($request)
    {
        try {
            DB::beginTransaction();
            $product = Product::create([
                'product_code' => $request->product_code,
                'name' => $request->name,
                'status' => $request->status,
                'telephone' =>  $request->telephone,
                'address' =>  $request->address,
            ]);

            DB::commit();
            return response([
                'product' => $product,
                'message' => 'Create product success!',
                'code' => Response::HTTP_OK
            ], Response::HTTP_OK);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response([
                'message' => 'Create product error!',
                'code' => Response::HTTP_INTERNAL_SERVER_ERROR
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }

    public function detail($request)
    {
        $product = Product::find($request->id);
        if ($product) {
            return response([
                'product' => $product,
                'message' => 'success!',
                'code' => Response::HTTP_OK
            ], Response::HTTP_OK);
        }

        return response([
            'product' => [],
            'message' => 'This product dont exist!',
            'code' => Response::HTTP_NOT_FOUND
        ], Response::HTTP_NOT_FOUND);
    }

    public function edit($request)
    {
        try {
            DB::beginTransaction();
            $product = Product::find($request->id);
            if ($product) {
                $product->update([
                    'name' => $request->name,
                    'status' => $request->status,
                    'telephone' =>  $request->telephone,
                    'address' =>  $request->address,
                ]);

                DB::commit();
                return response([
                    'product' => $product,
                    'message' => 'Update product success!',
                    'code' => Response::HTTP_OK
                ], Response::HTTP_OK);
            }

            return response([
                'product' => [],
                'message' => 'This product dont exist!',
                'code' => Response::HTTP_NOT_FOUND
            ], Response::HTTP_NOT_FOUND);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response([
                'message' => 'Update product error!',
                'code' => Response::HTTP_INTERNAL_SERVER_ERROR
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function delete($id)
    {
        try {
            $product = Product::find($id);
            if ($product) {
                $product->update([
                    'status' => 0
                ]);
                return response([
                    'message' => 'success!',
                    'code' => Response::HTTP_OK
                ], Response::HTTP_OK);
            }

            return response([
                'message' => 'This product dont exist!',
                'code' => Response::HTTP_NOT_FOUND
            ], Response::HTTP_NOT_FOUND);
        } catch (\Throwable $th) {
            return response([
                'message' => 'Delete product error!',
                'code' => Response::HTTP_NOT_FOUND
            ], Response::HTTP_NOT_FOUND);
        }
    }

    public function attribute($request)
    {
        return;
    }

    public function options($request)
    {
        return;
    }
}
