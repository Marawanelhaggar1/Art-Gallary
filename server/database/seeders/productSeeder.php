<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class productSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('products')->insert([
            [
                "name" => "What You Ingest You Become",
                "description" => "This is a demonstration store. You can purchase products like this from Ninth Editions.",
                "discount" => 1.6,
                "price" => 325,
                "stock" => 100,
                "image" => "https://theme-studio-demo.myshopify.com/cdn/shop/products/injest4_823x.jpg?v=1645200399",
                "status" => "available",
                "category_id" => 2,
                "artist_id" => 6
            ],
            [
                "name" => "Up In the Air",
                "description" => "This is a demonstration store. You can purchase products like this from Ninth Editions.",
                "discount" => 1.6,
                "price" => 225,
                "stock" => 100,
                "image" => "https://theme-studio-demo.myshopify.com/cdn/shop/products/injest4_823x.jpg?v=1645200399",
                "status" => "available",
                "category_id" => 2,
                "artist_id" => 2
            ],
            [
                "name" => "Rhyme",
                "description" => "This is a demonstration store. You can purchase products like this from Ninth Editions.",
                "discount" => 1.6,
                "price" => 230,
                "stock" => 0,
                "image" => "https://theme-studio-demo.myshopify.com/cdn/shop/products/RhymeFramedNEW_823x.jpg?v=1645200838",
                "status" => "not available",
                "category_id" => 2,
                "artist_id" => 2
            ],
            [
                "name" => "Starlight",
                "description" => "This is a demonstration store. You can purchase products like this from Ninth Editions.",
                "discount" => 1.6,
                "price" => 320,
                "stock" => 10,
                "image" => "https://theme-studio-demo.myshopify.com/cdn/shop/products/Starlight-ErynLougheed-GouacheOnPaper-OriginalArtwork-2019-Illustration-NinthEditions-framed_823x.jpg?v=1645200263",
                "status" => "not available",
                "category_id" => 2,
                "artist_id" => 2
            ],
            [
                "name" => "Playing Boy",
                "description" => "This is a demonstration store. You can purchase products like this from Ninth Editions.",
                "discount" => 1.6,
                "price" => 225,
                "stock" => 10,
                "image" => "https://theme-studio-demo.myshopify.com/cdn/shop/products/PlayingBoy-ErynLougheed-GouacheonPaper-2019-OriginalArtwork-illustration-NinthEditions-framed_823x.jpg?v=1645200254",
                "status" => "available",
                "category_id" => 2,
                "artist_id" => 2
            ],
            [
                "name" => "Happy Lion",
                "description" => "This is a demonstration store. You can purchase products like this from Ninth Editions.",
                "discount" => 1.6,
                "price" => 250,
                "stock" => 10,
                "image" => "https://theme-studio-demo.myshopify.com/cdn/shop/products/10_c6879d1d-9a60-4ccb-be81-73fa371b0534_823x.jpg?v=1645200460",
                "status" => "available",
                "category_id" => 2,
                "artist_id" => 2
            ],
            [
                "name" => "Hilltop",
                "description" => "This is a demonstration store. You can purchase products like this from Ninth Editions.",
                "discount" => 1.6,
                "price" => 670,
                "stock" => 10,
                "image" => "https://theme-studio-demo.myshopify.com/cdn/shop/products/12_823x.jpg?v=1645200469",
                "status" => "available",
                "category_id" => 2,
                "artist_id" => 2
            ],
            [
                "name" => "Barn",
                "description" => "This is a demonstration store. You can purchase products like this from Ninth Editions.",
                "discount" => 1.6,
                "price" => 250,
                "stock" => 10,
                "image" => "https://theme-studio-demo.myshopify.com/cdn/shop/products/Barn_floatframe_ErynLougheed_4x6_gouache_originalart_823x.jpg?v=1645200691",
                "status" => "available",
                "category_id" => 2,
                "artist_id" => 2
            ],
            [
                "name" => "Strawberry Bush",
                "description" => "This is a demonstration store. You can purchase products like this from Ninth Editions.",
                "discount" => 1.6,
                "price" => 250,
                "stock" => 10,
                "image" => "https://theme-studio-demo.myshopify.com/cdn/shop/products/StrawberryBush_ErynLougheed_newframed_823x.jpg?v=1645200688",
                "status" => "available",
                "category_id" => 2,
                "artist_id" => 2
            ],
            [
                "name" => "Shoes",
                "description" => "This is a demonstration store. You can purchase products like this from Ninth Editions.",
                "discount" => 1.6,
                "price" => 200,
                "stock" => 10,
                "image" => "https://theme-studio-demo.myshopify.com/cdn/shop/products/11_823x.jpg?v=1645200449",
                "status" => "available",
                "category_id" => 2,
                "artist_id" => 2
            ]
        ]);
    }
}
