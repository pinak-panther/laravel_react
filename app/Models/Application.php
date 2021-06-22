<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Store;
class Application extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['name','description'];
    public function stores()
    {
        return $this->belongsToMany(Store::class,'application_store')->withPivot('plan_id');
    }
}
