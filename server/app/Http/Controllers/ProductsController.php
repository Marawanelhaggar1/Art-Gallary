<?php

namespace App\Http\Controllers;

use App\Http\Requests\products\createProductsRequest;
use App\Http\Requests\products\updateProductsRequest;
use App\Http\Resources\ProductsResource;
use App\Models\Products;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
     public function index(){
        $products = Products::paginate(8);
        return ProductsResource::collection($products);
    }
        // $products = Products::paginate(8);

    public function getProductById($id)
    {
        $product=Products::find($id);
        return new ProductsResource($product);

    }


    public function getProductByCategory($category_id){
        $products = Products::all();
        $byCategory=[];
        foreach($products as $prod) {
           if( $prod['category_id'] == $category_id){
            $byCategory[]=$prod;
           } ;
        }
        return ProductsResource::collection($byCategory);
    }

    public function getProductByArtist($artist_id){
        $products = Products::all();
        $byArtist=[];
        foreach($products as $prod) {
           if( $prod['artist_id'] == $artist_id){
            $byArtist[]=$prod;
           } ;
        }
        return ProductsResource::collection($byArtist);
    }


    public function create(createProductsRequest $request){
        $product = $request->createProducts();
        return new ProductsResource($product);
    }

    public function update(updateProductsRequest $request){
        $product = $request->updateProducts();
        return new ProductsResource($product);
    }

    public function delete($id){
        $product=Products::find($id);

        $product->delete();
        return response()->json([
            'success' => true,
            'message' =>'Successfully deleted product'
        ]);
    }

}
