import { gql } from "@apollo/client";

const LIKE = gql`
    mutation LikeMutation($user_id: ID!, $post_id: ID!) {
        like(user_id: $user_id, post_id: $post_id) {
            user_id
            post_id
        }
    }
`;

export default LIKE;
