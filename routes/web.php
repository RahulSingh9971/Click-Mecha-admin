<?php

use App\Http\Controllers\MetaWebhookController;
use App\Http\Controllers\TriggerEventController;
use App\Http\Controllers\Web\HomeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;

Route::get('/', function () {
    return redirect()->route('admin.login');
});

Route::get('/clear-cache', function() {
    \Illuminate\Support\Facades\Artisan::call('optimize:clear');
    return "Cache cleared successfully!";
});


// Route::get('/sitemap.xml', function () {
//     return response()->file(public_path('sitemap.xml'));
// });
// Route::get('/robots.txt', function () {
//     return response()->file(public_path('robots.txt'));
// });

// // routes/web.php
// Route::get('/debug-weather-key', function () {
//     return response()->json([
//         'env_key' => env('OPENWEATHER_KEY'),
//         'config_key' => config('services.openweather.key') ?? null,
//     ]);
// });
// Route::get('/weather/esteem-misty-hills', [HomeController::class, 'esteemMistyHills']);
// // Route::get('/', [HomeController::class, 'index'])->name('index');
// Route::get('/', [HomeController::class, 'home'])->name('home');
// Route::get('/accommodations', [HomeController::class, 'accommodations'])->name('accommodations');
// Route::get('/about-us', [HomeController::class, 'aboutUs'])->name('about-us');
// Route::get('/club-rooms', [HomeController::class, 'clubRooms'])->name('club-rooms');
// Route::get('/villas-sweets', [HomeController::class, 'villasSweets'])->name('villas-sweets');
// Route::get('/dining', [HomeController::class, 'dinning'])->name('dinning');
// Route::get('/lawns-and-banquet', [HomeController::class, 'lawnsBanquet'])->name('lawns-and-banquet');
// Route::get('/gallery', [HomeController::class, 'gallery'])->name('gallery');
// Route::get('/privacy-policy', [HomeController::class, 'privacy'])->name('privacy-policy');
// Route::get('/terms-and-conditions', [HomeController::class, 'termsConditions'])->name('terms-and-conditions');
// // Route::get('/about', [HomeController::class, 'about'])->name('about');
// // Route::get('/contact', [HomeController::class, 'contact'])->name('contact');
// Route::post('/contact', [HomeController::class, 'storeContact'])->name('contact.store');
// Route::get('/thank-you', [HomeController::class, 'thankyou'])->name('thankyou');
// Route::get('/captcha/refresh', [HomeController::class, 'refreshCaptcha'])->name('captcha.refresh');
// Route::post('/track-event', [TriggerEventController::class, 'store'])->name('track.event');
// // // blogs
// // Route::get('/blogs', [HomeController::class, 'blogs'])->name('blogs');
// // Route::get('/{slug}', [HomeController::class, 'blogDetails'])->name('blog.detail');

// // Route::post('/lead/brochure', [HomeController::class, 'storeBrochure'])->name('lead.brochure');

// // // This route *forces* a file download (no inline open)
// // Route::get('/brochure/download', [HomeController::class, 'download'])->name('brochure.download');
