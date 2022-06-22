<?php

namespace App\Http\Controllers;

use App\Models\UserFollower;
use App\Models\User;
use Illuminate\Http\Request;

class UserFollowerController extends Controller
{
    /**
     * Follow another user
     *
     * @return \Illuminate\Http\Response
     */
    public function follow(Request $request)
    {
        return UserFollower::create([
            'user_id' => $request->input('user_id'),
            'follower_id' => auth()->user()->id,
        ]);
    }
}
