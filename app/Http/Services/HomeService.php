<?php

namespace App\Http\Services;

use App\Models\Event;
use App\Models\Product;
use Illuminate\Http\Response;

class HomeService
{
    public function index()
    {
        $flashDelas = Product::whereHas('events', function($query) {
            $query->where('event_type', Event::FLASH_DELAS);
        })
        ->with('productPrice:price')
        ->select('id', 'name', 'image', 'expried', 'sale_type', 'price', 'sale_off')
        ->get();

        $newArrivals = Product::whereHas('events', function($query) {
            $query->where('event_type', Event::NEW_ARRIVALS);
        })
        ->with('productPrice:price')
        ->select('id', 'name', 'image', 'expried', 'sale_type', 'price', 'sale_off')
        ->get();

        $bigDiscounts = Product::whereHas('events', function($query) {
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

        $topRateProduct = $topRateProduct->sortByDesc(function($item) {
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
}
