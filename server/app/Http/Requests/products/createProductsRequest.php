<?php

namespace App\Http\Requests\products;

use App\Models\Products;
use Illuminate\Foundation\Http\FormRequest;

class createProductsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()->isAdmin();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required',
            'description' => 'required',
            'discount' => 'required|nullable',
            'price' => 'required',
            'stock' => 'required',
            'image' => 'required',
            'status' => 'required|nullable',
            'category_id' => 'required|exists:categories,id',
            'artist_id' => 'required|exists:artists,id'
        ];
    }

    public function createProducts(): Products{
        return Products::create([
            'name'=>$this->name,
            'description'=>$this->description,
            'discount'=>$this->discount,
            'price'=>$this->price,
            'stock'=>$this->stock,
            'image'=>$this->image,
            'status'=>$this->status,
            'category_id'=>$this->category_id,
            'artist_id'=>$this->artist_id
        ]);
    }
}
