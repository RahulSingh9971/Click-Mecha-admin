<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Amenity extends Model
{
    use HasFactory;

    // Table name
    protected $table = 'amenities';

    // Primary key
    protected $primaryKey = 'id';

    // Timestamps
    public $timestamps = true;

    // Columns that are mass assignable
    protected $fillable = [
        'name',
        'status',
        'created_at',
        'updated_at'
    ];

    public function properties()
    {
        return $this->belongsToMany(Property::class);
    }
}
