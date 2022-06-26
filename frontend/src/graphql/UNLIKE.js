import { gql } from "@apollo/client";

const UNLIKE = gql`
    mutation UnlikeMutation($post_id: ID!) {
        unlike(post_id: $post_id)
    }
`;

export default UNLIKE;
