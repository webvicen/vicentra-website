<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use App\Models\BrandProduct;
use App\Models\SalesPerson;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutUsController extends Controller
{
    public function index()
    {
        $brands = BrandProduct::get(['name', 'slug', 'image']);
        $sales = SalesPerson::get(['name']);

        return Inertia::render('Pages/AboutUs/Index', [
            'brands' => $brands,
            'sales' => $sales
        ]);
    }
}
