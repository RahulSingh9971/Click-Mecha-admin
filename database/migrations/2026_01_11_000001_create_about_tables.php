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
        Schema::create('about_generals', function (Blueprint $table) {
            $table->id();
            // Hero
            $table->string('hero_title')->nullable();
            $table->string('hero_subtitle')->nullable();
            $table->text('hero_description')->nullable();
            $table->string('hero_bg_image')->nullable();
            // Founder
            $table->string('founder_title')->nullable();
            $table->string('founder_subtitle')->nullable();
            $table->text('founder_description')->nullable();
            $table->string('founder_image')->nullable();
            $table->string('founder_stat1_value')->nullable();
            $table->string('founder_stat1_label')->nullable();
            $table->string('founder_stat2_value')->nullable();
            $table->string('founder_stat2_label')->nullable();
            $table->string('founder_stat3_value')->nullable();
            $table->string('founder_stat3_label')->nullable();
            // Story
            $table->string('story_title')->nullable();
            $table->text('story_description')->nullable();
            $table->string('story_image')->nullable();
            // Struggle
            $table->string('struggle_title')->nullable();
            $table->text('struggle_description')->nullable();
            $table->string('struggle_image')->nullable();
            // Turning Point
            $table->string('turning_title')->nullable();
            $table->text('turning_left_text')->nullable();
            $table->text('turning_right_text')->nullable();
            // Emotional Core
            $table->string('emotional_title')->nullable();
            $table->text('emotional_description')->nullable();
            $table->json('emotional_points')->nullable();
            $table->string('emotional_image')->nullable();
            // CTA
            $table->string('cta_title')->nullable();
            $table->text('cta_description')->nullable();
            $table->string('cta_phone')->nullable();
            $table->string('cta_email')->nullable();
            $table->string('cta_button_text')->nullable();
            $table->string('cta_button_link')->nullable();

            $table->timestamps();
        });

        Schema::create('about_milestones', function (Blueprint $table) {
            $table->id();
            $table->string('label')->nullable();
            $table->string('title');
            $table->text('description')->nullable();
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });

        Schema::create('about_values', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('icon_image')->nullable();
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('about_values');
        Schema::dropIfExists('about_milestones');
        Schema::dropIfExists('about_generals');
    }
};
