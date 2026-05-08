<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AboutGeneral;
use App\Models\AboutMilestone;
use App\Models\AboutValue;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class AboutController extends Controller
{
    public function index()
    {
        $general = AboutGeneral::first();
        if (!$general) {
            $general = AboutGeneral::create([]);
        }
        $milestones = AboutMilestone::orderBy('sort_order', 'asc')->get();
        $values = AboutValue::orderBy('sort_order', 'asc')->get();

        return view('admin.about.index', compact('general', 'milestones', 'values'));
    }

    public function updateGeneral(Request $request)
    {
        $general = AboutGeneral::first();

        $data = $request->except(['_token', 'hero_bg_image', 'founder_image', 'story_image', 'struggle_image', 'emotional_image']);

        // Handle File Uploads
        $fields = ['hero_bg_image', 'founder_image', 'story_image', 'struggle_image', 'emotional_image'];
        foreach ($fields as $field) {
            if ($request->hasFile($field)) {
                // Delete old
                if ($general->$field && file_exists(public_path('storage/about/' . $general->$field))) {
                    @unlink(public_path('storage/about/' . $general->$field));
                }
                $file = $request->file($field);
                $filename = time() . '_' . $field . '.' . $file->extension();
                $file->move(public_path('storage/about'), $filename);
                $data[$field] = $filename;
            }
        }

        // Handle JSON for emotional_points - expecting separate input fields or a text area in array format? 
        // For simplicity, let's assume the user enters them as newline separated text, and we split them.
        if ($request->has('emotional_points')) {
            $points = array_filter(array_map('trim', explode("\n", $request->input('emotional_points'))));
            $data['emotional_points'] = array_values($points);
        }

        $general->update($data);

        return redirect()->back()->with('success', 'About section updated successfully.');
    }

    // Milestones
    public function createMilestone()
    {
        return view('admin.about.milestones.create');
    }

    public function storeMilestone(Request $request)
    {
        $request->validate([
            'year' => 'nullable|string', // label in screenshot
            'title' => 'required|string',
            'description' => 'required|string',
            'sort_order' => 'integer'
        ]);

        AboutMilestone::create([
            'label' => $request->year, // We use 'label' in DB
            'title' => $request->title,
            'description' => $request->description,
            'sort_order' => $request->sort_order ?? 0,
        ]);

        return redirect()->route('admin.about.index')->with('success', 'Milestone added.');
    }

    public function editMilestone($id)
    {
        $milestone = AboutMilestone::findOrFail($id);
        return view('admin.about.milestones.edit', compact('milestone'));
    }

    public function updateMilestone(Request $request, $id)
    {
        $request->validate([
            'year' => 'nullable|string',
            'title' => 'required|string',
            'description' => 'required|string',
            'sort_order' => 'integer'
        ]);

        $milestone = AboutMilestone::findOrFail($id);
        $milestone->update([
            'label' => $request->year,
            'title' => $request->title,
            'description' => $request->description,
            'sort_order' => $request->sort_order ?? 0,
        ]);

        return redirect()->route('admin.about.index')->with('success', 'Milestone updated.');
    }

    public function destroyMilestone($id)
    {
        AboutMilestone::findOrFail($id)->delete();
        return redirect()->route('admin.about.index')->with('success', 'Milestone deleted.');
    }

    // Values
    public function createValue()
    {
        return view('admin.about.values.create');
    }

    public function storeValue(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'icon_image' => 'nullable|image',
            'sort_order' => 'integer'
        ]);

        $data = $request->only(['title', 'description', 'sort_order']);

        if ($request->hasFile('icon_image')) {
            $file = $request->file('icon_image');
            $filename = time() . '_icon.' . $file->extension();
            $file->move(public_path('storage/about/icons'), $filename);
            $data['icon_image'] = $filename;
        }

        AboutValue::create($data);
        return redirect()->route('admin.about.index')->with('success', 'Value added.');
    }

    public function editValue($id)
    {
        $value = AboutValue::findOrFail($id);
        return view('admin.about.values.edit', compact('value'));
    }

    public function updateValue(Request $request, $id)
    {
        $value = AboutValue::findOrFail($id);

        $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'icon_image' => 'nullable|image',
            'sort_order' => 'integer'
        ]);

        $data = $request->only(['title', 'description', 'sort_order']);

        if ($request->hasFile('icon_image')) {
            // del old
            if ($value->icon_image && file_exists(public_path('storage/about/icons/' . $value->icon_image))) {
                @unlink(public_path('storage/about/icons/' . $value->icon_image));
            }
            $file = $request->file('icon_image');
            $filename = time() . '_icon.' . $file->extension();
            $file->move(public_path('storage/about/icons'), $filename);
            $data['icon_image'] = $filename;
        }

        $value->update($data);
        return redirect()->route('admin.about.index')->with('success', 'Value updated.');
    }

    public function destroyValue($id)
    {
        $value = AboutValue::findOrFail($id);
        if ($value->icon_image && file_exists(public_path('storage/about/icons/' . $value->icon_image))) {
            @unlink(public_path('storage/about/icons/' . $value->icon_image));
        }
        $value->delete();
        return redirect()->route('admin.about.index')->with('success', 'Value deleted.');
    }
}
