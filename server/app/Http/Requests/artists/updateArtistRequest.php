<?php

namespace App\Http\Requests\artists;

use App\Models\Artist;
use Illuminate\Foundation\Http\FormRequest;

class updateArtistRequest extends FormRequest
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
            'id'=>'required|exists:artists,id',
            'name'=>'required|string|unique:artists,name,' .$this->id,
        ];
    }

     public function updateArtist():Artist{
        $artist=Artist::findOrFail($this->id);
         $artist->update([
            'id' => $this->id,
            'name' => $this->name
        ]);

        return $artist;

    }
}
