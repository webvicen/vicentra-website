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
        'slug',
        'name',
        'sku',
        'thumbnail',
        'short_description',
        'description',
        'specification',
        'work_result'
    ];

    public function categoryable()
    {
        return $this->morphTo();
    }

    public function media()
    {
        return $this->hasMany(MediaProduct::class);
    }
}
