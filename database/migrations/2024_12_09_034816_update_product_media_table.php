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
        Schema::table('media_products', function (Blueprint $table) {
            $table->string('image_file')->nullable()->after('type');
            $table->string('video_link')->nullable()->after('image_file');

            $table->dropColumn('file');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('media_products', function (Blueprint $table) {
            $table->string('file')->nullable();

            $table->dropColumn('image_file');
            $table->dropColumn('video_link');
        });
    }
};
