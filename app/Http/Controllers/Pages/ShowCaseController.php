<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use App\Models\SalesPerson;
use App\Models\Slider;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShowCaseController extends Controller
{
    public function show($slug)
    {
        $slider = Slider::where('slug', $slug)->first();
        $teamSales = SalesPerson::get(['name', 'image', 'phone', 'additional_sentence']);

        return Inertia::render('Pages/ShowCase/Show', [
            'slider' => $slider,
            'teamSales' => $teamSales
        ]);
    }
}
