<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Http;

// PAGES CONTROLLERS
use App\Http\Controllers\Pages\{
  AboutUsController,
  BerandaController,
  BlogController,
  HelpController,
  ProductController,
  ShowCaseController,
  TermsAndConditionsController,
  PaymentMethodsController
};
use App\Http\Controllers\SitemapController;

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
Route::get('/payment-methods', [PaymentMethodsController::class, 'index'])->name('payment-methods.index');
Route::get('/about-us', [AboutUsController::class, 'index'])->name('about-us.index');
Route::get('/help', [HelpController::class, 'index'])->name('help.index');
Route::get('/product/search', [ProductController::class, 'search'])->name('product.search');
Route::get('/product/{category}', [ProductController::class, 'category'])->name('product.category.index');
Route::get('/product/{category}/{subCategory}', [ProductController::class, 'subCategory'])->name('product.sub-category.index');
Route::get('/product/{category}/{subCategory}/{subSubCategory}/{slug}', [ProductController::class, 'show'])->name('product.show');
Route::get('/product/{category}/{subCategory}/{slug}', [ProductController::class, 'showSparepart'])
  ->where('category', 'sparepart')
  ->name('product.show.sparepart');
Route::get('/product/{category}/{subCategory}/{subSubCategory}', [ProductController::class, 'subSubCategory'])
  ->name('product.sub-sub-category.index');
Route::get('/showcase/{slug}', [ShowCaseController::class, 'show'])->name('showcase.show');

// SITEMAP ROUTE
Route::get('/sitemap.xml', [SitemapController::class, 'generateSitemap']);

// YOUTUBE ROUTE
Route::get('/youtube/rss', function () {
  $channelId = 'UCo21YDF0Z6uBsGcOKdIJBMQ';
  $url = "https://www.youtube.com/feeds/videos.xml?channel_id={$channelId}";

  $response = Http::get($url);
  return response($response->body(), 200)->header('Content-Type', 'application/xml');
});
