import { ApolloServer } from 'apollo-server-express';

// create and start apollo server, apply the apollo middleware to express app
// exported to make testing easier
export const startApolloServer = async (apolloConfig) => {
    try {
    const  { typeDefs, resolvers, plugins, dataSources, context, expressApp } = apolloConfig;
    const apolloServer = new ApolloServer({ typeDefs, resolvers, plugins, dataSources, context });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app: expressApp });

    return apolloServer;
    } catch (err) {
        console.log('error happened on server creation: ', err);
        return false;
    }
};

export const createApolloServer = async (appContext) => {
    const apolloConfig = {
        expressApp: appContext.getExpressApp(), 
        typeDefs: appContext.getTypeDefs(), 
        resolvers: appContext.getResolvers(), 
        plugins: appContext.getApolloPlugins(appContext.getHTTPServer()), 
        dataSources: await appContext.getApolloDataSources(appContext),
        context: await appContext.getApolloContext(appContext),
    }

    // return started Apollo Server
    return await startApolloServer(apolloConfig);

}

export const getApolloContext = async(appContext) => {
    const { getApolloDataSources } = appContext;
    const dsFunc = await getApolloDataSources(appContext);
    const dataSources = dsFunc();
    const { usersDB } = dataSources.persistAPI;

    const getUserFromReq = (context) => {
        const { req } = context;
        // get the user token from the headers
        const auth = req.headers.authorization || '';
        let token = null;
        let user = null;
        try{
            token = auth.split(' ')[1];
            user = usersDB.getUser(token);
            if (!user) throw new AuthorizationError('you must be logged in');
        } catch (err) {
            throw new AuthorizationError('you must be logged in');
        }
        
        return { user };
    };

    return getUserFromReq;
};