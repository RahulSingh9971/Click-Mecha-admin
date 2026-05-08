<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MetaLeadLog extends Model
{
    use HasFactory;

    protected $table = 'meta_lead_logs';

    // Status constants matching the enum values
    const STATUS_GOOD_LEAD = 'good_lead';
    const STATUS_DEAD_LEAD = 'dead_lead';
    const STATUS_DO_NOT_PICK_UP = 'do_not_pick_up';
    const STATUS_CALL_BACK = 'call_back';
    const STATUS_NOT_INTERESTED = 'not_interested';
    const STATUS_NEW_LEAD = 'new_lead';

    protected $fillable = [
        'ad_lead_id',
        'status',
        'comment'
    ];

    // Define the relationship with AdLead
    public function adLead()
    {
        return $this->belongsTo(AdLead::class, 'ad_lead_id');
    }

    // Cast the created_at and updated_at timestamps
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}