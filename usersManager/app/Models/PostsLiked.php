<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostsLiked extends Model
{
    use HasFactory;

    protected $table = "posts_liked";

    protected $fillable = [
        'user_id',
        'post_id'
    ];
}
