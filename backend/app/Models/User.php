<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\Post;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'username',
        'email',
        'bio',
        'website',
        'phone',
        'image',
        'password',
    ];

    protected $appends = [
        'total_posts',
        'total_followers',
        'total_following'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
    * Get the posts for the user.
    */
    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    /**
    * Get the followers for the user.
    */
    public function followers()
    {
        return $this->hasMany(UserFollower::class);
    }

    /**
    * Get the following for the user.
    */
    public function following()
    {
        return $this->hasMany(UserFollower::class, 'follower_id', 'id');
    }

    public function getTotalPostsAttribute()
    {
        return $this->posts()->count();
    }

    public function getTotalFollowersAttribute()
    {
        return $this->followers()->count();
    }

    public function getTotalFollowingAttribute()
    {
        return $this->following()->count();
    }
}
