<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyHighlight extends Model
{
    use HasFactory;

    protected $fillable = [
        'section_title',
        'section_description',
        'button_text',
        'button_link',
        'team_image',
        'statistics',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'statistics' => 'array', // Auto cast JSON to array
    ];
}
