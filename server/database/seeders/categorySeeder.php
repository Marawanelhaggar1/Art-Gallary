<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class categorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('categories')->insert([
            [
                "id" =>1,
                "name" => "Prints"
            ],
            [
                "id"=>2,
                "name" => "Originals"
            ],
            [
                "id"=>3,
                "name" => "Art Objects"
            ]
        ]);
    }
}
