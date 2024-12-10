<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use App\Models\SalesPerson;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function category($category)
    {
        return Inertia::render('Pages/Product/Category', [
            'category' => $category
        ]);
    }

    public function subCategory($category, $subCategory)
    {
        return Inertia::render('Pages/Product/SubCategory', [
            'category' => $category,
            'subCategory' => $subCategory
        ]);
    }

    public function show($category, $subCategory, $slug)
    {
        $teamSales = SalesPerson::get(['name', 'image', 'phone', 'additional_sentence']);

        return Inertia::render('Pages/Product/Show', [
            'category' => $category,
            'subCategory' => $subCategory,
            'slug' => $slug,
            'teamSales' => $teamSales
        ]);
    }
}
