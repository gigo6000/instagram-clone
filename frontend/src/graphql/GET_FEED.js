import { gql } from "@apollo/client";

const GET_FEED = gql`
    query getFeed {
        feed {
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
            postLikes {
                user_id
                post_id
            }
        }
    }
`;

export default GET_FEED;
