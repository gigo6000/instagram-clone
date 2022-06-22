import { gql } from "@apollo/client";

const GET_POST_LIKES = gql`
    query getPostLike($user_id: ID!, $post_id: ID!) {
        postLike(user_id: $user_id, post_id: $post_id) {
            id
        }
    }
`;

export default GET_POST_LIKES;
