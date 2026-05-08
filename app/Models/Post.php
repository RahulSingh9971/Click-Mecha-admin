<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Sitemap\Contracts\Sitemapable;
use Spatie\Sitemap\Tags\Url;

class Post extends Model implements Sitemapable
{
    public function toSitemapTag(): Url | string | array
    {
        return route('posts.show', $this->slug);
    }
}