<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'categoryable_id',
        'categoryable_type',
        'brand_product_id',
        'slug',
        'name',
        'another_name',
        'is_out_of_stock',
        'sku',
        'thumbnail',
        'short_description',
        'description',
        'specification',
        'work_result'
    ];

    protected $casts = [
        'is_out_of_stock' => 'boolean',
    ];

    public function categoryable()
    {
        return $this->morphTo();
    }

    public function brand()
    {
        return $this->belongsTo(BrandProduct::class, 'brand_product_id');
    }

    public function media()
    {
        return $this->hasMany(MediaProduct::class);
    }
}
