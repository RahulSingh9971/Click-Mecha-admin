<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\WorkShowcase;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class WorkShowcaseController extends Controller
{
    /**
     * Display a listing of the work showcase items.
     */
    public function index()
    {
        $workShowcases = WorkShowcase::orderBy('display_order', 'asc')->orderBy('created_at', 'desc')->get();
        return view('admin.work-showcase.index', compact('workShowcases'));
    }

    /**
     * Show the form for creating a new work showcase item.
     */
    public function create()
    {
        return view('admin.work-showcase.create');
    }

    /**
     * Store a newly created work showcase item in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,svg,webp|max:2048',
            'category' => 'nullable|string|max:255',
            'link' => 'nullable|url',
            'display_order' => 'nullable|integer',
        ]);

        $data = $request->only(['title', 'description', 'category', 'link', 'display_order']);
        $data['is_active'] = $request->has('is_active') ? 1 : 0;
        $data['show_on_homepage'] = $request->has('show_on_homepage') ? 1 : 0;

        if ($request->hasFile('image')) {
            $imageName = time() . '_' . Str::slug($request->title) . '.' . $request->image->extension();
            $request->image->move(public_path('storage/work-showcase'), $imageName);
            $data['image'] = 'work-showcase/' . $imageName;
        }

        WorkShowcase::create($data);

        return redirect()->route('admin.work-showcase.index')->with('success', 'Work showcase item added successfully.');
    }

    /**
     * Show the form for editing the specified work showcase item.
     */
    public function edit($id)
    {
        $workShowcase = WorkShowcase::findOrFail($id);
        return view('admin.work-showcase.edit', compact('workShowcase'));
    }

    /**
     * Update the specified work showcase item in storage.
     */
    public function update(Request $request, $id)
    {
        $workShowcase = WorkShowcase::findOrFail($id);

        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,svg,webp|max:2048',
            'category' => 'nullable|string|max:255',
            'link' => 'nullable|url',
            'display_order' => 'nullable|integer',
        ]);

        $data = $request->only(['title', 'description', 'category', 'link', 'display_order']);
        $data['is_active'] = $request->has('is_active') ? 1 : 0;
        $data['show_on_homepage'] = $request->has('show_on_homepage') ? 1 : 0;

        if ($request->hasFile('image')) {
            // Delete old image
            if ($workShowcase->image && file_exists(public_path('storage/' . $workShowcase->image))) {
                @unlink(public_path('storage/' . $workShowcase->image));
            }

            $imageName = time() . '_' . Str::slug($request->title) . '.' . $request->image->extension();
            $request->image->move(public_path('storage/work-showcase'), $imageName);
            $data['image'] = 'work-showcase/' . $imageName;
        }

        $workShowcase->update($data);

        return redirect()->route('admin.work-showcase.index')->with('success', 'Work showcase item updated successfully.');
    }

    /**
     * Remove the specified work showcase item from storage.
     */
    public function destroy($id)
    {
        $workShowcase = WorkShowcase::findOrFail($id);

        if ($workShowcase->image && file_exists(public_path('storage/' . $workShowcase->image))) {
            @unlink(public_path('storage/' . $workShowcase->image));
        }

        $workShowcase->delete();

        return redirect()->route('admin.work-showcase.index')->with('success', 'Work showcase item deleted successfully.');
    }
}
