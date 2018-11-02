import { gql } from "apollo-server";

const parishType = gql`
    type Parish {
        name: String
        description: String
        picture: String
        city: String
        state: String
    }
`;

export { parishType };