<?php

use Illuminate\Support\Facades\Route;

// PAGES CONTROLLERS
use App\Http\Controllers\Pages\{
  BerandaController,
  BlogController
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

Route::get('/', [BerandaController::class, 'index'])->name('beranda.index');
Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');
