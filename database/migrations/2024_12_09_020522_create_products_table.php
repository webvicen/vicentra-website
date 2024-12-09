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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('categoryable_id'); // ID dari tabel polymorphic
            $table->string('categoryable_type'); // Tipe tabel polymorphic
            $table->string('slug')->unique();
            $table->string('name');
            $table->string('sku');
            $table->string('thumbnail')->nullable();
            $table->text('short_description')->nullable();
            $table->text('description')->nullable();
            $table->text('specification')->nullable();
            $table->string('work_result')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
