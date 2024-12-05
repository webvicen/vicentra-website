<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        return Inertia::render('Pages/Blog/Index');
    }

    public function show($slug)
    {
        return Inertia::render('Pages/Blog/Show');
    }
}
