<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    /**
     * Get list of blogs with search and pagination.
     */
    public function index(Request $request)
    {
        $query = Blog::with(['category', 'author', 'faqs'])
            ->where('status', 1); // Assuming 1 is active

        if ($request->has('search') && !empty($request->search)) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                    ->orWhere('desc', 'like', "%{$search}%");
            });
        }

        $blogs = $query->orderBy('date', 'desc')->paginate(10);

        // Append image URL to each blog
        $blogs->getCollection()->transform(function ($blog) {
            $blog->image_url = $blog->image ? asset('public/storage/blogs/media/' . $blog->image) : null;
            return $blog;
        });

        return response()->json([
            'status' => true,
            'data' => $blogs
        ]);
    }

    /**
     * Get blog details by slug.
     */
    public function show($slug)
    {
        $blog = Blog::with(['category', 'author', 'faqs'])
            ->where('slug', $slug)
            ->where('status', 1)
            ->first();

        if (!$blog) {
            return response()->json([
                'status' => false,
                'message' => 'Blog not found'
            ], 404);
        }

        $blog->image_url = $blog->image ? asset('public/storage/blogs/media/' . $blog->image) : null;

        // Recent blogs (excluding current one)
        $recentBlogs = Blog::where('slug', '!=', $slug)
            ->where('status', 1)
            ->orderBy('date', 'desc')
            ->limit(3)
            ->get();

        $recentBlogs->transform(function ($recent) {
            $recent->image_url = $recent->image ? asset('public/storage/blogs/media/' . $recent->image) : null;
            return $recent;
        });

        return response()->json([
            'status' => true,
            'data' => $blog,
            'recent_blogs' => $recentBlogs
        ]);
    }
}
