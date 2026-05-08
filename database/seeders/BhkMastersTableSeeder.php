<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class BhkMastersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $bhkMasters = [
            ['name' => '1 BHK', 'status' => '1'],
            ['name' => '2 BHK', 'status' => '1'],
            ['name' => '3 BHK', 'status' => '1'],
            ['name' => '4 BHK', 'status' => '1'],
            ['name' => '5 BHK', 'status' => '1'],
            ['name' => '6 BHK', 'status' => '1'],
            ['name' => '7 BHK', 'status' => '1'],
            ['name' => '8 BHK', 'status' => '1'],
            ['name' => '9 BHK', 'status' => '1'],
            ['name' => '10 BHK', 'status' => '1'],
        ];

        DB::table('bhk_masters')->insert($bhkMasters);
    }
}
