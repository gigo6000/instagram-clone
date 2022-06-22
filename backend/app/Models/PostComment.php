<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Post;

class PostComment extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'post_id',
        'comment',
    ];

    protected $appends = [
        'user',
    ];

    /**
    * Get the user that owns the comment.
    */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
    * Get the post that owns the comment.
    */
    public function post()
    {
        return $this->belongsTo(Post::class);
    }

    public function getUserAttribute()
    {
        return $this->user()->first();
    }
}
