<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;
    protected $table = "event";

    public function products()
    {
        return $this->belongsToMany(Product::class, "product_event", "event_type", 'product_id');
    }
}
