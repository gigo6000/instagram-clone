import { gql } from "@apollo/client";

const LOGOUT = gql`
    mutation LogoutMutation {
        logout
    }
`;

export default LOGOUT;
