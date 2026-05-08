<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBhkMastersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bhk_masters', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Assuming there's a name field for the BHK type
            $table->enum('status', ['1', '0'])->default('1'); // Mandatory status field with default value '1'
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
        Schema::dropIfExists('bhk_masters');
    }
}
