import { gql } from "@apollo/client";

const FOLLOW = gql`
    mutation FollowMutation($user_id: ID!) {
        follow(user_id: $user_id) {
            user_id
            follower_id
        }
    }
`;

export default FOLLOW;
