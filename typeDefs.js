const { gql } = require("apollo-server");
const typeDefs = gql`
  schema {
    query: Query
  }
  type Query {
    authors: [Author!]!
    books: [Book!]!
    users: [User!]!
    author(id: ID!): Author
    book(id: ID!): Book
    user(id: ID!): User
  }
  type Author {
    id: ID!
    name: String!
    photo: Image!
    books: [Book!]!
    bio: String!
  }
  type Book {
    id: ID!
    title: String!
    cover: Image!
    author: Author!
    description: String!
  }
  type User {
    id: ID!
    name: String!
    email: String!
    avatar: Avatar!
    info: String!
  }
  type Image {
    url: String!
  }
  type Avatar {
    image: Image!
    color: String!
  }
`;

module.exports = typeDefs;