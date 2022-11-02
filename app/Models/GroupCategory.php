<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GroupCategory extends Model
{
    use HasFactory;

    
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'group_category_code',
        'name',
        'status',
    ];

    protected $table = 'group_category';

    public function scopeFilter($query, $request)
    {
        $data = json_decode($request->searchField, true);
        if (!empty($data['group_category_code'])) {
            $query->where('group_category_code', $data['group_category_code']);
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
        return $query;
    }
}
