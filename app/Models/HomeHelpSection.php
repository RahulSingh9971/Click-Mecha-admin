<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HomeHelpSection extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'phone_1',
        'phone_2',
        'email',
        'button_text',
        'button_link',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];
}
