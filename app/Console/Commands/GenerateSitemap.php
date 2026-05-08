<?php

namespace App\Console\Commands;

use App\Services\SitemapService;
use Illuminate\Console\Command;

class GenerateSitemap extends Command
{
    protected $signature = 'sitemap:generate';
    protected $description = 'Generate the sitemap.';

    public function handle(SitemapService $sitemapService)
    {
        $sitemapService->generate();

        $this->info('Sitemap generated successfully.');
    }
}
