<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    use HasFactory;

    use HasFactory;

    protected $fillable = [
        'name',
        'location',
        'sub_location',
        'senior_citizen',
        'area',
        'sort_order',
        'bhks',
        'property_type',
        'bedrooms',
        'possession_status',
        'furnishing',
        'occupancy',
        'perfect_for',
        'description',
        'short_desc',
        'address',
        'zip_code',
        'featured_image',
        'slug',
        'kids_rooms',
        'city',
        'state',
        'floor',
        'country',
        'view',
        'style',
        'starting_at'
    ];

    public function images()
    {
        return $this->hasMany(PropertyImages::class);
    }

    public function amenities()
    {
        return $this->belongsToMany(Amenity::class);
    }
    public function views()
    {
        return $this->belongsToMany(View::class);
    }
    public function styles()
    {
        return $this->belongsToMany(Style::class);
    }

    public function locationDetails()
    {
        return $this->belongsTo(Location::class, 'location');
    }

    public function subLocation()
    {
        return $this->belongsTo(Location::class, 'sub_location');
    }
    public function directions()
    {
        return $this->hasMany(PropertyDirection::class);
    }
}
