<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\PostLike;
use App\Models\PostComment;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Post::all();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function user(User $user)
    {
        return $user->posts()->get();
    }

    /**
     * Get feed for user
     *
     * @return \Illuminate\Http\Response
     */
    public function feed()
    {
        return Post::all()->random(10);
    }

    /**
     * Is liked?
     *
     * @return \Illuminate\Http\Response
     */
    public function isLiked(Post $post)
    {
        $like = $post->likes()->where(['user_id' => auth()->user()->id])->first();

        if ($like) {
            return "1";
        }

        return "0";
    }

    /**
     * Get posts from current user
     *
     * @return \Illuminate\Http\Response
     */
    public function userPosts()
    {
        return auth()->user()->posts()->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Post::create($request->all());
    }

    /**
     * Like a post
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function like(Request $request)
    {
        return PostLike::create([
            'post_id' => $request->input('id'),
            'user_id' => auth()->user()->id
        ]);
    }

    /**
     * Unlike a post
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function unlike(Request $request)
    {
        return PostLike::where([
            'post_id' => $request->input('id'),
            'user_id' => auth()->user()->id
        ])->delete();
    }

    /**
    * Add comment
    *
    * @param  \Illuminate\Http\Request  $request
    * @return \Illuminate\Http\Response
    */
    public function addComment(Request $request)
    {
        return PostComment::create([
            'post_id' => $request->input('id'),
            'user_id' => auth()->user()->id,
            'comment' => $request->input('comment')
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        //
    }
}
