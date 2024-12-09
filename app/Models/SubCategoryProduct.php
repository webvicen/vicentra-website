<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubCategoryProduct extends Model
{
    use HasFactory;

    protected $fillable = ['category_product_id', 'slug', 'name', 'thumbnail'];

    public function category()
    {
        return $this->belongsTo(CategoryProduct::class);
    }

    public function subSubCategories()
    {
        return $this->hasMany(SubSubCategoryProduct::class);
    }

    public function products()
    {
        return $this->morphMany(Product::class, 'categoryable');
    }
}
