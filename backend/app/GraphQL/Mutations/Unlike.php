<?php

namespace App\GraphQL\Mutations;

use App\Models\PostLike;

final class Unlike
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        $postLike = PostLike::where([
            'user_id' => $args['user_id'],
            'post_id' => $args['post_id']
        ])->first();

        if ($postLike) {
            $postLike->delete();
            return 'deleted';
        }

        return 'not deleted';
    }
}
