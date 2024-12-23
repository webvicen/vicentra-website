<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductRecomendation extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_id',
        'recomendation_product_id',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id', 'id');
    }

    public function recomendationProduct()
    {
        return $this->belongsTo(Product::class, 'recomendation_product_id', 'id');
    }
}
