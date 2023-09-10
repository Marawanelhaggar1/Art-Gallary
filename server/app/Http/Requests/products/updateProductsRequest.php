<?php

namespace App\Http\Requests\products;

use App\Models\Products;
use Illuminate\Foundation\Http\FormRequest;

class updateProductsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'id'=>'required|exists:products,id',
            'name' => 'required|unique:products,name,' .$this->id,
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
    public function updateProducts():Products{
         $product=Products::findOrFail($this->id);
         $product->update([
            'id' => $this->id,
            'name' => $this->name,
            'description'=>$this->description,
            'discount'=>$this->discount,
            'price'=>$this->price,
            'stock'=>$this->stock,
            'image'=>$this->image,
            'status'=>$this->status,
            'category_id'=>$this->category_id,
            'artist_id'=>$this->artist_id
        ]);

        return $product;
    }
}
