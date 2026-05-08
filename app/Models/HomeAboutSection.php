<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HomeAboutSection extends Model
{
    use HasFactory;

    protected $table = 'home_about_section';

    protected $fillable = [
        'title',
        'subtitle',
        'content',
        'content_2',
        'image',
        'years_experience',
        'button_text',
        'button_link',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean'
    ];
}
