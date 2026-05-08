<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class BedroomsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $bedrooms = [
            ['bedroom' => '1 ', 'status' => '1'],
            ['bedroom' => '2 ', 'status' => '1'],
            ['bedroom' => '3 ', 'status' => '1'],
            ['bedroom' => '4 ', 'status' => '1'],
            ['bedroom' => '5 ', 'status' => '1'],
            ['bedroom' => '6 ', 'status' => '1'],
            ['bedroom' => '7 ', 'status' => '1'],
            ['bedroom' => '8 ', 'status' => '1'],
            ['bedroom' => '9 ', 'status' => '1'],
            ['bedroom' => '10', 'status' => '1'],
        ];

        DB::table('bedrooms')->insert($bedrooms);
    }
}
