<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserFollowerController;
use Illuminate\Http\Request;
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

// Public routes

Route::get('/posts', [PostController::class, 'index']);
Route::post('/posts', [PostController::class, 'store']);
Route::get('/posts/user/{user}', [PostController::class, 'user']);

Route::post('/users/login', [UserController::class, 'login']);
Route::post('/users/signup', [UserController::class, 'signup']);


// Protected routes

Route::middleware('auth:sanctum')->get('/me', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/me/posts', [PostController::class, 'userPosts']);
    Route::get('/me/feed', [PostController::class, 'feed']);
    Route::get('/me/posts/{post}/liked', [PostController::class, 'isLiked']);
    Route::get('/me/followers', [UserController::class, 'followers']);
    Route::get('/me/suggestions', [UserController::class, 'suggestions']);

    Route::post('/users/logout', [UserController::class, 'logout']);

    Route::post('/user-followers/follow', [UserFollowerController::class, 'follow']);

    Route::post('/posts/like', [PostController::class, 'like']);
    Route::post('/posts/unlike', [PostController::class, 'unlike']);

    Route::post('/posts/comments', [PostController::class, 'addComment']);
});
