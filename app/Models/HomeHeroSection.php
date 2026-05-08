<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HomeHeroSection extends Model
{
    use HasFactory;

    protected $table = 'home_hero_section';

    protected $fillable = [
        'title',
        'subtitle',
        'description',
        'button_text',
        'button_link',
        'background_image',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean'
    ];
}
