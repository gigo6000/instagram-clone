<?php

namespace App\GraphQL\Mutations;

use App\Models\Post;
use Illuminate\Support\Facades\Auth;

class AddPost
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
        $user = Auth::user();

        if (! $user) {
            throw new \RuntimeException('Current user not found.');
        }

        /** @var \Illuminate\Http\UploadedFile $file */
        $file = $args['file'];

        $upload =  $file->storePublicly('public');
        return Post::create([
            'user_id' => $user->id,
            'caption' => $args['caption'],
            'image' => $upload,
        ]);
    }
}
