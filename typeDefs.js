const { gql } = require('apollo-server');

const typeDefs = gql`
    schema {
        query: Query
    }
    type Query {

    }

`;

module.exports = typeDefs