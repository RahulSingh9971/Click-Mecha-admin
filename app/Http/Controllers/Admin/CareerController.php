<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Career;
use App\Models\CareerApplication;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CareerController extends Controller
{
    // List Job Postings
    public function index()
    {
        $careers = Career::orderBy('created_at', 'desc')->get();
        return view('admin.careers.index', compact('careers'));
    }

    // Add Job Posting View
    public function create()
    {
        return view('admin.careers.create');
    }

    // Store Job Posting
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'experience' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'short_desc' => 'required|string',
            'responsibilities' => 'required|string',
            'skills_required' => 'required|string',
            'nice_to_have' => 'nullable|string',
            'tags' => 'nullable|string',
            'sort_order' => 'nullable|integer',
        ]);

        $validatedData['slug'] = Str::slug($request->title);
        $validatedData['status'] = $request->status ? 1 : 0;

        Career::create($validatedData);

        return redirect()->route('admin.careers.index')->with('success', 'Job posting created successfully.');
    }

    // Edit Job Posting View
    public function edit($id)
    {
        $career = Career::findOrFail($id);
        return view('admin.careers.edit', compact('career'));
    }

    // Update Job Posting
    public function update(Request $request, $id)
    {
        $career = Career::findOrFail($id);

        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'experience' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'short_desc' => 'required|string',
            'responsibilities' => 'required|string',
            'skills_required' => 'required|string',
            'nice_to_have' => 'nullable|string',
            'tags' => 'nullable|string',
            'sort_order' => 'nullable|integer',
        ]);

        $validatedData['slug'] = Str::slug($request->title); // Optional: keep old slug or update
        $validatedData['status'] = $request->status ? 1 : 0;

        $career->update($validatedData);

        return redirect()->route('admin.careers.index')->with('success', 'Job posting updated successfully.');
    }

    // Delete Job Posting
    public function destroy($id)
    {
        $career = Career::findOrFail($id);
        $career->delete();
        return redirect()->route('admin.careers.index')->with('success', 'Job posting deleted successfully.');
    }

    // List Job Applications
    public function applications()
    {
        $applications = CareerApplication::with('career')->orderBy('created_at', 'desc')->get();
        return view('admin.careers.applications', compact('applications'));
    }
}
