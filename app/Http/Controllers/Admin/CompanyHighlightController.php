<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CompanyHighlight;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CompanyHighlightController extends Controller
{
    /**
     * Display the company highlight settings.
     */
    public function index()
    {
        $companyHighlight = CompanyHighlight::first() ?? new CompanyHighlight();
        return view('admin.company-highlight.index', compact('companyHighlight'));
    }

    /**
     * Update the company highlight settings.
     */
    public function update(Request $request)
    {
        $request->validate([
            'section_title' => 'required|string|max:255',
            'section_description' => 'nullable|string',
            'button_text' => 'nullable|string|max:255',
            'button_link' => 'nullable|string|max:255',
            'team_image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'statistics' => 'nullable|array',
            'statistics.*.label' => 'nullable|string',
            'statistics.*.value' => 'nullable|string',
        ]);

        $companyHighlight = CompanyHighlight::first() ?? new CompanyHighlight();

        $data = $request->only(['section_title', 'section_description', 'button_text', 'button_link']);
        $data['is_active'] = $request->has('is_active') ? 1 : 0;

        // Handle team image upload
        if ($request->hasFile('team_image')) {
            // Delete old image
            if ($companyHighlight->team_image && file_exists(public_path('storage/' . $companyHighlight->team_image))) {
                @unlink(public_path('storage/' . $companyHighlight->team_image));
            }

            $imageName = time() . '_team.' . $request->team_image->extension();
            $request->team_image->move(public_path('storage/company'), $imageName);
            $data['team_image'] = 'company/' . $imageName;
        }

        // Handle statistics
        if ($request->has('statistics')) {
            $statistics = [];
            foreach ($request->statistics as $stat) {
                if (!empty($stat['label']) && !empty($stat['value'])) {
                    $statistics[] = [
                        'label' => $stat['label'],
                        'value' => $stat['value'],
                    ];
                }
            }
            $data['statistics'] = $statistics;
        }

        if ($companyHighlight->exists) {
            $companyHighlight->update($data);
            $message = 'Company highlight updated successfully.';
        } else {
            CompanyHighlight::create($data);
            $message = 'Company highlight created successfully.';
        }

        return redirect()->route('admin.company-highlight.index')->with('success', $message);
    }
}
