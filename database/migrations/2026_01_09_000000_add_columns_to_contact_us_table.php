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
        Schema::table('contact_us', function (Blueprint $table) {
            // Check if columns exist before adding (optional but safe)
            // But since I'm assuming they're not there based on the file content and user request
            if (!Schema::hasColumn('contact_us', 'company_name')) {
                $table->string('company_name')->nullable();
            }
            if (!Schema::hasColumn('contact_us', 'budget')) {
                $table->string('budget')->nullable();
            }
            if (!Schema::hasColumn('contact_us', 'services')) {
                $table->text('services')->nullable(); // For storing multiple services
            }
            // Add 'url', 'title' if they are missing but in model (just in case)
            if (!Schema::hasColumn('contact_us', 'url')) {
                $table->string('url')->nullable();
            }
            if (!Schema::hasColumn('contact_us', 'title')) {
                $table->string('title')->nullable();
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('contact_us', function (Blueprint $table) {
            $table->dropColumn(['company_name', 'budget', 'services', 'url', 'title']);
        });
    }
};
