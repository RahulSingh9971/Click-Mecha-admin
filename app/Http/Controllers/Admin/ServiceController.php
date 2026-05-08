<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index()
    {
        $pageContent = \App\Models\ServicePageContent::first();
        $services = \App\Models\Service::orderBy('display_order')->get();
        $whyChooseUs = \App\Models\WhyChooseUs::orderBy('display_order')->get();
        return view('admin.services.index', compact('pageContent', 'services', 'whyChooseUs'));
    }

    public function updateContent(Request $request)
    {
        $request->validate([
            'hero_title' => 'nullable|string',
            'hero_subtitle' => 'nullable|string',
            'hero_image' => 'nullable|image|max:2048',
            'seo_title' => 'nullable|string',
            'seo_description' => 'nullable|string',
            'why_work_title' => 'nullable|string',
            'why_work_subtitle' => 'nullable|string',
        ]);

        $content = \App\Models\ServicePageContent::firstOrNew();
        $content->fill($request->except('hero_image'));

        if ($request->hasFile('hero_image')) {
            if ($content->hero_image && file_exists(public_path($content->hero_image))) {
                @unlink(public_path($content->hero_image));
            }
            $imageName = time() . '_hero.' . $request->hero_image->extension();
            $request->hero_image->move(public_path('storage/services'), $imageName);
            $content->hero_image = 'public/storage/services/' . $imageName;
        }

        $content->save();

        return redirect()->back()->with('success', 'Page content updated successfully.');
    }

    public function create()
    {
        return redirect()->route('admin.services.index');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'slug' => 'required|string|unique:services,slug',
            'icon' => 'nullable|image',
            'image' => 'nullable|image',
            'display_order' => 'integer',
        ]);

        $data = $request->all();
        $data['is_active'] = $request->has('is_active');

        if ($request->hasFile('icon')) {
            $name = time() . '_icon.' . $request->icon->extension();
            $request->icon->move(public_path('storage/services'), $name);
            $data['icon'] = 'storage/services/' . $name;
        }

        if ($request->hasFile('image')) {
            $name = time() . '_img.' . $request->image->extension();
            $request->image->move(public_path('storage/services'), $name);
            $data['image'] = 'public/storage/services/' . $name;
        }

        \App\Models\Service::create($data);

        return redirect()->route('admin.services.index')->with('success', 'Service created successfully.');
    }

    public function edit($id)
    {
        $service = \App\Models\Service::findOrFail($id);
        return view('admin.services.edit', compact('service'));
    }

    public function update(Request $request, $id)
    {
        $service = \App\Models\Service::findOrFail($id);

        $request->validate([
            'title' => 'required|string',
            'slug' => 'required|string|unique:services,slug,' . $service->id,
            'icon' => 'nullable|image',
            'image' => 'nullable|image',
            'display_order' => 'integer',
        ]);

        $data = $request->all();
        $data['is_active'] = $request->has('is_active');

        if ($request->hasFile('icon')) {
            if ($service->icon && file_exists(public_path($service->icon))) {
                @unlink(public_path($service->icon));
            }
            $name = time() . '_icon.' . $request->icon->extension();
            $request->icon->move(public_path('storage/services'), $name);
            $data['icon'] = 'public/storage/services/' . $name;
        }

        if ($request->hasFile('image')) {
            if ($service->image && file_exists(public_path($service->image))) {
                @unlink(public_path($service->image));
            }
            $name = time() . '_img.' . $request->image->extension();
            $request->image->move(public_path('storage/services'), $name);
            $data['image'] = 'public/storage/services/' . $name;
        }

        $service->update($data);

        return redirect()->route('admin.services.index')->with('success', 'Service updated successfully.');
    }

    public function destroy($id)
    {
        $service = \App\Models\Service::findOrFail($id);
        if ($service->icon && file_exists(public_path($service->icon))) {
            @unlink(public_path($service->icon));
        }
        if ($service->image && file_exists(public_path($service->image))) {
            @unlink(public_path($service->image));
        }
        $service->delete();
        return redirect()->back()->with('success', 'Service deleted successfully.');
    }

    // Why Choose Us Methods
    public function storeWhyChooseUs(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'description' => 'nullable|string',
            'icon' => 'nullable|image',
            'display_order' => 'integer',
        ]);

        $data = $request->all();
        $data['is_active'] = $request->has('is_active');

        if ($request->hasFile('icon')) {
            $name = time() . '_wcu_icon.' . $request->icon->extension();
            $request->icon->move(public_path('storage/services'), $name);
            $data['icon'] = 'public/storage/services/' . $name;
        }

        \App\Models\WhyChooseUs::create($data);

        return redirect()->back()->with('success', 'Item added successfully.');
    }

    public function updateWhyChooseUs(Request $request, $id)
    {
        $item = \App\Models\WhyChooseUs::findOrFail($id);

        $request->validate([
            'title' => 'required|string',
            'description' => 'nullable|string',
            'icon' => 'nullable|image',
            'display_order' => 'integer',
        ]);

        $data = $request->all();
        $data['is_active'] = $request->has('is_active');

        if ($request->hasFile('icon')) {
            if ($item->icon && file_exists(public_path($item->icon))) {
                @unlink(public_path($item->icon));
            }
            $name = time() . '_wcu_icon.' . $request->icon->extension();
            $request->icon->move(public_path('storage/services'), $name);
            $data['icon'] = 'public/storage/services/' . $name;
        }

        $item->update($data);

        return redirect()->back()->with('success', 'Item updated successfully.');
    }

    public function destroyWhyChooseUs($id)
    {
        $item = \App\Models\WhyChooseUs::findOrFail($id);
        if ($item->icon && file_exists(public_path($item->icon))) {
            @unlink(public_path($item->icon));
        }
        $item->delete();
        return redirect()->back()->with('success', 'Item deleted successfully.');
    }
}
