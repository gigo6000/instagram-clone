<?php

namespace App\GraphQL\Mutations;

use App\Models\UserFollower;
use Illuminate\Support\Facades\Auth;

final class Follow
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        $user = Auth::user();

        if (! $user) {
            throw new \RuntimeException('Current user not found.');
        }

        return UserFollower::create([
            'user_id' => $args['user_id'],
            'follower_id' => $user->id
        ]);
    }
}
