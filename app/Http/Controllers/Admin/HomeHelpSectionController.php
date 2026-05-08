<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\HomeHelpSection;
use Illuminate\Http\Request;

class HomeHelpSectionController extends Controller
{
    /**
     * Display the home help section settings.
     */
    public function index()
    {
        $helpSection = HomeHelpSection::first() ?? new HomeHelpSection();
        return view('admin.home.help_section', compact('helpSection'));
    }

    /**
     * Update the home help section settings.
     */
    public function update(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'phone_1' => 'nullable|string|max:50',
            'phone_2' => 'nullable|string|max:50',
            'email' => 'nullable|email|max:255',
            'button_text' => 'nullable|string|max:255',
            'button_link' => 'nullable|string|max:255',
        ]);

        $helpSection = HomeHelpSection::first() ?? new HomeHelpSection();

        $data = $request->only(['title', 'phone_1', 'phone_2', 'email', 'button_text', 'button_link']);
        $data['is_active'] = $request->has('is_active') ? 1 : 0;

        if ($helpSection->exists) {
            $helpSection->update($data);
            $message = 'Help section updated successfully.';
        } else {
            HomeHelpSection::create($data);
            $message = 'Help section created successfully.';
        }

        return redirect()->route('admin.help-section.index')->with('success', $message);
    }
}
