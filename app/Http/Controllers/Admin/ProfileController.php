<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class ProfileController extends Controller
{
    public function index()
    {
        $admin = Auth::guard('admin')->user();
        return view('admin.profile.index', compact('admin'));
    }

    public function updateEmail(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:admins,email,' . Auth::guard('admin')->id()
        ]);

        $admin = Auth::guard('admin')->user();
        $admin->email = $request->email;
        $admin->save();

        return back()->with('success', 'Email updated successfully');
    }

    public function updatePassword(Request $request)
    {
        $request->validate([
            'current_password' => 'required',
            'new_password' => 'required|min:6|confirmed',
        ]);

        $admin = Auth::guard('admin')->user();

        // check old password
        if (!Hash::check($request->current_password, $admin->password)) {
            return back()->withErrors(['current_password' => 'Current password is wrong']);
        }

        $admin->password = Hash::make($request->new_password);
        $admin->save();

        return back()->with('success', 'Password updated successfully');
    }
}
