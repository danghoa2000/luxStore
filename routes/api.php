<?php

use App\Http\Controllers\Admin\AccountController;
use App\Http\Controllers\admin\AttributeController;
use App\Http\Controllers\Admin\CategoriesController;
use App\Http\Controllers\admin\EventController;
use App\Http\Controllers\Admin\GroupCategoryController;
use App\Http\Controllers\Admin\LoginController;
use App\Http\Controllers\Admin\HomeController;
use App\Http\Controllers\admin\ManufacturerController;
use App\Http\Controllers\admin\ProductController;
use App\Http\Controllers\admin\ShippingController;
use App\Http\Controllers\DirectionController;
use App\Http\Controllers\UploadController;
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
    Route::post('login', [LoginController::class, 'login'])->name('login');
    Route::get('logout', [LoginController::class, 'logout'])->name('logout');

    Route::group([
        'middleware' => ['auth:api', 'cors'], 'prefix' => 'admin'
    ], function () {
        Route::get('home', [HomeController::class, 'index'])->name('home');
        
        Route::get('categories', [CategoriesController::class, 'index'])->name('category');
        Route::post('categories/create', [CategoriesController::class, 'store'])->name('category.create');
        Route::put('categories/update', [CategoriesController::class, 'update'])->name('category.update');
        Route::get('categories/show', [CategoriesController::class, 'show'])->name('category.show');
        Route::delete('categories/delete/{id}', [CategoriesController::class, 'destroy'])->name('category.delete');

        Route::get('account', [AccountController::class, 'index'])->name('account');
        Route::post('account/create', [AccountController::class, 'store'])->name('account.create');
        Route::put('account/update', [AccountController::class, 'update'])->name('account.update');
        Route::get('account/show', [AccountController::class, 'show'])->name('account.show');
        Route::delete('account/delete/{id}', [AccountController::class, 'destroy'])->name('account.delete');

        Route::get('manufacturer', [ManufacturerController::class, 'index'])->name('manufacturer');
        Route::post('manufacturer/create', [ManufacturerController::class, 'store'])->name('manufacturer.create');
        Route::put('manufacturer/update', [ManufacturerController::class, 'update'])->name('manufacturer.update');
        Route::get('manufacturer/show', [ManufacturerController::class, 'show'])->name('manufacturer.show');
        Route::delete('manufacturer/delete/{id}', [ManufacturerController::class, 'destroy'])->name('manufacturer.delete');

        Route::get('group-category', [GroupCategoryController::class, 'index'])->name('groupCategory');
        Route::post('group-category/create', [GroupCategoryController::class, 'store'])->name('groupCategory.create');
        Route::put('group-category/update', [GroupCategoryController::class, 'update'])->name('groupCategory.update');
        Route::get('group-category/show', [GroupCategoryController::class, 'show'])->name('groupCategory.show');
        Route::delete('group-category/delete/{id}', [GroupCategoryController::class, 'destroy'])->name('groupCategory.delete');
        Route::post('group-category/attribute/create', [GroupCategoryController::class, 'attributeCreate'])->name('groupCategory.attribute.create');
        Route::get('group-category/attribute', [GroupCategoryController::class, 'attribute'])->name('groupCategory.attribute');

        Route::post('attribute/create', [AttributeController::class, 'store'])->name('attribute.store');
        Route::post('attribute/option', [AttributeController::class, 'option'])->name('attribute.option');

        Route::get('shipping', [ShippingController::class, 'index'])->name('shipping');
        Route::post('shipping/create', [ShippingController::class, 'store'])->name('shipping.create');
        Route::put('shipping/update', [ShippingController::class, 'update'])->name('shipping.update');
        Route::get('shipping/show', [ShippingController::class, 'show'])->name('shipping.show');

        Route::get('product', [ProductController::class, 'index'])->name('product');
        Route::post('product/create', [ProductController::class, 'store'])->name('product.create');
        Route::put('product/update', [ProductController::class, 'update'])->name('product.update');
        Route::get('product/show', [ProductController::class, 'show'])->name('product.show');
        Route::delete('product/delete/{id}', [ProductController::class, 'destroy'])->name('product.delete');

        Route::post('product/options', [ProductController::class, 'options'])->name('product.option');
        Route::post('product/attribute', [ProductController::class, 'attribute'])->name('product.attribute');

        Route::get('event', [EventController::class, 'index'])->name('event');
        Route::put('event/update', [EventController::class, 'update'])->name('event.update');
    });
});

Route::post('upload', [UploadController::class, 'upload']);
Route::get('get-province', [DirectionController::class, 'getProvince']);
Route::get('get-district/{provinceId}', [DirectionController::class, 'getDistrict']);
Route::get('get-commune/{districtId}', [DirectionController::class, 'getCommune']);
