<?php

namespace App\GraphQL\Mutations;

use Illuminate\Contracts\Auth\Factory as AuthFactory;
use Illuminate\Support\Facades\Auth;

class Logout
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

        $user->tokens()->delete();

        return 'Logged out';
    }
}
