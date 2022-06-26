<?php

namespace App\GraphQL\Queries;

use App\Models\User;
use App\Models\UserFollower;
use Illuminate\Support\Facades\Auth;

class Stories
{
    public function __invoke($_, array $args)
    {
        $user = Auth::user();

        if (! $user) {
            throw new \RuntimeException('Current user not found.');
        }

        return User::whereIn(
            'id',
            UserFollower::select(['user_id'])
                ->where('follower_id', $user->id)
        )->get()->take(15);
    }
}
