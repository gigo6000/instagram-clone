import { gql } from "@apollo/client";

const ADD_COMMENT = gql`
    mutation AddCommentMutation($post_id: ID!, $comment: String!) {
        addComment(post_id: $post_id, comment: $comment) {
            id
            user_id
            user {
                username
            }
            post_id
            comment
            is_liked
        }
    }
`;

export default ADD_COMMENT;
