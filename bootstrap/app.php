<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Support\Facades\Route;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        api: __DIR__ . '/../routes/api.php',  // Add this line
        health: '/up',
        then: function () {
            Route::prefix('admin')
                ->name('admin.')
                ->middleware('web')
                ->group(base_path('routes/admin.php'));
        }
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->alias([
            'admin.auth' => \App\Http\Middleware\AdminAuthMiddleware::class,
            'admin.permission' => \App\Http\Middleware\AdminPermission::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();