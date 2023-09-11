<?php

namespace App\Http\Requests\Auth;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
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
            'email' => 'required|email|exists:users,email',
            'password' => 'required|string',
            ];
    }

    public function loginUser(): array{
        $credentials = $this->only('email', 'password');
        // $user=User::whereIn('email',$this->email)->get();
        try{
            $auth = auth()->attempt($credentials);

            if(!$auth) throw new \Exception('invalid credentials');
            return [
                'token' => auth()->user()->createToken('auth_token')->plainTextToken,
                // 'user' =>$user ,
            ];

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ],401);
        }
    }
}
