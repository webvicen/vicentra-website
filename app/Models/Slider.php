<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Slider extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'image_desktop',
        'image_mobile',
        'type',
        'ended_at',
        'link',
    ];
}
