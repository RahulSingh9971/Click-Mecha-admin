<?php 

// app/Models/TriggerEvent.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TriggerEvent extends Model
{
    protected $fillable = [
        'event_type',
        'element_id',
        'page_url',
        'referrer',
        'user_id',
        'session_id',
        'ip_address',
        'user_agent',
        'extra_data',
    ];

    protected $casts = [
        'extra_data' => 'array',
    ];
}
