
import http from 'http';
import express from 'express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'; 
import { createApolloServer, getApolloContext } from '../servers/apollo.js';
import { typeDefs } from '../schema/index.js';
import { resolvers } from '../resolvers/index.js';
import { getDataSources } from '../datasources/index.js';
import { getDBClient } from '../datasources/persistance/dbClient.js';

let expressApp = null;
let httpServer = null;
let apolloServer = null;
const config = {
    dbURI: 'mongodb://127.0.0.1:27017/',
    dbName: 'properties',
    propertyApiURI: 'https://api.simplyrets.com/',
    propertyAPIcreds: {
        user: 'simplyrets',
        apiToken: 'simplyrets',
    },    
    port: 4000,
    ssl: false,
    hostname: 'localhost'
};

export const devContext = {
    createExpressApp: () => {
        expressApp = express();
        return expressApp;
    },

    getExpressApp: () => {
        return expressApp;
    },

    createHTTPServer: (expressApp) => {
        httpServer = http.createServer(expressApp);
        return httpServer;
    },

    getHTTPServer: () => {
        return httpServer;
    },

    createApolloServer: async (appContext) => {
        // bootstrap express app        
        apolloServer = await createApolloServer(appContext);
        return true;
    },

    startServer: async () => {
       // start server with all middleware set up
        await new Promise(resolve => httpServer.listen({ port: config.port }, resolve));

        console.log('🚀 Server ready at',
            `http${config.ssl ? 's' : ''}://${config.hostname}:${config.port}${apolloServer.graphqlPath}`
        );
        return { apolloServer, expressApp };
    },

    getApolloServer: () => {
        return apolloServer;
    },

    getConfig: () => {
        return config;
    },

    getApolloPlugins: (httpServer) => 
    {
        return [ApolloServerPluginDrainHttpServer({ httpServer })];
    },

    getApolloDataSources: (appContext) =>
    {
       return getDataSources(appContext);
    },

    getApolloContext: (appContext) => 
    {
        return getApolloContext(appContext);
    },

    getDBClient: () => {
        // returns promise
        return getDBClient(config);
    },

    getTypeDefs: () => {
        return typeDefs;
    },

    getResolvers: () => {
        return resolvers;
    }

};
