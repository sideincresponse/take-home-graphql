import express from 'express';
import {getAppContext} from './context/AppContext.js';

const appContext = getAppContext(process.env.NODE_ENV);
console.log('appcontext: ', appContext);
const app = express();

// Please use apollo server to implement your graphql query
// const { ApolloServer } = require('apollo-server-express');
// const server = new ApolloServer({
//  //...
// });
// server.applyMiddleware({ app, path:"/graphql" });

/** Please remove me line 11-14 **/
// app.get('*', (req, res, next) => {
//     res.send("Good luck! 😀")
// });

// app.listen({ port: 4000 }, () =>
//     console.log(`Listening on http://localhost:4000/graphql`)
// );