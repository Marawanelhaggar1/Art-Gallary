<?php

namespace App\Http\Requests\artists;

use App\Models\Artist;
use Illuminate\Foundation\Http\FormRequest;

class createArtistRequest extends FormRequest
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
            'name' => 'required|string|max:50',
        ];
    }

    public function createArtist():Artist {
        return Artist::create([
            'name'=>$this->name
        ]);
    }
}
