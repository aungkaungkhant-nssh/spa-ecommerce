<?php

use App\Http\Controllers\Backend\Auth\AdminAuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backend\AdminUserApiController;

// Route::get("/admin/login",[AdminAuthController::class,"showLogin"]
// )->name("admin.login");
Route::get("/admin/login",function(){
    return view('backend.home');}
)->name("admin.login")->middleware(["guest:admin"]);
Route::post("/admin/login",[AdminAuthController::class,"login"]);

Route::prefix("/admin")->middleware(["auth:admin"])->group(function(){
    Route::post("/logout",[AdminAuthController::class,"logout"]);
    Route::post("/create-admin",[AdminUserApiController::class,"store"]);
    Route::get("/get-admin",[AdminUserApiController::class,"getAdmin"]);
    Route::get('/edit-admin/{id}',[AdminUserApiController::class,"editAdmin"]);
    Route::put("/update-admin",[AdminUserApiController::class,"updateAdmin"]);
    Route::delete("delete-admin/{id}",[AdminUserApiController::class,"destroyAdmin"]);
    Route::get('{any}', function () {
        return view('backend.home');
    })->where("any",".*");
});
