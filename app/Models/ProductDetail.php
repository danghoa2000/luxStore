<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductDetail extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'qty',
        'sold_qty',
        'product_id'
    ];

    protected $table = "product_detail";

    public function propertyValue()
    {
        return $this->belongsToMany(AttributeValue::class, "product_attribute_value", "product_detail_id", "attribute_value_id")->withTimestamps();
    }

    public function product()
    {
        return $this->belongsTo(Product::class,'product_id');
    }
}
