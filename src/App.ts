import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import express from "express";

import { resolvers } from "./graphql/resolvers";
import { types } from "./graphql/schemas";

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

const apollo = new ApolloServer({
  resolvers,
  typeDefs: types
});

apollo.applyMiddleware({ app, path: "/" });
app.listen(8080);
