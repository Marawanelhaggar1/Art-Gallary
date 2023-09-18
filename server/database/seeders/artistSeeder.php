<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class artistSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('artists')->insert([
            [
                'id' => 1,
                'name' => "Melanie Ke"
            ],
            [
                'id' => 2,
                'name' => "Eryn Lougheed"
            ],
            [
                'id' => 3,
                'name' => "Leia Bryans"
            ],
            [
                'id' => 4,
                'name' => "Sid Hicks"
            ],
            [
                'id' => 5,
                'name' => "Misbah Ahmed"
            ],
            [
                'id' => 6,
                'name' => "Rachel Crummey"
            ]
        ]);
    }
}
