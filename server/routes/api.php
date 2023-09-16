<?php

use App\Http\Controllers\ArtistController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\SettingsController;
use App\Http\Resources\ArtistsResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::group(
    [
        'namespace'=>'App\Http\Controllers',
        'middleware'=>'api'
    ],
    function(){

        Route::group(
        [
             'prefix' => 'auth'
        ],
         function(){

            Route::post('/register', 'AuthController@register');
            Route::post('/login', 'AuthController@login');

         }
    );

    Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
    });

    Route::group(
        [
            'prefix' => 'settings'
        ],
        function () {
            Route::get('/', 'SettingsController@index');
            Route::post('/', 'SettingsController@create')->middleware(['auth:sanctum']);
            Route::put('/', 'SettingsController@update')->middleware(['auth:sanctum']);
            Route::delete('/{id}', 'SettingsController@delete')->middleware(['auth:sanctum']);
        }
    );

    Route::group(
        [
             'prefix' => 'categories'
        ],
         function(){
            Route::get('/', 'CategoriesController@index');
            Route::get('/{id}', 'CategoriesController@getCategoryById');
            Route::post('/', 'CategoriesController@create')->middleware(['auth:sanctum']);
            Route::put('/', 'CategoriesController@update')->middleware(['auth:sanctum']);
            Route::delete('/{id}', 'CategoriesController@delete')->middleware(['auth:sanctum']);
         }
    );

    Route::group(
        [
             'prefix' => 'artists'
        ],
         function(){
            Route::get('/', 'ArtistController@index');
            Route::get('/{id}', 'ArtistController@getArtist');
            Route::post('/', 'ArtistController@create')->middleware(['auth:sanctum']);
            Route::put('/', 'ArtistController@update')->middleware(['auth:sanctum']);
            Route::delete('/{id}', 'ArtistController@delete')->middleware(['auth:sanctum']);
         }
    );

    Route::group(
        [
             'prefix' => 'products'
        ],
         function(){
            Route::get('/', 'ProductsController@index');
            Route::get('/{id}', 'ProductsController@getProductById');
            Route::get('category/{category_id}', 'ProductsController@getProductByCategory');
            Route::post('search/product', 'ProductsController@searchForProduct');
            Route::get('artist/{artist_id}', 'ProductsController@getProductByArtist');
            Route::post('/', 'ProductsController@create')->middleware(['auth:sanctum']);
            Route::put('/', 'ProductsController@update')->middleware(['auth:sanctum']);
            Route::delete('/{id}', 'ProductsController@delete')->middleware(['auth:sanctum']);
         }
    );

        Route::group(
            [
                'prefix' => 'orders',
                'middleware' =>'auth:sanctum'
            ],
            function () {
                Route::get('/{id}', 'OrderController@getOrder');
                Route::post('/', 'OrderController@create');
                Route::delete('/{id}', 'OrderController@delete');

            }
        );
}

);

