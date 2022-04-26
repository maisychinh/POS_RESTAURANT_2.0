<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\ManagerController;
use App\Http\Controllers\ClerkController;
use App\Http\Controllers\ChefController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\HomeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Home
Route::get('/', [HomeController::class, 'index']);

Route::get('/home', [HomeController::class, 'index']);


//User
Route::get('/login', [UserController::class, 'showLogin']);

Route::get('/login', [UserController::class, 'showRegister']);

Route::post('/login', [UserController::class, 'login']);

Route::post('/logout', [UserController::class, 'logout']);

Route::post('/register', [UserController::class, 'register']);


//Make Order
Route::get('/order', [OrderController::class, 'index']);

Route::get('/order/payment', [OrderController::class, 'payment']);

Route::get('/order/{id}', [OrderController::class, 'show']);

Route::post('/order/create', [OrderController::class, 'create']);

Route::post('/order/payment-method', [OrderController::class, 'choosePaymentMethod']);

//Clerk
Route::get('/clerk', [ClerkController::class, 'index']);

Route::post('/clerk/approve/{id}', [ClerkController::class, 'approveOrder']);

Route::post('/clerk/cancel/{id}', [ClerkController::class, 'cancelOrder']);

Route::post('/clerk/confirm-payment/{id}', [ClerkController::class, 'confirmPaymentOrder']);


//Chef
Route::get('/chef', [ChefController::class, 'index']);

Route::post('/chef/cook/{id}', [ChefController::class, 'cookDishesInOrder']);

Route::post('/chef/complete/{id}', [ChefController::class, 'completeOrder']);

//Manage
Route::get('/manager', [ManagerController::class, 'index']);

Route::post('/manager/menu-item/create', [ManagerController::class, 'createMenuItem']);

Route::post('/manager/menu-item/update', [ManagerController::class, 'updateMenuItem']);

Route::post('/manager/menu-item/delete', [ManagerController::class, 'deleteMenuItem']);
