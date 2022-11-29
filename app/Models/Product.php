<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    const UPLOAD_PATH = "product/";

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'product_code',
        'name',
        'status',
        'description',
        'country_id',
        'price',
        'category_id',
        'group_category_id',
        'manufacturer_id',
        'image',
        'sale_type',
        'sale_off',
        'expried'
    ];

    protected $table = 'products';

    public function productDetail()
    {
        return $this->hasMany(ProductDetail::class, 'product_id', 'id');
    }

    public function manufacturer()
    {
        return $this->belongsTo(Manufacturer::class, 'manufacturer_id', 'id');
    }

    public function productMedia()
    {
        return $this->hasOne(ProductMedia::class, 'product_id', 'id');
    }

    public function productPrice()
    {
        return $this->hasMany(ProductPrice::class, 'product_id', 'id')->orderByDesc("created_at");
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

    public function events()
    {
        return $this->belongsToMany(Event::class, 'product_event', 'product_id', 'event_type');
    }

    public function reviews()
    {
        return $this->belongsToMany(Rview::class, 'product_event', 'product_id', 'event_type');
    }

    public function scopeFilter($query, $request)
    {
        $data = json_decode($request->searchField, true);
        if (!empty($data['product_code'])) {
            $query->where('product_code', $data['product_code']);
        }
        if (!empty($data['status']) && $data['status'] != -1) {
            $query->where('status', $data['status']);
        }
        if (isset($data['status']) && $data['status'] == 0) {
            $query->where('status', $data['status']);
        }
        if (!empty($data['name'])) {
            $query->where('name', 'like', '%' . $data['name'] . '%');
        }
        if (!empty($data['price_min'])) {
            $query->whereHas('productPrice', function ($q) use ($data) {
                $q->latest()->where('price', ">=", $data['price_min']);
            });
        }
        if (!empty($data['price_max'])) {
            $query->whereHas('productPrice', function ($q) use ($data) {
                $q->latest()->where('price', "<=", $data['price_max']);
            });
        }
        if (!empty($data['category_id']) && $data['category_id'] != -1) {
            $query->where('category_id',  $data['category_id']);
        }
        if (!empty($data['manufacturer']) && $data['manufacturer'] != -1) {
            $query->where('manufacturer_id',  $data['manufacturer_id']);
        }
        if (!empty($data['group_category_id']) && $data['group_category_id'] != -1) {
            $query->where('category_id',  $data['group_category_id']);
        }
        return $query;
    }
}
