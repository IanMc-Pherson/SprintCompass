const { port, graphql } = require("./config");
const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
const { resolvers } = require("./resolvers");
const { schema } = require("./schema");
app.use(graphql, graphqlHTTP.graphqlHTTP({
 schema,
 rootValue: resolvers,
 graphiql: true
 }));
app.listen(port);
console.log(`Server ready on locahost:${port}${graphql}`);
