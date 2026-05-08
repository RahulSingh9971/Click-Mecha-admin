<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SeoSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class SeoSettingController extends Controller
{
    /**
     * Display a listing of the SEO settings.
     */
    public function index()
    {
        $seoSettings = SeoSetting::orderBy('page_name', 'asc')->get();
        return view('admin.seo-settings.index', compact('seoSettings'));
    }

    /**
     * Show the form for creating a new SEO setting.
     */
    public function create()
    {
        return view('admin.seo-settings.create');
    }

    /**
     * Store a newly created SEO setting in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'page_name' => 'required|string|max:255|unique:seo_settings,page_name',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string',
            'meta_keywords' => 'nullable|string',
            'og_title' => 'nullable|string|max:255',
            'og_description' => 'nullable|string',
            'og_image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'og_type' => 'nullable|string|max:255',
            'twitter_card' => 'nullable|string|max:255',
            'twitter_title' => 'nullable|string|max:255',
            'twitter_description' => 'nullable|string',
            'twitter_image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'canonical_url' => 'nullable|url',
            'schema_markup' => 'nullable|string',
        ]);

        $data = $request->except(['og_image', 'twitter_image']);
        $data['is_active'] = $request->has('is_active') ? 1 : 0;

        if ($request->hasFile('og_image')) {
            $ogImageName = time() . '_og_' . Str::slug($request->page_name) . '.' . $request->og_image->extension();
            $request->og_image->move(public_path('storage/seo'), $ogImageName);
            $data['og_image'] = 'seo/' . $ogImageName;
        }

        if ($request->hasFile('twitter_image')) {
            $twitterImageName = time() . '_twitter_' . Str::slug($request->page_name) . '.' . $request->twitter_image->extension();
            $request->twitter_image->move(public_path('storage/seo'), $twitterImageName);
            $data['twitter_image'] = 'seo/' . $twitterImageName;
        }

        SeoSetting::create($data);

        return redirect()->route('admin.seo-settings.index')->with('success', 'SEO setting added successfully.');
    }

    /**
     * Show the form for editing the specified SEO setting.
     */
    public function edit($id)
    {
        $seoSetting = SeoSetting::findOrFail($id);
        return view('admin.seo-settings.edit', compact('seoSetting'));
    }

    /**
     * Update the specified SEO setting in storage.
     */
    public function update(Request $request, $id)
    {
        $seoSetting = SeoSetting::findOrFail($id);

        $request->validate([
            'page_name' => 'required|string|max:255|unique:seo_settings,page_name,' . $id,
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string',
            'meta_keywords' => 'nullable|string',
            'og_title' => 'nullable|string|max:255',
            'og_description' => 'nullable|string',
            'og_image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'og_type' => 'nullable|string|max:255',
            'twitter_card' => 'nullable|string|max:255',
            'twitter_title' => 'nullable|string|max:255',
            'twitter_description' => 'nullable|string',
            'twitter_image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'canonical_url' => 'nullable|url',
            'schema_markup' => 'nullable|string',
        ]);

        $data = $request->except(['og_image', 'twitter_image']);
        $data['is_active'] = $request->has('is_active') ? 1 : 0;

        if ($request->hasFile('og_image')) {
            // Delete old image
            if ($seoSetting->og_image && file_exists(public_path('storage/' . $seoSetting->og_image))) {
                @unlink(public_path('storage/' . $seoSetting->og_image));
            }

            $ogImageName = time() . '_og_' . Str::slug($request->page_name) . '.' . $request->og_image->extension();
            $request->og_image->move(public_path('storage/seo'), $ogImageName);
            $data['og_image'] = 'seo/' . $ogImageName;
        }

        if ($request->hasFile('twitter_image')) {
            // Delete old image
            if ($seoSetting->twitter_image && file_exists(public_path('storage/' . $seoSetting->twitter_image))) {
                @unlink(public_path('storage/' . $seoSetting->twitter_image));
            }

            $twitterImageName = time() . '_twitter_' . Str::slug($request->page_name) . '.' . $request->twitter_image->extension();
            $request->twitter_image->move(public_path('storage/seo'), $twitterImageName);
            $data['twitter_image'] = 'seo/' . $twitterImageName;
        }

        $seoSetting->update($data);

        return redirect()->route('admin.seo-settings.index')->with('success', 'SEO setting updated successfully.');
    }

    /**
     * Remove the specified SEO setting from storage.
     */
    public function destroy($id)
    {
        $seoSetting = SeoSetting::findOrFail($id);

        if ($seoSetting->og_image && file_exists(public_path('storage/' . $seoSetting->og_image))) {
            @unlink(public_path('storage/' . $seoSetting->og_image));
        }

        if ($seoSetting->twitter_image && file_exists(public_path('storage/' . $seoSetting->twitter_image))) {
            @unlink(public_path('storage/' . $seoSetting->twitter_image));
        }

        $seoSetting->delete();

        return redirect()->route('admin.seo-settings.index')->with('success', 'SEO setting deleted successfully.');
    }
}
