<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdLead extends Model
{
    use HasFactory;

    // Specify the table name (if you don't follow the naming convention)
    protected $table = 'ad_leads';

     // Add these constants at the top of the class
     const STATUS_GOOD_LEAD = 'good_lead';
     const STATUS_DEAD_LEAD = 'dead_lead';
     const STATUS_DO_NOT_PICK_UP = 'do_not_pick_up';
     const STATUS_CALL_BACK = 'call_back';
     const STATUS_NOT_INTERESTED = 'not_interested';
     const STATUS_NEW_LEAD = 'new_lead';

    // Define which fields are mass assignable
    protected $fillable = [
        'created_time',
        'ad_id',
        'ad_name',
        'adset_id',
        'adset_name',
        'campaign_id',
        'campaign_name',
        'form_id',
        'form_name',
        'is_organic',
        'platform',
        'full_name',
        'phone_number',
        'email',
        'city',
        'is_qualified',
        'is_quality',
        'is_converted',
        'land_location',
        'status'
    ];

    // Define the date fields so that Laravel can cast them automatically
    protected $dates = ['created_time', 'created_at', 'updated_at'];

    // Optionally, define the attributes that should be cast to specific data types
    protected $casts = [
        'is_organic' => 'boolean',
        'is_qualified' => 'boolean',
        'is_quality' => 'boolean',
        'is_converted' => 'boolean',
    ];
}
