<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Porfolio extends Model
{
    protected $fillable = [
        "company_name",
        "company_niche",
        "company_live_url",
        "company_about",
        "company_image",
        "company_review",
        "company_representative_name",
        "company_representative_title"
    ];
}
