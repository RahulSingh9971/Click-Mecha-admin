<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogCategory extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'status', 'blog_category_id'];

    /**
     * Get the parent category if any.
     */
    public function parent()
    {
        return $this->belongsTo(BlogCategory::class, 'blog_category_id');
    }

    /**
     * Get the child categories for this category.
     */
    public function children()
    {
        return $this->hasMany(BlogCategory::class, 'blog_category_id');
    }

    /**
     * Scope a query to only include active categories.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('status', 1);
    }
}