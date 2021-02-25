const { gql } = require('apollo-server');

const typeDefs = gql`
    schema {
        query: Query
    }
    type Query {
        books: [Book!]!
        authors: [Author!]!
        users: [User!]!
    }
    type Book {
        title: String
    }
    type Author {
        name: String!
    }
    type User {
        name: String!
        email: String!
    }
`;

module.exports = typeDefs