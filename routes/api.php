<?php

use App\Http\Controllers\MetaWebhookController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\BlogController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\ClientController as ApiClientController;
use App\Http\Controllers\Api\CareerController as ApiCareerController;
use App\Http\Controllers\Api\HomeController as ApiHomeController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


// Route::post('/test-web', function () {
//     return response('hi', 200);
// })


Route::get('/blogs', [BlogController::class, 'index']);
Route::get('/blogs/{slug}', [BlogController::class, 'show']);


// Alias for contact to bypass redirect issues
Route::match(['get', 'post'], '/contact-submit', [ContactController::class, 'store']);

Route::get('/contact-us', function (Request $request) {
    return response()->json([
        'status' => false,
        'message' => 'Method Not Allowed. You sent a GET request (or were redirected to one). This endpoint expects POST.',
        'debug_info' => [
            'received_method' => $request->method(),
            'received_url' => $request->fullUrl(),
            'tips' => [
                'Do not use http if your server forces https',
                'Do not add/remove trailing slashes if your server corrects them'
            ]
        ]
    ], 405);
});
Route::post('/contact-us', [ContactController::class, 'store']);


Route::get('/careers', [ApiCareerController::class, 'index']);
Route::get('/careers/{slug}', [ApiCareerController::class, 'show']);
Route::post('/careers/apply', [ApiCareerController::class, 'apply']);


Route::get('/clients', [ApiClientController::class, 'index']);
Route::get('/clients/homepage', [ApiClientController::class, 'homepage']);
Route::get('/about', [\App\Http\Controllers\Api\AboutController::class, 'index']);


// Home Page API
Route::get('/home', [ApiHomeController::class, 'index']);
Route::get('/home/hero', [ApiHomeController::class, 'hero']);
Route::get('/home/about', [ApiHomeController::class, 'about']);
Route::get('/home/services', [ApiHomeController::class, 'services']);
Route::get('/home/statistics', [ApiHomeController::class, 'statistics']);
Route::get('/home/testimonials', [ApiHomeController::class, 'testimonials']);
Route::get('/services', [\App\Http\Controllers\Api\ServiceController::class, 'index']);
Route::get('/home/work-showcase', [ApiHomeController::class, 'workShowcase']);
Route::get('/home/clients', [ApiHomeController::class, 'clients']);
Route::get('/home/video-testimonials', [ApiHomeController::class, 'videoTestimonials']);
Route::get('/home/company-highlight', [ApiHomeController::class, 'companyHighlight']);
Route::get('/home/seo/{pageName?}', [ApiHomeController::class, 'seo']);

Route::get('/page-meta', [\App\Http\Controllers\Api\PageMetaController::class, 'index']);
Route::get('/page-meta/{slug}', [\App\Http\Controllers\Api\PageMetaController::class, 'show']);