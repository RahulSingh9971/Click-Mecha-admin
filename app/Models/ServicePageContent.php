<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServicePageContent extends Model
{
    protected $table = 'service_page_content';

    protected $fillable = [
        'hero_title',
        'hero_subtitle',
        'hero_image',
        'seo_title',
        'seo_description',
        'why_work_title',
        'why_work_subtitle'
    ];
}
