<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentPageSetting extends Model
{
    use HasFactory;

    protected $fillable = [
        'banner_title',
        'banner_subtitle',
        'banner_button_text',
        'banner_button_link',
        'banner_image',
        'description',
    ];
}