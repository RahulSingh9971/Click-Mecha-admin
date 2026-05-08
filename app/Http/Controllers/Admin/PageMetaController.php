<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PageMeta;
use Illuminate\Http\Request;

class PageMetaController extends Controller
{
    /**
     * Display a listing of all page meta entries.
     */
    public function index()
    {
        $pageMetas = PageMeta::orderBy('slug', 'asc')->get();
        return view('admin.page-meta.index', compact('pageMetas'));
    }

    /**
     * Show the form for creating a new page meta entry.
     */
    public function create()
    {
        return view('admin.page-meta.create');
    }

    /**
     * Store a newly created page meta entry in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'slug'        => 'required|string|max:255|unique:page_meta,slug',
            'metaTitle'   => 'required|string|max:255',
            'metaDesc'    => 'required|string',
            'metaKeyword' => 'required|string|max:500',
        ]);

        PageMeta::create([
            'slug'        => $request->slug,
            'metaTitle'   => $request->metaTitle,
            'metaDesc'    => $request->metaDesc,
            'metaKeyword' => $request->metaKeyword,
        ]);

        return redirect()->route('admin.page-meta.index')
            ->with('success', 'Page meta created successfully.');
    }

    /**
     * Show the form for editing a page meta entry.
     */
    public function edit($id)
    {
        $pageMeta = PageMeta::findOrFail($id);
        return view('admin.page-meta.edit', compact('pageMeta'));
    }

    /**
     * Update the specified page meta entry in storage.
     */
    public function update(Request $request, $id)
    {
        $pageMeta = PageMeta::findOrFail($id);

        $request->validate([
            'slug'        => 'required|string|max:255|unique:page_meta,slug,' . $id,
            'metaTitle'   => 'required|string|max:255',
            'metaDesc'    => 'required|string',
            'metaKeyword' => 'required|string|max:500',
        ]);

        $pageMeta->update([
            'slug'        => $request->slug,
            'metaTitle'   => $request->metaTitle,
            'metaDesc'    => $request->metaDesc,
            'metaKeyword' => $request->metaKeyword,
        ]);

        return redirect()->route('admin.page-meta.index')
            ->with('success', 'Page meta updated successfully.');
    }

    /**
     * Remove the specified page meta entry from storage.
     */
    public function destroy($id)
    {
        $pageMeta = PageMeta::findOrFail($id);
        $pageMeta->delete();

        return redirect()->route('admin.page-meta.index')
            ->with('success', 'Page meta deleted successfully.');
    }
}
