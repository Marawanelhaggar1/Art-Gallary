<?php

namespace App\Http\Requests\settings;

use App\Models\Settings;
use Illuminate\Foundation\Http\FormRequest;

class CreateSettingRequests extends FormRequest
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
            'name'=>'string|nullable',
            'description'=>'string|nullable',
            'logo'=>'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'favicon'=>'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'email'=>'email|nullable',
            'phone'=>'string|nullable',
            'address'=>'string|nullable',
            'facebook'=>'string|nullable',
            'X'=>'string|nullable',
            'instagram'=>'string|nullable',
            'linkedin'=>'string|nullable',
        ];
    }


    public function createSetting():Settings{
        return Settings::create([
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
    }
}
