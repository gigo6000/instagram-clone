<?php

namespace App\GraphQL\Mutations;

use Illuminate\Support\Facades\Auth;

final class UpdateUser
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

        $user->name = $args['name'];
        $user->username = $args['username'];
        $user->bio= $args['bio'];
        $user->website = $args['website'];
        $user->phone = $args['phone'];
        $user->email = $args['email'];

        $user->save();

        return $user;
    }
}
