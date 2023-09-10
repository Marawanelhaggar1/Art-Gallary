<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    use HasFactory;

    protected $fillable=['name'];

    protected $table = 'artists';
    public function products(){
        return $this->hasMany(Products::class);
    }
}
