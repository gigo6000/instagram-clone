<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\PostComment;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'caption',
        'image'
    ];

    protected $appends = [
        'user',
        'comments',
        'likes',
        'created_time_ago'
    ];

    /**
    * Get the user that owns the post.
    */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
    * Get the comments for the post.
    */
    public function comments()
    {
        return $this->hasMany(PostComment::class);
    }

    /**
    * Get the likes for the post.
    */
    public function postLikes()
    {
        return $this->hasMany(PostLike::class);
    }

    public function getUserAttribute()
    {
        return $this->user()->first();
    }

    public function getCommentsAttribute()
    {
        return $this->comments()->get();
    }

    public function getLikesAttribute()
    {
        return $this->postLikes()->count();
    }

    public function getCreatedTimeAgoAttribute()
    {
        return $this->created_at->diffForHumans();
    }
}
