<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\VideoTestimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class VideoTestimonialController extends Controller
{
    /**
     * Display a listing of the video testimonials.
     */
    public function index()
    {
        $videoTestimonials = VideoTestimonial::orderBy('display_order', 'asc')->orderBy('created_at', 'desc')->get();
        return view('admin.video-testimonials.index', compact('videoTestimonials'));
    }

    /**
     * Show the form for creating a new video testimonial.
     */
    public function create()
    {
        return view('admin.video-testimonials.create');
    }

    /**
     * Store a newly created video testimonial in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'client_name' => 'required|string|max:255',
            'client_position' => 'nullable|string|max:255',
            'client_company' => 'nullable|string|max:255',
            'video_type' => 'required|in:upload,youtube,vimeo',
            'video_file' => 'required_if:video_type,upload|file|mimes:mp4,mov,avi,wmv|max:102400', // 100MB max
            'video_url' => 'required_if:video_type,youtube,vimeo|nullable|url',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'duration' => 'nullable|integer',
            'display_order' => 'nullable|integer',
        ]);

        $data = $request->only(['title', 'description', 'client_name', 'client_position', 'client_company', 'video_type', 'video_url', 'duration', 'display_order']);
        $data['is_active'] = $request->has('is_active') ? 1 : 0;
        $data['show_on_homepage'] = $request->has('show_on_homepage') ? 1 : 0;

        // Handle video upload
        if ($request->video_type === 'upload' && $request->hasFile('video_file')) {
            $videoName = time() . '_' . Str::slug($request->client_name) . '.' . $request->video_file->extension();
            $request->video_file->move(public_path('storage/video-testimonials'), $videoName);
            $data['video_file'] = 'video-testimonials/' . $videoName;
        }

        // Handle thumbnail upload
        if ($request->hasFile('thumbnail')) {
            $thumbnailName = time() . '_thumb_' . Str::slug($request->client_name) . '.' . $request->thumbnail->extension();
            $request->thumbnail->move(public_path('storage/video-testimonials/thumbnails'), $thumbnailName);
            $data['thumbnail'] = 'video-testimonials/thumbnails/' . $thumbnailName;
        }

        VideoTestimonial::create($data);

        return redirect()->route('admin.video-testimonials.index')->with('success', 'Video testimonial added successfully.');
    }

    /**
     * Show the form for editing the specified video testimonial.
     */
    public function edit($id)
    {
        $videoTestimonial = VideoTestimonial::findOrFail($id);
        return view('admin.video-testimonials.edit', compact('videoTestimonial'));
    }

    /**
     * Update the specified video testimonial in storage.
     */
    public function update(Request $request, $id)
    {
        $videoTestimonial = VideoTestimonial::findOrFail($id);

        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'client_name' => 'required|string|max:255',
            'client_position' => 'nullable|string|max:255',
            'client_company' => 'nullable|string|max:255',
            'video_type' => 'required|in:upload,youtube,vimeo',
            'video_file' => 'nullable|file|mimes:mp4,mov,avi,wmv|max:102400',
            'video_url' => 'required_if:video_type,youtube,vimeo|nullable|url',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'duration' => 'nullable|integer',
            'display_order' => 'nullable|integer',
        ]);

        $data = $request->only(['title', 'description', 'client_name', 'client_position', 'client_company', 'video_type', 'video_url', 'duration', 'display_order']);
        $data['is_active'] = $request->has('is_active') ? 1 : 0;
        $data['show_on_homepage'] = $request->has('show_on_homepage') ? 1 : 0;

        // Handle video upload
        if ($request->video_type === 'upload' && $request->hasFile('video_file')) {
            // Delete old video
            if ($videoTestimonial->video_file && file_exists(public_path('storage/' . $videoTestimonial->video_file))) {
                @unlink(public_path('storage/' . $videoTestimonial->video_file));
            }

            $videoName = time() . '_' . Str::slug($request->client_name) . '.' . $request->video_file->extension();
            $request->video_file->move(public_path('storage/video-testimonials'), $videoName);
            $data['video_file'] = 'video-testimonials/' . $videoName;
        }

        // Handle thumbnail upload
        if ($request->hasFile('thumbnail')) {
            // Delete old thumbnail
            if ($videoTestimonial->thumbnail && file_exists(public_path('storage/' . $videoTestimonial->thumbnail))) {
                @unlink(public_path('storage/' . $videoTestimonial->thumbnail));
            }

            $thumbnailName = time() . '_thumb_' . Str::slug($request->client_name) . '.' . $request->thumbnail->extension();
            $request->thumbnail->move(public_path('storage/video-testimonials/thumbnails'), $thumbnailName);
            $data['thumbnail'] = 'video-testimonials/thumbnails/' . $thumbnailName;
        }

        $videoTestimonial->update($data);

        return redirect()->route('admin.video-testimonials.index')->with('success', 'Video testimonial updated successfully.');
    }

    /**
     * Remove the specified video testimonial from storage.
     */
    public function destroy($id)
    {
        $videoTestimonial = VideoTestimonial::findOrFail($id);

        // Delete video file
        if ($videoTestimonial->video_file && file_exists(public_path('storage/' . $videoTestimonial->video_file))) {
            @unlink(public_path('storage/' . $videoTestimonial->video_file));
        }

        // Delete thumbnail
        if ($videoTestimonial->thumbnail && file_exists(public_path('storage/' . $videoTestimonial->thumbnail))) {
            @unlink(public_path('storage/' . $videoTestimonial->thumbnail));
        }

        $videoTestimonial->delete();

        return redirect()->route('admin.video-testimonials.index')->with('success', 'Video testimonial deleted successfully.');
    }
}
