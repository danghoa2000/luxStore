<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use PhpParser\Node\Expr\FuncCall;

class Category extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'category_code',
        'name',
        'parent_id',
        'description',
        'image',
        'type',
        'group_category_id',
        'created_by'
    ];

    protected $table = "categories";

    public function subCategories()
    {
        return $this->hasMany(Category::class, 'parent_id');
    }

    public function scopeFilter($query, $request)
    {
        // filter sort
        if ($request->currentSort) {
            // sort by name
            if ($request->currentSort == 'name') {
                $query->orderBy($request->currentSort, $request->currentDirection);
            }
        } else {
            $query->orderBy('updated_at', 'desc');
        };
        return $query;
    }
}
