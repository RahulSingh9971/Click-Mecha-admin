<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'parent_id', 'status'];

    // Define the relationship to fetch child locations
    public function children()
    {
        return $this->hasMany(Location::class, 'parent_id');
    }

    // Define the relationship to fetch the parent location
    public function parent()
    {
        return $this->belongsTo(Location::class, 'parent_id');
    }


    public function properties()
    {
        return $this->hasMany(Property::class, 'location');
    }

}
