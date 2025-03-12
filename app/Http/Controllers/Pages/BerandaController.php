<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use App\Models\BrandProduct;
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
        $sliders = Slider::where('ended_at', '>=', Carbon::now())->get(['name', 'slug', 'image_desktop', 'image_mobile', 'type', 'ended_at', 'link']);
        $categoryProducts = CategoryProduct::get(['slug', 'thumbnail']);
        $testimonials = Testimonial::get(['person', 'content', 'image']);
        $brands = BrandProduct::whereNotNull('image')->get(['name', 'slug', 'image']);
        $faqs = Faq::get(['question', 'answer']);

        return Inertia::render('Pages/Beranda/Index', [
            'sliders' => $sliders,
            'categoryProducts' => $categoryProducts,
            'testimonials' => $testimonials,
            'brands' => $brands,
            'faqs' => $faqs
        ]);
    }
}
