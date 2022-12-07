<?php

namespace App\Http\Services;

use App\Models\Category;
use App\Models\Event;
use App\Models\GroupCategory;
use App\Models\Product;
use Illuminate\Http\Response;

class HomeService
{
    public function index()
    {
        $flashDelas = Product::whereHas('events', function ($query) {
            $query->where('event_type', Event::FLASH_DELAS);
        })
            ->with('productPrice:price')
            ->select('id', 'name', 'image', 'expried', 'sale_type', 'price', 'sale_off')
            ->get();

        $newArrivals = Product::whereHas('events', function ($query) {
            $query->where('event_type', Event::NEW_ARRIVALS);
        })
            ->with('productPrice:price')
            ->select('id', 'name', 'image', 'expried', 'sale_type', 'price', 'sale_off')
            ->get();

        $bigDiscounts = Product::whereHas('events', function ($query) {
            $query->where('event_type', Event::BIG_DISCOUNTS);
        })
            ->with('productPrice:price')
            ->select('id', 'name', 'image', 'expried', 'sale_type', 'price', 'sale_off')
            ->get();

        $ortherProduct = Product::with('productPrice:price')
            ->select('id', 'name', 'image', 'expried', 'sale_type', 'price', 'sale_off')
            ->take(8)
            ->get();

        $topRateProduct = Product::with('productPrice:price')
            ->select('id', 'name', 'image', 'expried', 'sale_type', 'price', 'sale_off')
            ->get();

        $topRateProduct = $topRateProduct->sortByDesc(function ($item) {
            return $item->total_rate;
        })->take(3);

        return response([
            'flashDelas' => $flashDelas,
            'newArrivals' => $newArrivals,
            'bigDiscounts' => $bigDiscounts,
            'ortherProduct' => $ortherProduct,
            'topRateProduct' => $topRateProduct,
            'message' => 'success!',
            'code' => Response::HTTP_OK
        ], Response::HTTP_OK);
    }

    public function search($request)
    {
        $products = Product::select('id', 'name', 'image', 'expried', 'sale_type', 'price', 'sale_off')
            ->filter($request)
            ->where('status', config('constants.user.status.active'));
        $total = count($products->get());
        $products->limit($request->pageSize)
            ->offset(($request->currentPage) * $request->pageSize)
        ->get();
        $arrId = $products->pluck('id')->toArray();
        $formFilter = [];
        $groupCategory = GroupCategory::whereHas('products', function($query) use ($arrId) {
            $query->whereIn('id', $arrId);
        })
        ->select('id', 'name')
        ->get();
        $category = Category::whereHas('products', function($query) use ($arrId) {
            $query->whereIn('id', $arrId);
        })
        ->select('id', 'name')
        ->get();
        if (count($groupCategory) >= 2) {
            $formFilter['groupCategory'] = $groupCategory;
        } else {
            // $attributes = $groupCategory->attributes;
            // foreach($attributes as $item) {
            // }
            // $formFilter['attribute'] = $groupCategory->attributes;
        }
        $formFilter['category'] = $category;
        $formFilter['rate'] = true;
        $formFilter['price'] = true;
        return response([
            'products' => $products,
            'total' => $total,
            'formFilter' => $formFilter,
            'code' => Response::HTTP_OK
        ], Response::HTTP_OK);
    }
}
