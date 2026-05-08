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
        Schema::table('admins', function (Blueprint $table) {
            $table->string('role')->default('sub_admin')->after('password');
            $table->text('permissions')->nullable()->after('role'); // Store JSON array of allowed modules/menus
        });

        // Set existing admins as super_admin
        \DB::table('admins')->update(['role' => 'super_admin']);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('admins', function (Blueprint $table) {
            $table->dropColumn(['role', 'permissions']);
        });
    }
};
