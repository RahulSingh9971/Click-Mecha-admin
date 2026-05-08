<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactUs extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'phone',
        'email',
        'location',
        'message',
        'url',
        'title',
        'reason',
        'lead_source',
        'service',
        'company_name',
        'budget',
        'page_url',
        'services'
    ];
}
