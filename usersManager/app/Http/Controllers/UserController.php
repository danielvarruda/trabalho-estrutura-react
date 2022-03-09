<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index () 
    {
        $users = User::all();
        return response()->json($users, 200);
    }

    public function store (Request $request)
    {
        User::create($request->all());
        return response()->json(["mensagem" => "Cadastro realizado!"], 201);
    }

    public function login (Request $request)
    {
        $data = $request->only(['email', 'password']);

        if (User::where('email', $data['email'])->count() == 0)   
            return response()->json(["error" => "Email não encontrado"], 200);

        $user = User::select('id')->where('email', $data['email'])->where('password', $data['password'])->limit(1);

        if ($user->count() == 0)   
            return response()->json(["error" => "Senha incorreta"], 200);
        
        $token = [
            'exp' => date('d/m/Y H:i:s', strtotime("+1 hours")),
            'id' => $user->get()[0]['id']
        ];

        $tokenCode = base64_encode(json_encode($token));

        return response()->json(['success' => 'Login realizado!', 'token' => $tokenCode], 200);
    }

    public function validateUser (Request $request)
    {
        $data = $request->only(['token']);

        $token = json_decode(base64_decode($data['token']));

        if (!$token || $token->exp < date('d/m/Y H:i:s'))
            return response()->json(["error" => "Token inválido"], 200);

        return response()->json(['success' => 'Token válido!'], 200);
    }
}
