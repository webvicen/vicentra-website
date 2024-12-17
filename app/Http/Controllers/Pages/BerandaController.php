<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use App\Models\CategoryProduct;
use App\Models\Faq;
use App\Models\Slider;
use App\Models\Testimonial;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BerandaController extends Controller
{
    public function index()
    {
        $sliders = Slider::where('ended_at', '>=', Carbon::now())->get(['name', 'slug', 'image', 'type', 'ended_at', 'link']);
        $categoryProducts = CategoryProduct::get(['slug', 'thumbnail']);
        $testimonials = Testimonial::get(['person', 'content', 'image']);
        $faqs = Faq::get(['question', 'answer']);

        return Inertia::render('Pages/Beranda/Index', [
            'sliders' => $sliders,
            'categoryProducts' => $categoryProducts,
            'testimonials' => $testimonials,
            'faqs' => $faqs
        ]);
    }
}
