<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Policy;
use Illuminate\Http\Request;

class PolicyController extends Controller
{
    public function index()
    {
        $policies = Policy::all();
        return view('admin.policy.list', compact('policies'));
    }

    public function create()
    {
        return view('admin.policy.add-policy');
    }

    public function store(Request $request)
    {
        $request->validate([
            'page_type' => 'required|unique:policies,page_type',
            'page_title' => 'required|string|max:255',
            'sections' => 'required|array',
            'sections.*.title' => 'required|string',
            'sections.*.content' => 'required|string',
        ]);

        Policy::create([
            'page_type' => $request->page_type,
            'page_title' => $request->page_title,
            'sections' => $request->sections,
            'is_active' => $request->has('is_active') ? 1 : 0
        ]);

        return redirect()->route('admin.policies.index')->with('success', 'Policy created successfully');
    }

    public function edit($id)
    {
        $policy = Policy::findOrFail($id);
        return view('admin.policy.edit-policy', compact('policy'));
    }

    public function update(Request $request, $id)
    {
        $policy = Policy::findOrFail($id);

        $request->validate([
            'page_type' => 'required|unique:policies,page_type,' . $id,
            'page_title' => 'required|string|max:255',
            'sections' => 'required|array',
            'sections.*.title' => 'required|string',
            'sections.*.content' => 'required|string',
        ]);

        $policy->update([
            'page_type' => $request->page_type,
            'page_title' => $request->page_title,
            'sections' => $request->sections,
            'is_active' => $request->has('is_active') ? 1 : 0
        ]);

        return redirect()->route('admin.policies.index')->with('success', 'Policy updated successfully');
    }

    public function destroy($id)
    {
        $policy = Policy::findOrFail($id);
        $policy->delete();

        return redirect()->route('admin.policies.index')->with('success', 'Policy deleted successfully');
    }
}
