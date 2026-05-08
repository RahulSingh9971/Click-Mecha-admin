<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Career extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'category',
        'type',
        'experience',
        'location',
        'short_desc',
        'description',
        'responsibilities',
        'skills_required',
        'nice_to_have',
        'tags',
        'status',
        'sort_order'
    ];

    public function applications()
    {
        return $this->hasMany(CareerApplication::class);
    }
}
