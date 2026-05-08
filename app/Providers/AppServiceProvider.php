<?php

namespace App\Providers;

use App\Models\Blog;
use App\Models\PageMeta;
use App\Services\SitemapService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        if (
            (isset($_SERVER['HTTPS']) && ($_SERVER['HTTPS'] === 'on' || $_SERVER['HTTPS'] === 1)) ||
            (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https') ||
            env('APP_ENV') === 'production'
        ) {
            \Illuminate\Support\Facades\URL::forceScheme('https');
        }

        require_once app_path('helpers.php');

        Blog::saved(function () {
            app(SitemapService::class)->generate();
        });

        Blog::deleted(function () {
            app(SitemapService::class)->generate();
        });

        PageMeta::saved(function () {
            app(SitemapService::class)->generate();
        });

        PageMeta::deleted(function () {
            app(SitemapService::class)->generate();
        });
    }
}
