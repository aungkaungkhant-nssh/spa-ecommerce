<?php

use App\Http\Controllers\Backend\AdminApiController;
use App\Http\Controllers\Backend\AdminUserApiController;
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
Route::post("/create-admin",[AdminUserApiController::class,"store"]);
Route::get("/get-admin",[AdminUserApiController::class,"getAdmin"]);
Route::get('/edit-admin/{id}',[AdminUserApiController::class,"editAdmin"]);
Route::put("/update-admin",[AdminUserApiController::class,"updateAdmin"]);
Route::delete("delete-admin/{id}",[AdminUserApiController::class,"destroyAdmin"]);