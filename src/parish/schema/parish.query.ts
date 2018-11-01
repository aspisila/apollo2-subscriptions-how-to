import { gql } from 'apollo-server';

const parishQuery = gql`
    type Query {
        parishes: [Parish]
    }
`;

export { parishQuery };