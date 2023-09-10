<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;
    protected $fillable=['name','description','discount','price','stock','image','status','category_id','artist_id'];
    protected $table = 'products';

    public function category(){
        return $this->belongsTo(Categories::class);
    }

     public function artist(){
        return $this->belongsTo(Artist::class);
    }

    public function orderDetails(){
        return $this->hasMany(OrderDetails::class);
    }
}
