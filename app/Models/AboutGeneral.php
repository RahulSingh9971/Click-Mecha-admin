<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AboutGeneral extends Model
{
    use HasFactory;

    protected $table = 'about_generals';

    protected $guarded = [];

    protected $casts = [
        'emotional_points' => 'array',
    ];
}
