<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(RegisterRequest $request){
        $user = $request->registerUser();
        return response()->json([
            'success' => true,
            'message' =>'Successfully registered',
            'data' =>$user
        ],201);
    }

    public function login(LoginRequest $request){
        $user = $request->loginUser();
        return response()->json([
            'success' => true,
            'message' =>'Successfully logged in',
            'data' =>$user
        ]);
    }
}
