<?php

namespace App\GraphQL\Mutations;

use App\Models\Post;

class Upload
{
    /**
     * Upload a file, store it on the server and return the path.
     *
     * @param  mixed  $root
     * @param  array<string, mixed>  $args
     * @return string|null
     */
    public function __invoke($root, array $args): ?Post
    {
        /** @var \Illuminate\Http\UploadedFile $file */
        $file = $args['file'];

        $upload =  $file->storePublicly('public');
        return Post::create([
            'user_id' => $args['user_id'],
            'caption' => $args['caption'],
            'image' => $upload,
        ]);
    }
}
