<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubSubCategoryProduct extends Model
{
    use HasFactory;

    protected $fillable = ['sub_category_product_id', 'slug', 'name', 'thumbnail'];

    public function subCategory()
    {
        return $this->belongsTo(SubCategoryProduct::class);
    }

    public function products()
    {
        return $this->morphMany(Product::class, 'categoryable');
    }
}
