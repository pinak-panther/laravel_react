<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Application;
class Store extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['name','email'];

    public function applications()
    {
        return $this->belongsToMany(Application::class,'application_store')->withPivot('plan_id');
    }
}
