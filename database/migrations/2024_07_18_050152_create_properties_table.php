<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePropertiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('location');
            $table->string('sub_location'); // renamed as 'sub_location' for better clarity
            $table->integer('area'); // in square feet or meters
            $table->integer('bhks'); // number of bedrooms, halls, and kitchens
            $table->string('possession_status'); // ready to move, under construction, etc.
            $table->string('furnishing'); // furnished, semi-furnished, unfurnished
            $table->string('featured_image');
            $table->string('bedrooms');
            $table->string('perfect_for');
            $table->string('kids_rooms');
            $table->string('occupancy');
            $table->text('description');
            $table->enum('status', ['1', '0'])->default('1'); // active or inactive
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('properties');
    }
}
