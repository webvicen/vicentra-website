<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryProduct extends Model
{
    use HasFactory;

    protected $fillable = ['slug', 'name', 'thumbnail', 'banner'];

    public function subCategories()
    {
        return $this->hasMany(SubCategoryProduct::class);
    }
}
