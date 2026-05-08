<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HomeStatistic extends Model
{
    use HasFactory;

    protected $fillable = [
        'label',
        'value',
        'suffix',
        'icon',
        'display_order',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean'
    ];
}
