<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\PageMeta;
use Illuminate\Http\Request;

class PageMetaController extends Controller
{
    /**
     * Get all page meta entries.
     * GET /api/page-meta
     */
    public function index()
    {
        $metas = PageMeta::orderBy('slug')->get(['slug', 'metaTitle', 'metaDesc', 'metaKeyword']);

        return response()->json([
            'status'  => true,
            'message' => 'All page meta fetched successfully.',
            'data'    => $metas,
        ]);
    }

    /**
     * Get page meta by slug.
     * GET /api/page-meta/{slug}
     */
    public function show($slug)
    {
        $meta = PageMeta::where('slug', $slug)->first();

        if (!$meta) {
            return response()->json([
                'status'  => false,
                'message' => 'No meta found for the given page slug.',
                'data'    => null,
            ], 404);
        }

        return response()->json([
            'status'  => true,
            'message' => 'Page meta fetched successfully.',
            'data'    => [
                'slug'        => $meta->slug,
                'metaTitle'   => $meta->metaTitle,
                'metaDesc'    => $meta->metaDesc,
                'metaKeyword' => $meta->metaKeyword,
            ],
        ]);
    }
}
