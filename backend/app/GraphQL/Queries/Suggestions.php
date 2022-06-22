<?php

namespace App\GraphQL\Queries;

use App\Models\User;
use App\Models\UserFollower;

class Suggestions
{
    public function __invoke($_, array $args)
    {
        return User::whereNotIn(
            'id',
            UserFollower::select(['user_id'])
                ->whereIn('follower_id', [$args['user_id']])
        )->get()->take(5);
    }
}
