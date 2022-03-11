<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\PostsLiked;
use App\Models\User;

class PostsLikedController extends Controller
{
    public function store (Request $request)
    {
        $data = $request->only(['token', 'post_id']);

        $infoUser = json_decode(base64_decode($data['token']));

        $nowLikes = PostsLiked::where('user_id', $infoUser->id)->where('post_id', $data['post_id'])->count();

        $dataPost = [
            'user_id' => $infoUser->id,
            'post_id' => $data['post_id']
        ];

        if ($nowLikes > 0) {
            PostsLiked::where('user_id', $infoUser->id)->where('post_id', $data['post_id'])->delete();
            $action = "remove";
        } else {
            PostsLiked::create($dataPost);
            $action = "insert";
        }

        $dataPost['user_name'] = User::select('name')->where('id', $dataPost['user_id'])->get()[0]['name'];

        return response()->json(["mensagem" => "Post curtido!", "action" => $action, "alteration" => $dataPost], 201);
    }
}
