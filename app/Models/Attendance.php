<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Attendance extends Model
{
    protected $casts = [
        'date' => 'datetime',
    ];

    protected $fillable = [
        'date',
    ];
}
