<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'short_description',
        'content',
        'icon',
        'image',
        'is_active',
        'display_order',
        'seo_title',
        'seo_description'
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];
}
