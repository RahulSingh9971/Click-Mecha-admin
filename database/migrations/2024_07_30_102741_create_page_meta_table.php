<?php

// database/migrations/xxxx_xx_xx_create_page_meta_table.php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePageMetaTable extends Migration
{
    public function up()
    {
        Schema::create('page_meta', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('metaTitle');
            $table->text('metaDesc');
            $table->string('metaKeyword');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('page_meta');
    }
}
