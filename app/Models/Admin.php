<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Admin extends Authenticatable
{
    use Notifiable;

    protected $guard = 'admin';

    protected $fillable = [
        'name', 'email', 'password', 'role', 'permissions',
    ];

    protected $casts = [
        'permissions' => 'array',
    ];

    public function isSuperAdmin()
    {
        return $this->role === 'super_admin';
    }

    public function hasPermission($permission)
    {
        if ($this->isSuperAdmin() || $permission === 'dashboard') {
            return true;
        }

        return is_array($this->permissions) && in_array($permission, $this->permissions);
    }

    public function blogs()
    {
        return $this->hasMany(Blog::class, 'author_id');
    }
}
