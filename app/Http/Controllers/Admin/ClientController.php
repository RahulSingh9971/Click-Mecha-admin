<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ClientController extends Controller
{
    /**
     * Display a listing of the clients.
     */
    public function index()
    {
        $clients = Client::orderBy('sort_order', 'asc')->orderBy('created_at', 'desc')->get();
        return view('admin.clients.index', compact('clients'));
    }

    /**
     * Show the form for creating a new client.
     */
    public function create()
    {
        return view('admin.clients.create');
    }

    /**
     * Store a newly created client in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'logo' => 'required|image|mimes:jpeg,png,jpg,svg,webp|max:2048',
            'sort_order' => 'nullable|integer',
        ]);

        $data = $request->only(['name', 'sort_order']);
        $data['status'] = $request->has('status') ? 1 : 0;
        $data['show_on_homepage'] = $request->has('show_on_homepage') ? 1 : 0;

        if ($request->hasFile('logo')) {
            $logoName = time() . '_' . Str::slug($request->name) . '.' . $request->logo->extension();
            $request->logo->move(public_path('storage/clients'), $logoName);
            $data['logo'] = $logoName;
        }

        Client::create($data);

        return redirect()->route('admin.clients.index')->with('success', 'Client added successfully.');
    }

    /**
     * Show the form for editing the specified client.
     */
    public function edit($id)
    {
        $client = Client::findOrFail($id);
        return view('admin.clients.edit', compact('client'));
    }

    /**
     * Update the specified client in storage.
     */
    public function update(Request $request, $id)
    {
        $client = Client::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'logo' => 'nullable|image|mimes:jpeg,png,jpg,svg,webp|max:2048',
            'sort_order' => 'nullable|integer',
        ]);

        $data = $request->only(['name', 'sort_order']);
        $data['status'] = $request->has('status') ? 1 : 0;
        $data['show_on_homepage'] = $request->has('show_on_homepage') ? 1 : 0;

        if ($request->hasFile('logo')) {
            // Delete old logo
            if ($client->logo && file_exists(public_path('storage/clients/' . $client->logo))) {
                @unlink(public_path('storage/clients/' . $client->logo));
            }

            $logoName = time() . '_' . Str::slug($request->name) . '.' . $request->logo->extension();
            $request->logo->move(public_path('storage/clients'), $logoName);
            $data['logo'] = $logoName;
        }

        $client->update($data);

        return redirect()->route('admin.clients.index')->with('success', 'Client updated successfully.');
    }

    /**
     * Remove the specified client from storage.
     */
    public function destroy($id)
    {
        $client = Client::findOrFail($id);

        if ($client->logo && file_exists(public_path('storage/clients/' . $client->logo))) {
            @unlink(public_path('storage/clients/' . $client->logo));
        }

        $client->delete();

        return redirect()->route('admin.clients.index')->with('success', 'Client deleted successfully.');
    }
    public function toggleHomepage($id)
    {
        $client = Client::findOrFail($id);
        $client->show_on_homepage = !$client->show_on_homepage;
        $client->save();

        return redirect()->back()->with('success', 'Homepage visibility updated.');
    }
}
