<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VideoTestimonial extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'client_name',
        'client_position',
        'client_company',
        'video_file',
        'thumbnail',
        'video_url',
        'video_type',
        'duration',
        'display_order',
        'is_active',
        'show_on_homepage',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'show_on_homepage' => 'boolean',
        'duration' => 'integer',
    ];

    /**
     * Get the full video URL based on type
     */
    public function getVideoUrlAttribute($value)
    {
        if ($this->video_type === 'upload' && $this->video_file) {
            return asset('storage/' . $this->video_file);
        }
        return $value;
    }

    /**
     * Get the full thumbnail URL
     */
    public function getThumbnailUrlAttribute()
    {
        if ($this->thumbnail) {
            return asset('storage/' . $this->thumbnail);
        }
        return null;
    }
}
