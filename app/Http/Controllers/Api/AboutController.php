<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AboutGeneral;
use App\Models\AboutMilestone;
use App\Models\AboutValue;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function index()
    {
        $general = AboutGeneral::first();

        if ($general) {
            $fields = ['hero_bg_image', 'founder_image', 'story_image', 'struggle_image', 'emotional_image'];
            foreach ($fields as $f) {
                if ($general->$f) {
                    $general->$f = asset('public/storage/about/' . $general->$f);
                }
            }
        } else {
            // Return empty object structure if nothing initialized yet
            $general = new \stdClass();
        }

        $milestones = AboutMilestone::orderBy('sort_order', 'asc')->get();

        $values = AboutValue::orderBy('sort_order', 'asc')->get()->map(function ($v) {
            if ($v->icon_image) {
                $v->icon_image = asset('public/storage/about/icons/' . $v->icon_image);
            }
            return $v;
        });

        return response()->json([
            'status' => true,
            'data' => [
                'general' => $general,
                'milestones' => $milestones,
                'values' => $values
            ]
        ]);
    }
}
