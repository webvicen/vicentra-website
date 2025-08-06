<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use App\Models\PaymentPageSetting;
use App\Models\PaymentMethod;
use Inertia\Inertia;

class PaymentMethodsController extends Controller
{
public function index()
{
    $page = PaymentPageSetting::first();

    // Ubah path gambar banner ke URL penuh
    if ($page && $page->banner_image) {
        $page->banner_image = asset('storage/' . $page->banner_image);
    }

    // Ubah path icon tiap metode ke URL penuh
    $methods = PaymentMethod::all()->map(function ($method) {
        if ($method->icon) {
            $method->icon = asset('storage/' . $method->icon);
        }
        return $method;
    });

    return Inertia::render('Pages/PaymentMethods/Index', [
        'page' => $page,
        'methods' => $methods
    ]);
}
}

