<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use App\Models\Slider;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BerandaController extends Controller
{
    public function index()
    {
        $sliders = Slider::get(['name', 'image', 'link']);
        $testimonials = Testimonial::get(['person', 'content']);

        return Inertia::render('Pages/Beranda/Index', [
            'sliders' => $sliders,
            'testimonials' => $testimonials
        ]);
    }
}
