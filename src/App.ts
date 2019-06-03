import { ApolloServer, gql } from "apollo-server-express";
import dotenv from "dotenv";
import express from "express";

import http from "http";

import * as router from "./routes/routes";

dotenv.config();

const app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, PUT, POST, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

const typeDefs = gql`
  type Query {
    hello: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello Apollo TS!"
  }
};

const apollo = new ApolloServer({
  resolvers,
  typeDefs
});

const server = http.createServer(app);

apollo.applyMiddleware({ app, path: "/" });
app.listen(8080);
