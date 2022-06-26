import { gql } from "@apollo/client";

const GET_CURRENT_USER = gql`
    {
        me {
            id
            name
            username
            email
            bio
            website
            phone
            image
            total_posts
            total_followers
            total_following

            posts {
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
                    total_posts
                    total_followers
                    total_following
                }
                postLikes {
                    user_id
                    post_id
                }
            }
        }
    }
`;

export default GET_CURRENT_USER;
