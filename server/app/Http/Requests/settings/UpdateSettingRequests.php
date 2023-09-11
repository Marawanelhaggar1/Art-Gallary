<?php

namespace App\Http\Requests\settings;

use App\Models\Settings;
use Illuminate\Foundation\Http\FormRequest;

class UpdateSettingRequests extends FormRequest
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
            'id'=>'required|integer|exists:setting,id',
            'name' => 'required|string|max:50',
            'description' => 'required|string',
            'logo' => 'required|string',
            'favicon' => 'required|string',
            'email' => 'required|string',
            'phone' => 'required|string',
            'address' => 'required|string',
            'facebook' => 'required|string',
            'X'=>'required|string',
            'instagram' => 'required|string',
            'linkedin' => 'required|string',
        ];
    }

    public function updateSettings(): Settings{
        $settings = Settings::find($this->id);

        $settings->update([
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'logo' => $this->logo,
            'favicon' => $this->favicon,
            'email' => $this->email,
            'phone' => $this->phone,
            'address' => $this->address,
            'facebook' => $this->facebook,
            'X' => $this->X,
            'instagram' => $this->instagram,
            'linkedin' => $this->linkedin
        ]);

        return $settings;
    }
}
