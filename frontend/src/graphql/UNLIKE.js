import { gql } from "@apollo/client";

const UNLIKE = gql`
    mutation UnlikeMutation($user_id: ID!, $post_id: ID!) {
        unlike(user_id: $user_id, post_id: $post_id)
    }
`;

export default UNLIKE;
