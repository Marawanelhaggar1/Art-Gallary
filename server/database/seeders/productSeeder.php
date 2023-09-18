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
      "name"=> "What Is the Body",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 300,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/WhatIsTheBody-MelanieKeay-18x24in-MixedMediaOnPaper-NinthEditions-framed_823x.gif?v=1645200201",
      "status"=> "available",
      "category_id"=> 1,
      "artist_id"=> 1
],
    [
      "name"=> "No Title",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 290,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/MelanieBlacksneaks-Walnut_823x.jpg?v=1645200525",
      "status"=> "available",
      "category_id"=> 1,
      "artist_id"=> 1
    ],
    [
      "name"=> "Ego Study",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 290,
      "stock"=> 0,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/MelanieFireWalnut_823x.jpg?v=1645200519",
      "status"=> "not available",
      "category_id"=> 1,
      "artist_id"=> 1
    ],
    [
      "name"=> "Untitled Diptych",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 625,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/MelanieDiptychBlackframe_823x.jpg?v=1645200514",
      "status"=> "available",
      "category_id"=> 1,
      "artist_id"=> 1
    ],
    [
      "name"=> "Untitled Red 1",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 475,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/Mel1-framed_823x.jpg?v=1645200813",
      "status"=> "available",
      "category_id"=> 1,
      "artist_id"=> 1
    ],
    [
      "name"=> "Where You End and I begin (study 2)",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 300,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/Mel2-framed_823x.jpg?v=1645200833",
      "status"=> "available",
      "category_id"=> 1,
      "artist_id"=> 1
    ],
    [
      "name"=> "love",
      "description"=> "love is always welcome",
      "discount"=> 1.6,
      "price"=> 800,
      "stock"=> 20,
      "image"=> "https://images.theconversation.com/files/122137/original/image-20160511-18171-kulas4.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
      "status"=> "available",
      "category_id"=> 2,
      "artist_id"=> 1
    ],[      "name"=> "Playing Boy",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 225,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/PlayingBoy-ErynLougheed-GouacheonPaper-2019-OriginalArtwork-illustration-NinthEditions-framed_823x.jpg?v=1645200254",
      "status"=> "available",
      "category_id"=> 2,
      "artist_id"=> 2
        ],
    [
      "name"=> "Happy Lion",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 250,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/10_c6879d1d-9a60-4ccb-be81-73fa371b0534_823x.jpg?v=1645200460",
      "status"=> "available",
      "category_id"=> 2,
      "artist_id"=> 2
        ],
    [      "name"=> "Hilltop",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 670,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/12_823x.jpg?v=1645200469",
      "status"=> "available",
      "category_id"=> 2,
      "artist_id"=> 2
        ],
    [
      "name"=> "Barn",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 250,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/Barn_floatframe_ErynLougheed_4x6_gouache_originalart_823x.jpg?v=1645200691",
      "status"=> "available",
      "category_id"=> 2,
      "artist_id"=> 2
        ],
    [
      "name"=> "Strawberry Bush",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 250,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/StrawberryBush_ErynLougheed_newframed_823x.jpg?v=1645200688",
      "status"=> "available",
      "category_id"=> 2,
      "artist_id"=> 2
        ],
    [
      "name"=> "Shoes",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 200,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/11_823x.jpg?v=1645200449",
      "status"=> "available",
      "category_id"=> 2,
      "artist_id"=> 2
        ],
    [
      "name"=> "Rhyme",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 230,
      "stock"=> 0,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/RhymeFramedNEW_823x.jpg?v=1645200838",
      "status"=> "not available",
      "category_id"=> 2,
      "artist_id"=> 2
        ],
    [
      "name"=> "hate",
      "description"=> "no room for hatred",
      "discount"=> 1.6,
      "price"=> 800,
      "stock"=> 32,
      "image"=> "https://www.apa.org/pubs/books/images/4318164-475.gif",
      "status"=> "available",
      "category_id"=> 2,
      "artist_id"=> 2
    ],[
      "name"=> "seven vessels 2",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 250,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/sevenvessels2_LeiaBryans_origianlart_gouache_10x12inches-framed-white_823x.jpg?v=1645200647",
      "status"=> "available",
      "category_id"=> 2,
      "artist_id"=> 3
        ],
    [
      "name"=> "eleven vessels",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 600,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_823x.jpg?v=1645200680",
      "status"=> "available",
      "category_id"=> 2,
      "artist_id"=> 3
        ],
    [
      "name"=> "eleven vessels 2",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 600,
      "stock"=> 0,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/elevenvessels2_framed_600x.jpg?v=1645200684",
      "status"=> "not available",
      "category_id"=> 2,
      "artist_id"=> 3
        ],
    [
      "name"=> "eight vessels 3",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 375,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/eightvessels2_LeiaBryans_origianlart_gouache_10x12inches-framed-white_1100x.jpg?v=1645200672",
      "status"=> "available",
      "category_id"=> 2,
      "artist_id"=> 3
        ],
    [
      "name"=> "seven vessels",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 250,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/sevenvessels_LeiaBryans_origianlart_gouache_10x12inches-framed-whitecopy2_823x.jpg?v=1645200659",
      "status"=> "available",
      "category_id"=> 2,
      "artist_id"=> 3
        ],
    [
      "name"=> "four vessels",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 250,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/fourvessels_LeiaBryans_origianlart_gouache_10x12inches-framed-white_823x.jpg?v=1645200653",
      "status"=> "available",
      "category_id"=> 2,
      "artist_id"=> 3
        ],
    [
        "name"=> "eight vessels",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 375,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/eightvessels_LeiaBryans_origianlart_gouache_16x20inches-framed-white_823x.jpg?v=1645200663",
      "status"=> "available",
      "category_id"=> 2,
      "artist_id"=> 3
        ],
    [
      "name"=> "eight vessels 2",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 375,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/eightvessels2_LeiaBryans_origianlart_gouache_10x12inches-framed_68a87c17-9f9e-4776-b689-9c6472b45b21_823x.jpg?v=1645200668",
      "status"=> "available",
      "category_id"=> 2,
      "artist_id"=> 3
    ],[
      "name"=> "Juice 3",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 175,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/Juice3_edited_framed_823x.jpg?v=1645200849",
      "status"=> "available",
      "category_id"=> 2,
      "artist_id"=> 4
        ],
    [
      "name"=> "Juice 7",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 200,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/Juice7editedframedcopy_823x.jpg?v=1645200862",
      "status"=> "available",
      "category_id"=> 2,
      "artist_id"=> 4
        ],
    [
      "name"=> "Juice 1",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 185,
      "stock"=> 0,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/Juice1_framed_edited_823x.jpg?v=1645200843",
      "status"=> "not available",
      "category_id"=> 2,
      "artist_id"=> 4
        ],
    [
      "name"=> "Juice 6",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 175,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/SidHicks_Juice6_framed_FINAL_823x.jpg?v=1645200858",
      "status"=> "available",
      "category_id"=> 2,
      "artist_id"=> 4
        ],
    [
          "name"=> "Juice 5",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 200,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/Juice5_finalframed_600x.jpg?v=1645200853",
      "status"=> "available",
      "category_id"=> 2,
      "artist_id"=> 4
        ],
    [
      "name"=> "can the guys stay over?",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 230,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/SidHicks_cantheguysstayover_mockupNEW_600x.jpg?v=1645200939",
      "status"=> "available",
      "category_id"=> 2,
      "artist_id"=> 4
        ],
    [
      "name"=> "Bathroom Study (4)",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 230,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/SidHicks_BathroomStudy4_99fd5227-37ff-4358-a39d-9eeb6f961779_1100x.jpg?v=1645200963",
      "status"=> "available",
      "category_id"=> 2,
      "artist_id"=> 4
        ],
    [
      "name"=> "Bedroom Study (3)",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 230,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/SidHicks_BedroomStudy3_1_823x.jpg?v=1645200956",
      "status"=> "available",
      "category_id"=> 2,
      "artist_id"=> 4
        ],
    [
      "name"=> "Sunday Morning Hall",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 250,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/SidHicks_SundayMorningHall_823x.jpg?v=1645200949",
      "status"=> "available",
      "category_id"=> 2,
      "artist_id"=> 4
    ],[
      "name"=> "Atiyyaat",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 525,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/Atiyyaat_nameofurduoriginmeaninggifts_-6_823x.jpg?v=1645201150",
      "status"=> "available",
      "category_id"=> 3,
      "artist_id"=> 5
        ],
    [
      "name"=> "Intertwined",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 525,
      "stock"=> 0,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/Intertwined-7_823x.jpg?v=1645201141",
      "status"=> "not available",
      "category_id"=> 3,
      "artist_id"=> 5
        ],
    [
      "name"=> "Autumn Blooms 2",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 320,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/AutumnBlooms2-6_823x.jpg?v=1645201127",
      "status"=> "available",
      "category_id"=> 3,
      "artist_id"=> 5
        ],
    [
      "name"=> "Searching for Berries",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 485,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/SearchingforBerries-2_823x.jpg?v=1645201107",
      "status"=> "available",
      "category_id"=> 3,
      "artist_id"=> 5
        ],
    [
      "name"=> "Wildflower by the river 2",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 485,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/Wildflowerbytheriver2-1_823x.jpg?v=1645201094",
      "status"=> "available",
      "category_id"=> 3,
      "artist_id"=> 5
        ],
    [
      "name"=> "Wildflower by the river 1",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 485,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/Wildflowerbytheriver1-5_823x.jpg?v=1645201080",
      "status"=> "available",
      "category_id"=> 3,
      "artist_id"=> 5
        ],
    [
      "name"=> "Autumn Blooms 1",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 450,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/AutumnBlooms1-6_823x.jpg?v=1645201067",
      "status"=> "available",
      "category_id"=> 3,
      "artist_id"=> 5
    ],[
      "name"=> "Gargantua Bay #6",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 325,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/Gargantua6_823x.jpg?v=1645200403",
      "status"=> "available",
      "category_id"=> 1,
      "artist_id"=> 6
        ],
    [
      "name"=> "In search of the night colored pearl (3)",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 280,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/3insearchofthenightcolouredpearl_RachelCrummey_charcoalpaper_8x10.5_823x.jpg?v=1645200743",
      "status"=> "available",
      "category_id"=> 1,
      "artist_id"=> 6
        ],
    [
      "name"=> "Vessel (Spiral)",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 350,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/Vessel_Spiral_FRAMED_823x.jpg?v=1645200869",
      "status"=> "available",
      "category_id"=> 1,
      "artist_id"=> 6
        ],
    [
      "name"=> "What You Ingest You Become #3",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 325,
      "stock"=> 0,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/injest3framed_823x.jpg?v=1645200395",
      "status"=> "not available",
      "category_id"=> 1,
      "artist_id"=> 6
        ],
    [
      "name"=> "What You Ingest You Become #4",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 325,
      "stock"=> 0,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/injest4framed_823x.jpg?v=1645200399",
      "status"=> "not available",
      "category_id"=> 1,
      "artist_id"=> 6
        ],
    [
      "name"=> "In search of the night colored pearl (5)",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 280,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/5insearchofthenightcolouredpearl_RachelCrummey_charcoalpaper_8x10.5_copy_823x.jpg?v=1645200756",
      "status"=> "available",
      "category_id"=> 1,
      "artist_id"=> 6
        ],
    [
      "name"=> "In search of the night colored pearl (4)",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 260,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/new-4insearchofthenightcolouredpearl_RachelCrummey_originalart_framed_823x.jpg?v=1645200749",
      "status"=> "available",
      "category_id"=> 1,
      "artist_id"=> 6
        ],
    [
      "name"=> "In search of the night colored pearl (2)",
      "description"=> "This is a demonstration store. You can purchase products like this from Ninth Editions.",
      "discount"=> 1.6,
      "price"=> 280,
      "stock"=> 10,
      "image"=> "https://theme-studio-demo.myshopify.com/cdn/shop/products/2insearchofthenightcolouredpearl_RachelCrummey_charcoalpaper_8x10.5_823x.jpg?v=1645200738",
      "status"=> "available",
      "category_id"=> 1,
      "artist_id"=> 6
        ]
        ]);
    }
}
