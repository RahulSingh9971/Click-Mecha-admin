<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Sitemap\Contracts\Sitemapable;
use Spatie\Sitemap\Tags\Url;

class Page extends Model implements Sitemapable
{
    public function toSitemapTag(): Url | string | array
    {
        return route('pages.show', $this->slug);
    }
}