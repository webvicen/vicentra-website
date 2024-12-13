<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BrandProduct extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug',
        'name',
        'image',
    ];

    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
