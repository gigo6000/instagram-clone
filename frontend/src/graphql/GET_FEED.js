import { gql } from "@apollo/client";

const GET_FEED = gql`
    query getFeed($user_id: ID!) {
        feed(user_id: $user_id) {
            id
            caption
            image
            likes
            created_time_ago
            user {
                id
                name
                username
                image
            }
            comments {
                id
                comment
                user {
                    id
                    name
                    username
                    image
                }
            }
        }
    }
`;

export default GET_FEED;
