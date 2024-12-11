<?php

use Illuminate\Support\Facades\Route;

// PAGES CONTROLLERS
use App\Http\Controllers\Pages\{
  AboutUsController,
  BerandaController,
  BlogController,
  HelpController,
  ProductController,
  TermsAndConditionsController
};

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// PAGES ROUTE
Route::get('/', [BerandaController::class, 'index'])->name('beranda.index');
Route::get('/blog/{category}', [BlogController::class, 'index'])->name('blog.index');
Route::get('/blog/{category}/{slug}', [BlogController::class, 'show'])->name('blog.show');
Route::get('/terms-and-conditions', [TermsAndConditionsController::class, 'index'])->name('terms-and-conditions.index');
Route::get('/about-us', [AboutUsController::class, 'index'])->name('about-us.index');
Route::get('/help', [HelpController::class, 'index'])->name('help.index');
Route::get('/product/{category}', [ProductController::class, 'category'])->name('product.category.index');
Route::get('/product/{category}/{subCategory}', [ProductController::class, 'subCategory'])->name('product.sub-category.index');
Route::get('/product/{category}/{subCategory}/{slug}', [ProductController::class, 'show'])->name('product.show');
