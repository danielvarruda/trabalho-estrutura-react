<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function index () 
    {
        $posts = Post::select('posts.id', 'users.name', 'posts.text', 'posts.created_at')
                    ->join('users', 'users.id', '=', 'posts.user_id')
                    ->get();

        return response()->json($posts, 200);
    }

    public function store (Request $request)
    {
        $data = $request->only(['token', 'text']);
        $indoUser = json_decode(base64_decode($data['token']));

        Post::create([
            'user_id' => $indoUser->id,
            'text' => $data['text']
        ]);

        return response()->json(["mensagem" => "Mensagem postada!"], 201);
    }

    public function myPosts ($token)
    {
        $data = json_decode(base64_decode($token));

        $myPosts = Post::select('posts.id', 'users.name', 'posts.text', 'posts.created_at')
                        ->join('users', 'users.id', '=', 'posts.user_id')
                        ->where('user_id', $data->id)
                        ->get();

        return response()->json($myPosts, 200);
    }
}