<?php

use App\Http\Controllers\Admin\CategoriesController;
use App\Http\Controllers\Admin\LoginController;
use App\Http\Controllers\Admin\HomeController;
use App\Http\Controllers\DirectionController;
use Illuminate\Support\Facades\Route;

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

Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', [LoginController::class, 'login']);
    Route::get('logout', [LoginController::class, 'logout']);

    Route::group([
        'middleware' => ['auth:api', 'cors'], 'prefix' => 'admin'
    ], function () {
        Route::get('home', [HomeController::class, 'index']);
        Route::get('categories', [CategoriesController::class, 'index']);
    });
});

Route::get('get-province', [DirectionController::class, 'getProvince']);
Route::get('get-district/{provinceId}', [DirectionController::class, 'getDistrict']);
Route::get('get-commune/{districtId}', [DirectionController::class, 'getCommune']);
