<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BhkMaster extends Model
{
    use HasFactory;

    // Columns that are mass assignable
    protected $fillable = [
        'name',
        'status',
        'created_at',
        'updated_at'
    ];
}
