<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index()
    {
        $pageContent = \App\Models\ServicePageContent::first();
        if ($pageContent) {
            $pageContent->hero_image = $pageContent->hero_image ? asset($pageContent->hero_image) : null;
        }

        $services = \App\Models\Service::where('is_active', true)->orderBy('display_order')->get();

        $services->transform(function ($service) {
            $service->icon = $service->icon ? asset($service->icon) : null;
            $service->image = $service->image ? asset($service->image) : null;
            return $service;
        });

        $whyChooseUs = \App\Models\WhyChooseUs::where('is_active', true)->orderBy('display_order')->get();
        $whyChooseUs->transform(function ($item) {
            $item->icon = $item->icon ? asset($item->icon) : null;
            return $item;
        });

        return response()->json([
            'status' => true,
            'page_content' => $pageContent,
            'services' => $services,
            'why_choose_us' => $whyChooseUs
        ]);
    }
}
