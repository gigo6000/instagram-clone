import { gql } from "@apollo/client";

const UPLOAD_FILE = gql`
    mutation UploadFile($user_id: ID!, $caption: String!, $file: Upload!) {
        upload(user_id: $user_id, caption: $caption, file: $file) {
            id
            caption
            image
        }
    }
`;

export default UPLOAD_FILE;
