<?php 

// app/Http/Controllers/TriggerEventController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TriggerEvent;

class TriggerEventController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'event_type'  => 'required|string|max:100',
            'element_id'  => 'nullable|string|max:191',
            'extra_data'  => 'nullable|array',
        ]);

        TriggerEvent::create([
            'event_type' => $data['event_type'],
            'element_id' => $data['element_id'] ?? null,
            'page_url'   => $request->input('page_url', url()->previous()),
            'referrer'   => $request->headers->get('referer'),
            'user_id'    => auth()->id(),
            'session_id' => $request->session()->getId(),
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
            'extra_data' => $data['extra_data'] ?? null,
        ]);

        return response()->json(['status' => 'ok']);
    }
}
