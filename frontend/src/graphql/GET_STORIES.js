import { gql } from "@apollo/client";

const GET_STORIES = gql`
    query GetStories {
        stories {
            id
            username
            image
        }
    }
`;

export default GET_STORIES;
