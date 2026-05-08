<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Admin;
use Illuminate\Database\Seeder; // Make sure to use the correct namespace for your Admin model
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Admin::create([
            'name' => 'Super Admin Demo',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('admin@gmail.com'),
        ]);
    }
}
