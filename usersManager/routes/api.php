<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;

Route::post('login', [UserController::class, 'login']);
Route::post('auth/validate', [UserController::class, 'validateUser']);

Route::get('users', [UserController::class, 'index']);
Route::post('users', [UserController::class, 'store']);

Route::get('posts', [PostController::class, 'index']);
Route::post('posts', [PostController::class, 'store']);
Route::get('posts/{token}', [PostController::class, 'myPosts']);