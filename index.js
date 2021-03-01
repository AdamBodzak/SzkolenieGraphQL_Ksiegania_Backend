const { ApolloServer } = require("apollo-server");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const db = require('./db');

const PORT = process.env.PORT || 4000;
const BASE_ASSETS_URL = process.env.BASE_ASSETS_URL || "https://vast-ocean-54671.herokuapp.com";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    db,
    baseAssetsUrl: BASE_ASSETS_URL
  },
  introspection: true,
  playground: true
});

server.listen({ port: PORT }).then((result) => console.log(result.url));