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
        })->select('');

        $newArrivals = Product::whereHas('events', function($query) {
            $query->where('event_type', Event::NEW_ARRIVALS);
        });

        $bigDiscounts = Product::whereHas('events', function($query) {
            $query->where('event_type', Event::BIG_DISCOUNTS);
        });

        $ortherProduct = Product::paginate(8);
    }
}
