<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_name',
        'client_name',
        'designation',
        'client_position',
        'client_company',
        'rating',
        'review_text',
        'testimonial_text',
        'customer_image',
        'client_image',
        'display_order',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'rating' => 'decimal:1'
    ];
}
