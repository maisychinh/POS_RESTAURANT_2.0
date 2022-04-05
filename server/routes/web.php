<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\ManagerController;
use App\Http\Controllers\ClerkController;
use App\Http\Controllers\ChefController;
use App\Http\Controllers\MakeOrderController;
use App\Http\Controllers\HomeController;
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

//Home
Route::get('/', [HomeController::class, 'index']);

Route::get('/home', [HomeController::class, 'index']);


//User
Route::get('/login', [UserController::class, 'login']);

Route::get('/logout', [UserController::class, 'logout']);

Route::get('/register', [UserController::class, 'register']);

Route::post('/check', [UserController::class, 'check']);


//Make Order
Route::get('/make-order', [MakeOrderController::class, 'index']);

Route::get('/make-order/payment', [MakeOrderController::class, 'payment']);

Route::get('/make-order/view',[MakeOrderController::class, 'view']);

//Clerk
Route::get('/clerk', [ClerkController::class, 'index']);

//Chef
Route::get('/chef', [ChefController::class, 'index']);

//Manage
Route::get('/manager', [ManagerController::class, 'index']);



// Route::resource('orders', OrderController::class);


// Route::resource('dishs', DishController::class);