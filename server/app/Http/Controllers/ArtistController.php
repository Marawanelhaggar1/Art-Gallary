<?php

namespace App\Http\Controllers;

use App\Http\Requests\artists\createArtistRequest;
use App\Http\Requests\artists\updateArtistRequest;
use App\Http\Resources\ArtistsResource;
use App\Models\Artist;
use Illuminate\Http\Request;

class ArtistController extends Controller
{
    public function index(){
        $artists = Artist::all();
        return ArtistsResource::collection($artists);
    }

    public function create(createArtistRequest $request){
        $artist = $request->createArtist();
        return new ArtistsResource($artist);
    }

    public function update(updateArtistRequest $request){
        $artist = $request->updateArtist();
        return new ArtistsResource($artist);
    }

    public function delete($id){
        $artist=Artist::find($id);

        $artist->delete();
        return response()->json([
            'success' => true,
            'message' =>'Successfully deleted artist'
        ]);
    }
}
