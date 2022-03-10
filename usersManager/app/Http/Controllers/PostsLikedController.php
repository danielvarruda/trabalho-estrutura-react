<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\PostsLiked;

class PostsLikedController extends Controller
{
    public function store (Request $request)
    {
        $data = $request->only(['token', 'post_id']);

        $infoUser = json_decode(base64_decode($data['token']));

        $nowLikes = PostsLiked::where('user_id', $infoUser->id)->where('post_id', $data['post_id'])->count();

        if ($nowLikes > 0) {
            PostsLiked::where('user_id', $infoUser->id)->where('post_id', $data['post_id'])->delete();
        } else {
            PostsLiked::create([
                'user_id' => $infoUser->id,
                'post_id' => $data['post_id']
            ]);
        }

        $likes = PostsLiked::where('post_id', $data['post_id'])->count();

        return response()->json(["mensagem" => "Post curtido!", "likes" => $likes], 201);
    }
}
