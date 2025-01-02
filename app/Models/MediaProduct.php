<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MediaProduct extends Model
{
    use HasFactory;

    protected $fillable = ['product_id', 'slug', 'name', 'type', 'image_file', 'video_thumbnail', 'type_source_link', 'video_link', 'gdrive_link'];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
