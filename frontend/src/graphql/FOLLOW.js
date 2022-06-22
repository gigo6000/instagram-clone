import { gql } from "@apollo/client";

const FOLLOW = gql`
    mutation FollowMutation($user_id: ID!, $follower_id: ID!) {
        follow(user_id: $user_id, follower_id: $follower_id) {
            user_id
            follower_id
        }
    }
`;

export default FOLLOW;
