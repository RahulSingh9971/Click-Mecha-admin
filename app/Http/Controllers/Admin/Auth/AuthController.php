<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use App\Services\AdminAuthService;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    protected $authService;

    public function __construct(AdminAuthService $authService)
    {
        $this->authService = $authService;
    }

    public function redirectToLogin()
    {
        return redirect()->route('admin.login');
    }

    public function loginForm()
    {
        if (Auth::guard('admin')->check()) {
            return redirect()->route('admin.dashboard');
        }

        return view('admin.auth.login');
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:6',
        ]);

        Log::info('Login Admin', ['body' => $request->all()]);

        try {
            $this->authService->login($request->email, $request->password);

            Log::info('Login Admin Success', ['email' => $request->email]);

            return redirect()->route('admin.dashboard');
        } catch (Exception $e) {
            Log::error('Login Admin Error', ['error' => $e->getMessage()]);

            return back()->withErrors(['error' => 'Login failed. Please check your credentials and try again.']);
        }
    }

    public function logout(Request $request)
    {
        Auth::guard('admin')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('admin.login');
    }
}
