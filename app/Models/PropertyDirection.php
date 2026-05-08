<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PropertyDirection extends Model
{
    use HasFactory;

    protected $fillable = [
        'property_id',
        'location_name',
        'duration',
        'description',
        'location_type',
        'icon_name'
    ];

    // Define the relationship with the Property model
    public function property()
    {
        return $this->belongsTo(Property::class);
    }
}
