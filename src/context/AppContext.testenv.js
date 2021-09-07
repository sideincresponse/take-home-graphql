
import { createApolloServer, getApolloContext } from '../servers/tests/apollo.mocks.js';
import { typeDefs } from '../schema/index.js';
import { resolvers } from '../resolvers/tests/index.mock.js';
import { getDataSources } from '../datasources/tests/index.mock.js';
import { getDBClient } from '../datasources/persistance/tests/dbClient.mock.js';

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
        expressApp = () => {
            console.log('fake express app');
        };
        return expressApp;
    },

    getExpressApp: () => {
        return expressApp;
    },

    createHTTPServer: (expressApp) => {
        httpServer = () => {
            console.log('fake http server');
        }
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
        console.log('fake start server');
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
        return [];    
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
