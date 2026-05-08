<?php

namespace App\Services;

use App\Models\Blog;
use App\Models\PageMeta;
use Illuminate\Support\Str;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class SitemapService
{
    public function generate(): void
    {
        $sitemap = Sitemap::create();
        $seenUrls = [];

        $this->addPageMetaUrls($sitemap, $seenUrls);
        $this->addBlogUrls($sitemap, $seenUrls);

        $sitemap->writeToFile(public_path('sitemap.xml'));
    }

    protected function addPageMetaUrls(Sitemap $sitemap, array &$seenUrls): void
    {
        PageMeta::query()
            ->orderBy('slug')
            ->get()
            ->each(function (PageMeta $pageMeta) use ($sitemap, &$seenUrls) {
                $slug = trim((string) $pageMeta->slug);

                if ($slug === '' || Str::startsWith($slug, 'blog/')) {
                    return;
                }

                $this->addUrl(
                    $sitemap,
                    $seenUrls,
                    $this->makeFrontendUrl($slug),
                    $pageMeta->updated_at
                );
            });
    }

    protected function addBlogUrls(Sitemap $sitemap, array &$seenUrls): void
    {
        Blog::query()
            ->where('status', 1)
            ->orderByDesc('updated_at')
            ->get()
            ->each(function (Blog $blog) use ($sitemap, &$seenUrls) {
                if (blank($blog->slug)) {
                    return;
                }

                $this->addUrl(
                    $sitemap,
                    $seenUrls,
                    $this->makeFrontendUrl('blog/' . ltrim($blog->slug, '/')),
                    $blog->updated_at
                );
            });
    }

    protected function addUrl(Sitemap $sitemap, array &$seenUrls, string $url, $lastModifiedAt = null): void
    {
        if (isset($seenUrls[$url])) {
            return;
        }

        $seenUrls[$url] = true;

        $tag = Url::create($url)
            ->setChangeFrequency(Url::CHANGE_FREQUENCY_DAILY)
            ->setPriority(0.8);

        if ($lastModifiedAt) {
            $tag->setLastModificationDate($lastModifiedAt);
        }

        $sitemap->add($tag);
    }

    protected function makeFrontendUrl(string $slug): string
    {
        $baseUrl = rtrim(config('app.frontend_url', config('app.url')), '/');
        $normalizedSlug = trim($slug);

        if ($normalizedSlug === '' || $normalizedSlug === '/' || $normalizedSlug === 'home') {
            return $baseUrl;
        }

        return $baseUrl . '/' . ltrim($normalizedSlug, '/');
    }
}
