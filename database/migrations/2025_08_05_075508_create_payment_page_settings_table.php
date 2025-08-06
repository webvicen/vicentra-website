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
        Schema::create('payment_page_settings', function (Blueprint $table) {
            $table->id();
            $table->string('banner_title');
            $table->string('banner_subtitle')->nullable();
            $table->string('banner_button_text')->nullable();
            $table->string('banner_button_link')->nullable();
            $table->string('banner_image')->nullable();
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payment_page_settings');
    }
};
