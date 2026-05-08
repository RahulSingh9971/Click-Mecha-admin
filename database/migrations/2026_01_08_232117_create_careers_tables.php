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
        Schema::create('careers', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('category'); // Design, Development, etc.
            $table->string('type'); // Full-time, Remote, etc.
            $table->string('experience'); // 2+ years
            $table->string('location'); // New York, Remote
            $table->text('short_desc'); // Card description
            $table->longText('description')->nullable(); // Full description if needed
            $table->longText('responsibilities'); // JSON or HTML
            $table->longText('skills_required'); // JSON or HTML (bullet points)
            $table->longText('nice_to_have')->nullable(); // JSON or HTML
            $table->text('tags')->nullable(); // Comma separated for card pills (e.g. Photoshop, Laravel)
            $table->boolean('status')->default(1);
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });

        Schema::create('career_applications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('career_id')->constrained('careers')->onDelete('cascade');
            $table->string('name');
            $table->string('email');
            $table->string('phone');
            $table->string('state')->nullable();
            $table->string('experience')->nullable();
            $table->string('resume'); // File path
            $table->string('linkedin')->nullable();
            $table->text('cover_letter')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('career_applications');
        Schema::dropIfExists('careers');
    }
};
