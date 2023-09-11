<?php

namespace App\Http\Requests\categories;

use App\Models\Categories;
use Illuminate\Foundation\Http\FormRequest;

class updateCategoryRequest extends FormRequest
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
            'id'=>'required|exists:categories,id',
            'name'=>'required|string|unique:categories,name,' .$this->id,
        ];
    }

    public function updateCategory():Categories{
        $category=Categories::findOrFail($this->id);
         $category->update([
            'id' => $this->id,
            'name' => $this->name
        ]);

        return $category;

    }
}
