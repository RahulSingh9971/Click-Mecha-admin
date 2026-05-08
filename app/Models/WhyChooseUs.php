<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WhyChooseUs extends Model
{
    protected $table = 'why_choose_us';

    protected $fillable = [
        'title',
        'description',
        'icon',
        'display_order',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean'
    ];
}
