import { gql } from "@apollo/client";

const GET_SUGGESTIONS = gql`
    query getSuggestions($user_id: ID!) {
        suggestions(user_id: $user_id) {
            id
            username
            image
        }
    }
`;

export default GET_SUGGESTIONS;
