import { gql } from "@apollo/client";

const UPDATE_USER = gql`
    mutation UpdateUser(
        $name: String
        $username: String
        $bio: String
        $website: String
        $email: String
        $phone: String
    ) {
        updateUser(
            name: $name
            username: $username
            bio: $bio
            website: $website
            email: $email
            phone: $phone
        ) {
            id
            name
            username
            bio
            website
            email
            phone
        }
    }
`;

export default UPDATE_USER;
