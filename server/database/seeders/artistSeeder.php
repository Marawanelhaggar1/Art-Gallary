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
                'name' => "Melanie Ke"
            ],
            [
                'name' => "Eryn Lougheed"
            ],
            [
                'name' => "Leia Bryans"
            ],
            [
                'name' => "Sid Hicks"
            ],
            [
                'name' => "Misbah Ahmed"
            ],
            [

                'name' => "Rachel Crummey"
            ]
        ]);
    }
}
