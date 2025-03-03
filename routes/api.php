<?php

use App\Http\Controllers\Api\HelpersApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// API CONTROLLERS
use App\Http\Controllers\Api\{
    PostController,
    ProductController,
};

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


// API PRODUCT ROUTE
// Route::controller(ProductController::class)->prefix('products')->group(function () {
//     Route::get('/{subSubCategory}', 'getSubSubCategoryProducts');
// });

// API POST ROUTE
Route::controller(PostController::class)->prefix('posts')->group(function () {
    Route::get('/', 'index');
});
