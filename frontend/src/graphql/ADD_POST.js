import { gql } from "@apollo/client";

const ADD_POST = gql`
    mutation AddPost($caption: String!, $file: Upload!) {
        addPost(caption: $caption, file: $file) {
            id
            caption
            image
        }
    }
`;

export default ADD_POST;
