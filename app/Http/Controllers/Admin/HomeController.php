<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\HomeHeroSection;
use App\Models\HomeAboutSection;
use App\Models\HomeServiceCard;
use App\Models\HomeStatistic;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class HomeController extends Controller
{
    public function index()
    {
        $hero = HomeHeroSection::first();
        $about = HomeAboutSection::first();
        $services = HomeServiceCard::orderBy('display_order')->get();
        $statistics = HomeStatistic::orderBy('display_order')->get();
        $testimonials = Testimonial::orderBy('display_order')->get();

        return view('admin.home.index', compact('hero', 'about', 'services', 'statistics', 'testimonials'));
    }

    // Hero Section
    public function updateHero(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'button_text' => 'nullable|string|max:100',
            'button_link' => 'nullable|string|max:255',
            'background_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:2048'
        ]);

        $hero = HomeHeroSection::firstOrNew();

        if ($request->hasFile('background_image')) {
            if ($hero->background_image) {
                Storage::disk('public')->delete($hero->background_image);
            }
            $validated['background_image'] = $request->file('background_image')->store('home/hero', 'public');
        }

        $validated['is_active'] = $request->has('is_active');
        $hero->fill($validated);
        $hero->save();

        return redirect()->route('admin.home.index')->with('success', 'Hero section updated successfully!');
    }

    // About Section
    public function updateAbout(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'content' => 'nullable|string',
            'content_2' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
            'years_experience' => 'nullable|integer',
            'button_text' => 'nullable|string|max:100',
            'button_link' => 'nullable|string|max:255',
        ]);

        $about = HomeAboutSection::firstOrNew();

        if ($request->hasFile('image')) {
            if ($about->image) {
                Storage::disk('public')->delete($about->image);
            }
            $validated['image'] = $request->file('image')->store('home/about', 'public');
        }

        $validated['is_active'] = $request->has('is_active');
        $about->fill($validated);
        $about->save();

        return redirect()->route('admin.home.index')->with('success', 'About section updated successfully!');
    }

    // Service Cards
    public function storeService(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'icon' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp,svg|max:1024',
            'button_text' => 'nullable|string|max:100',
            'button_link' => 'nullable|string|max:255',
            'display_order' => 'nullable|integer',
        ]);

        if ($request->hasFile('icon')) {
            $validated['icon'] = $request->file('icon')->store('home/services', 'public');
        }

        $validated['is_active'] = $request->has('is_active');
        $validated['display_order'] = $validated['display_order'] ?? HomeServiceCard::max('display_order') + 1;

        HomeServiceCard::create($validated);

        return redirect()->route('admin.home.index')->with('success', 'Service card created successfully!');
    }

    public function updateService(Request $request, $id)
    {
        $service = HomeServiceCard::findOrFail($id);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'icon' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp,svg|max:1024',
            'button_text' => 'nullable|string|max:100',
            'button_link' => 'nullable|string|max:255',
            'display_order' => 'nullable|integer',
        ]);

        if ($request->hasFile('icon')) {
            if ($service->icon) {
                Storage::disk('public')->delete($service->icon);
            }
            $validated['icon'] = $request->file('icon')->store('home/services', 'public');
        }

        $validated['is_active'] = $request->has('is_active');
        $service->update($validated);

        return redirect()->route('admin.home.index')->with('success', 'Service card updated successfully!');
    }

    public function deleteService($id)
    {
        $service = HomeServiceCard::findOrFail($id);
        
        if ($service->icon) {
            Storage::disk('public')->delete($service->icon);
        }
        
        $service->delete();

        return redirect()->route('admin.home.index')->with('success', 'Service card deleted successfully!');
    }

    // Statistics
    public function storeStatistic(Request $request)
    {
        $validated = $request->validate([
            'label' => 'required|string|max:255',
            'value' => 'required|string|max:100',
            'suffix' => 'nullable|string|max:20',
            'icon' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp,svg|max:1024',
            'display_order' => 'nullable|integer',
        ]);

        if ($request->hasFile('icon')) {
            $validated['icon'] = $request->file('icon')->store('home/statistics', 'public');
        }

        $validated['is_active'] = $request->has('is_active');
        $validated['display_order'] = $validated['display_order'] ?? HomeStatistic::max('display_order') + 1;

        HomeStatistic::create($validated);

        return redirect()->route('admin.home.index')->with('success', 'Statistic created successfully!');
    }

    public function updateStatistic(Request $request, $id)
    {
        $statistic = HomeStatistic::findOrFail($id);

        $validated = $request->validate([
            'label' => 'required|string|max:255',
            'value' => 'required|string|max:100',
            'suffix' => 'nullable|string|max:20',
            'icon' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp,svg|max:1024',
            'display_order' => 'nullable|integer',
        ]);

        if ($request->hasFile('icon')) {
            if ($statistic->icon) {
                Storage::disk('public')->delete($statistic->icon);
            }
            $validated['icon'] = $request->file('icon')->store('home/statistics', 'public');
        }

        $validated['is_active'] = $request->has('is_active');
        $statistic->update($validated);

        return redirect()->route('admin.home.index')->with('success', 'Statistic updated successfully!');
    }

    public function deleteStatistic($id)
    {
        $statistic = HomeStatistic::findOrFail($id);
        
        if ($statistic->icon) {
            Storage::disk('public')->delete($statistic->icon);
        }
        
        $statistic->delete();

        return redirect()->route('admin.home.index')->with('success', 'Statistic deleted successfully!');
    }

    // Testimonials
    public function storeTestimonial(Request $request)
    {
        $validated = $request->validate([
            'client_name' => 'required|string|max:255',
            'client_position' => 'nullable|string|max:255',
            'client_company' => 'nullable|string|max:255',
            'testimonial_text' => 'required|string',
            'client_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:1024',
            'rating' => 'nullable|integer|min:1|max:5',
            'display_order' => 'nullable|integer',
        ]);

        if ($request->hasFile('client_image')) {
            $validated['client_image'] = $request->file('client_image')->store('home/testimonials', 'public');
        }

        $validated['is_active'] = $request->has('is_active');
        $validated['display_order'] = $validated['display_order'] ?? Testimonial::max('display_order') + 1;

        Testimonial::create($validated);

        return redirect()->route('admin.home.index')->with('success', 'Testimonial created successfully!');
    }

    public function updateTestimonial(Request $request, $id)
    {
        $testimonial = Testimonial::findOrFail($id);

        $validated = $request->validate([
            'client_name' => 'required|string|max:255',
            'client_position' => 'nullable|string|max:255',
            'client_company' => 'nullable|string|max:255',
            'testimonial_text' => 'required|string',
            'client_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:1024',
            'rating' => 'nullable|integer|min:1|max:5',
            'display_order' => 'nullable|integer',
        ]);

        if ($request->hasFile('client_image')) {
            if ($testimonial->client_image) {
                Storage::disk('public')->delete($testimonial->client_image);
            }
            $validated['client_image'] = $request->file('client_image')->store('home/testimonials', 'public');
        }

        $validated['is_active'] = $request->has('is_active');
        $testimonial->update($validated);

        return redirect()->route('admin.home.index')->with('success', 'Testimonial updated successfully!');
    }

    public function deleteTestimonial($id)
    {
        $testimonial = Testimonial::findOrFail($id);
        
        if ($testimonial->client_image) {
            Storage::disk('public')->delete($testimonial->client_image);
        }
        
        $testimonial->delete();

        return redirect()->route('admin.home.index')->with('success', 'Testimonial deleted successfully!');
    }
}
