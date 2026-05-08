<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminManagementController extends Controller
{
    // List of available modules for permissions
    public static $modules = [
        'dashboard' => 'Dashboard',
        'home' => 'Home Page',
        'home_sections' => 'Home Sections',
        'contact_forms' => 'Contact Forms',
        'blog' => 'Blogs',
        'policies' => 'Policies',
        'careers' => 'Careers',
        'clientele' => 'Clientele (Clients)',
        'about_page' => 'About Page Content',
        'services_page' => 'Services Page Content',
        'page_meta' => 'Page Meta (SEO)',
    ];

    public function index()
    {
        // Only super admin can access
        if (auth('admin')->user()->role !== 'super_admin') {
            abort(403, 'Unauthorized action.');
        }

        $subAdmins = Admin::where('role', 'sub_admin')->orderBy('created_at', 'desc')->get();
        return view('admin.admin-management.index', compact('subAdmins'));
    }

    public function create()
    {
        if (auth('admin')->user()->role !== 'super_admin') {
            abort(403, 'Unauthorized action.');
        }

        $modules = self::$modules;
        return view('admin.admin-management.create', compact('modules'));
    }

    public function store(Request $request)
    {
        if (auth('admin')->user()->role !== 'super_admin') {
            abort(403, 'Unauthorized action.');
        }

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:admins,email',
            'password' => 'required|string|min:6',
            'permissions' => 'nullable|array',
        ]);

        Admin::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => 'sub_admin',
            'permissions' => $request->permissions ?? [],
        ]);

        return redirect()->route('admin.sub-admins.index')->with('success', 'Sub-admin / Employer created successfully.');
    }

    public function edit($id)
    {
        if (auth('admin')->user()->role !== 'super_admin') {
            abort(403, 'Unauthorized action.');
        }

        $subAdmin = Admin::findOrFail($id);
        $modules = self::$modules;
        return view('admin.admin-management.edit', compact('subAdmin', 'modules'));
    }

    public function update(Request $request, $id)
    {
        if (auth('admin')->user()->role !== 'super_admin') {
            abort(403, 'Unauthorized action.');
        }

        $subAdmin = Admin::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:admins,email,' . $subAdmin->id,
            'password' => 'nullable|string|min:6',
            'permissions' => 'nullable|array',
        ]);

        $data = [
            'name' => $request->name,
            'email' => $request->email,
            'permissions' => $request->permissions ?? [],
        ];

        if ($request->filled('password')) {
            $data['password'] = Hash::make($request->password);
        }

        $subAdmin->update($data);

        return redirect()->route('admin.sub-admins.index')->with('success', 'Sub-admin / Employer updated successfully.');
    }

    public function destroy($id)
    {
        if (auth('admin')->user()->role !== 'super_admin') {
            abort(403, 'Unauthorized action.');
        }

        $subAdmin = Admin::findOrFail($id);
        $subAdmin->delete();

        return redirect()->route('admin.sub-admins.index')->with('success', 'Sub-admin / Employer deleted successfully.');
    }
}
