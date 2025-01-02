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
            $table->enum('type_source_link', ['youtube', 'gdrive'])->nullable()->after('video_thumbnail');
            $table->string('gdrive_link')->nullable()->after('video_link');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('media_products', function (Blueprint $table) {
            $table->dropColumn('type_source_link');
            $table->dropColumn('gdrive_link');
        });
    }
};
