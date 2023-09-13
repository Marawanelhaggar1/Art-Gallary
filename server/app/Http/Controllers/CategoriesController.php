<?php

namespace App\Http\Controllers;

use App\Http\Requests\categories\createCategoryRequest;
use App\Http\Requests\categories\updateCategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Models\Categories;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    public function index(){
        $categories = Categories::all();
        return CategoryResource::collection($categories);
    }

    public function getCategoryById($id){
        $category=Categories::find($id);
        return new CategoryResource($category);
    }

    public function create(createCategoryRequest $request){
        $category = $request->createCategory();
        return new CategoryResource($category);
    }

    public function update(updateCategoryRequest $request){
        $category = $request->updateCategory();
        return new CategoryResource($category);
    }

    public function delete($id){
        $category=Categories::find($id);

        $category->delete();
        return response()->json([
            'success' => true,
            'message' =>'Successfully deleted category'
        ]);
    }


}
