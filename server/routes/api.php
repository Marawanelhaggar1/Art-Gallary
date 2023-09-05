<?php

use App\Http\Controllers\ArtistController;
use App\Http\Controllers\CategoriesController;
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
            'prefix' => 'settings'
        ],
        function () {
            Route::get('/', 'SettingsController@index');
            Route::post('/', 'SettingsController@create');
            Route::put('/', 'SettingsController@update');
            Route::delete('/{id}', 'SettingsController@delete');
        }
    );

    Route::group(
        [
             'prefix' => 'categories'
        ],
         function(){
             Route::get('/', 'CategoriesController@index');
            Route::post('/', 'CategoriesController@create');
            Route::put('/', 'CategoriesController@update');
            Route::delete('/{id}', 'CategoriesController@delete');
         }
    );

    Route::group(
        [
             'prefix' => 'artists'
        ],
         function(){
             Route::get('/', 'ArtistController@index');
            Route::post('/', 'ArtistController@create');
            Route::put('/', 'ArtistController@update');
            Route::delete('/{id}', 'ArtistController@delete');
         }
    );
}

);

