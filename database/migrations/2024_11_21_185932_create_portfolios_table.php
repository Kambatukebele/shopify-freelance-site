<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('portfolios', function (Blueprint $table) {
            $table->id();
            $table->string('company_name');
            $table->string('company_niche');
            $table->string('company_live_url');
            $table->string('company_about');
            $table->string('company_image');
            $table->string('company_review')->nullable();
            $table->string('company_representative_name')->nullable();
            $table->string('company_representative_title')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('porfolios');
    }
};
