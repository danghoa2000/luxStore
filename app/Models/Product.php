<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'product_code ',
        'name',
        'status',
        'description',
        'country_id',
        'price',
        'category_id',
        'group_category_id',
        'manufacturer_id',
        'image',
    ];

    protected $table = 'products';

    public function productMedia()
    {
        return $this->hasMany(ProductMedia::class, 'product_id', 'id');
    }

    public function productPrice()
    {
        return $this->hasMany(ProductPrice::class, 'product_id', 'id');
    }

    public function productProperties()
    {
        return $this->hasMany(ProductProperty::class, 'product_id', 'id');
    }

    public function productSuggest()
    {
        return $this->hasMany(ProductSuggest::class, 'product_id', 'id');
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }

    public function groupCategory()
    {
        return $this->belongsTo(GroupCategory::class, 'group_category_id', 'id');
    }

    public function scopeFilter($query, $request)
    {
        // $data = json_decode($request->searchField, true);
        // if (!empty($data['manufacturer_code'])) {
        //     $query->where('manufacturer_code', $data['manufacturer_code']);
        // }
        // if (!empty($data['status']) && $data['status'] != -1) {
        //     $query->where('status', $data['status']);
        // }
        // if (isset($data['status']) && $data['status'] == 0) {
        //     $query->where('status', $data['status']);
        // }
        // if (!empty($data['name'])) {
        //     $query->where('name', 'like', '%' . $data['name'] . '%');
        // }
        // if (!empty($data['telephone'])) {
        //     $query->where('telephone', $data['telephone']);
        // }
        // if (!empty($data['address'])) {
        //     $query->where('address', 'like', '%' . $data['address'] . '%');
        // }
        return $query;
    }
}
