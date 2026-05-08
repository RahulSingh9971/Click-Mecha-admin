<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminPermission
{
    public function handle(Request $request, Closure $next, string $permission): Response
    {
        if (!auth('admin')->check()) {
            return redirect()->route('login');
        }

        if (!auth('admin')->user()->hasPermission($permission)) {
            abort(403, 'You do not have access to this section. Please contact your system administrator.');
        }

        return $next($request);
    }
}
