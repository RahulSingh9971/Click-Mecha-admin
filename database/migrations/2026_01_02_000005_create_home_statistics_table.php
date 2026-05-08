<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('home_statistics', function (Blueprint $table) {
            $table->id();
            $table->string('label');
            $table->string('value');
            $table->string('suffix')->nullable(); // K+, M+, etc
            $table->string('icon')->nullable();
            $table->integer('display_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('home_statistics');
    }
};
