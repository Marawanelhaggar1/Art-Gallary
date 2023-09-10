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
        $products = Products::all();
        return ProductsResource::collection($products);
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
