<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
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
        return Inertia::render('Pages/Product/Show', [
            'category' => $category,
            'subCategory' => $subCategory,
            'slug' => $slug
        ]);
    }
}
