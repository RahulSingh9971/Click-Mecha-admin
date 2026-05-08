<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Policy extends Model
{
    use HasFactory;

    protected $fillable = [
        'page_type',
        'page_title',
        'sections',
        'is_active'
    ];

    protected $casts = [
        'sections' => 'array',
        'is_active' => 'boolean'
    ];
}
