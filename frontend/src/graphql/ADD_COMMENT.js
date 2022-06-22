import { gql } from "@apollo/client";

const ADD_COMMENT = gql`
    mutation AddCommentMutation(
        $user_id: ID!
        $post_id: ID!
        $comment: String!
    ) {
        addComment(user_id: $user_id, post_id: $post_id, comment: $comment) {
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
