<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AppController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/welcome', function () {
    return view('welcome');
});

// Public routes needs to be defined as exact routes
Route::get('/', [HomeController::class, 'index']);
Route::get('/about', [HomeController::class, 'index']);
Route::get('/login', [HomeController::class, 'index']);

// // Can seperate admin pages from the app
// Route::middleware('auth:sanctum')->get('/admin{any}', [AdminController::class, 'index'])->where('any', '.*');

// // All app routes will be reached here
// Route::middleware('auth:sanctum')->get('/{any}', [AppController::class, 'index'])->where('any', '.*');


