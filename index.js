import { getAppContext } from './src/context/AppContext.js';

const appContext = getAppContext(process.env.NODE_ENV);

appContext.createHTTPServer(appContext.createExpressApp());

const success = await appContext.createApolloServer(appContext);
if(success) {
    const { apolloServer, expressApp } = await appContext.startServer();
}



