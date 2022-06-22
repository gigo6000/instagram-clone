<?php

namespace App\GraphQL\Queries;

use App\Models\Post;

class Feed
{
    public function __invoke($_, array $args)
    {
        return Post::where('user_id', '!=', $args['user_id'])->get()->sortByDesc('created_at')->take(10);
    }
}
