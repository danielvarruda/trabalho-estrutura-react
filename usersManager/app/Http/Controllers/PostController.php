<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use DB;

class PostController extends Controller
{
    public function index () 
    {
        $posts = $this->getPost()->get();

        $return = $this->getObjectReturn($posts);

        return response()->json($return, 200);
    }

    public function myPosts ($token)
    {
        $data = json_decode(base64_decode($token));

        $myPosts = $this->getPost($data->id)->get();

        $return = $this->getObjectReturn($myPosts);

        return response()->json($return, 200);
    }

    public function getPost ($id = null)
    {
        $return = Post::select('posts.id', 'users.name', 'posts.text', 'posts.created_at', 'posts_liked.user_id as user_like_id', 'u2.name as user_like')
                    ->join('users', 'users.id', '=', 'posts.user_id')
                    ->leftJoin('posts_liked', 'posts_liked.post_id', '=', 'posts.id')
                    ->leftJoin('users as u2', 'u2.id', '=', 'posts_liked.user_id');

        $id && $return->where('users.id', $id);

        $return->orderBy('posts.created_at', 'DESC')
                ->orderBy('posts_liked.created_at', 'DESC');
                
        return $return;
    }

    public function getObjectReturn ($posts)
    {
        $return = [];
        $ids_post = [];

        foreach ($posts as $post) {

            if (!in_array($post['id'], $ids_post)) {
                $ids_post[] = $post['id'];

                $row = array_search($post['id'], $ids_post);

                $return[$row] = [
                    'id' => $post['id'],
                    'name' => $post['name'],
                    'text' => $post['text'],
                    'created_at' => $post['created_at'],
                    'like_list' => []
                ];
            }

            $row = array_search($post['id'], $ids_post);

            if ($post['user_like_id']) {
                $return[$row]['like_list'][] = [
                    'id' => $post['user_like_id'],
                    'name' => $post['user_like']
                ];
            }
        }

        return $return;
    }

    public function store (Request $request)
    {
        $data = $request->only(['token', 'text']);

        if (!isset($data['text']) && $data['text'] == '')
            return response()->json(["error" => "Você não comentou nada..."], 201);

        $indoUser = json_decode(base64_decode($data['token']));

        Post::create([
            'user_id' => $indoUser->id,
            'text' => $data['text']
        ]);

        return response()->json(["mensagem" => "Mensagem postada!"], 201);
    }
}
