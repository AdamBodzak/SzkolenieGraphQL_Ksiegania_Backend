const { gql } = require("apollo-server");
const typeDefs = gql`
  schema {
    query: Query
  }
  type Query {
    authors: [Author!]!
    books: [Book!]!
    users: [User!]!
    author(id: Int!): Author
    book(id: Int!): Book
    user(id: Int!): User
  }
  type Author {
    name: String!
    photo: Image!
    books: [Book!]!
    bio: String!
  }
  type Book {
    id: Int
    title: String!
    cover: Image!
    author: Author!
    description: String!
  }
  type User {
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