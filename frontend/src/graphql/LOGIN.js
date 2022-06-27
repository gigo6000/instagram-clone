import { gql } from "@apollo/client";

const LOGIN = gql`
    mutation LoginMutation($email: String!, $password: String!) {
        login(email: $email, password: $password)
    }
`;

export default LOGIN;
