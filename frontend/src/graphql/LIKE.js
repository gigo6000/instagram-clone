import { gql } from "@apollo/client";

const LIKE = gql`
    mutation LikeMutation($post_id: ID!) {
        like(post_id: $post_id) {
            user_id
            post_id
        }
    }
`;

export default LIKE;
