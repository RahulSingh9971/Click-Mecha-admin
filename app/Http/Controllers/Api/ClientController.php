<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    /**
     * Get all active clients/partners.
     */
    public function index()
    {
        $clients = Client::where('status', 1)
            ->orderBy('sort_order', 'asc')
            ->orderBy('created_at', 'desc')
            ->get();

        // Transform collection to include full logo URL
        $clients->transform(function ($client) {
            $client->logo_url = asset('public/storage/clients/' . $client->logo);
            return $client;
        });

        return response()->json([
            'status' => true,
            'data' => $clients
        ]);
    }

    /**
     * Get clients enabled for homepage display.
     */
    public function homepage()
    {
        $clients = Client::where('status', 1)
            ->where('show_on_homepage', 1)
            ->orderBy('sort_order', 'asc')
            ->orderBy('created_at', 'desc')
            ->get();

        // Transform collection to include full logo URL
        $clients->transform(function ($client) {
            $client->logo_url = asset('public/storage/clients/' . $client->logo);
            return $client;
        });

        return response()->json([
            'status' => true,
            'data' => $clients
        ]);
    }
}
