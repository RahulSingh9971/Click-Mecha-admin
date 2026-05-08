<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'subtitle',
        'desc',
        'slug',
        'date',
        'sortOrder',
        'image',
        'metaTitle',
        'metaKeyword',
        'metaDesc',
        'status',
        'blog_category_id',
        'author_id'
    ];

    /**
     * Get the category that owns the blog.
     */
    public function category()
    {
        return $this->belongsTo(BlogCategory::class, 'blog_category_id');
    }

    /**
     * Get the author that owns the blog.
     */
    public function author()
    {
        return $this->belongsTo(Admin::class, 'author_id');
    }

    /**
     * Get the FAQs that belong to the blog.
     */
    public function faqs()
    {
        return $this->hasMany(BlogFaq::class, 'blog_id');
    }
}
