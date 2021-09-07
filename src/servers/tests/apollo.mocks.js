

export const startApolloServer = async (apolloConfig) => {
    const apolloServer = () => {
        console.log('this is a fake apollo server');
    };

    return apolloServer;
};

export const createApolloServer = async (appContext) => {
    return await startApolloServer();

}

export const getApolloContext = async(appContext) => {
    console.log('mocked getApolloContext');

    const getUserFromReq = (context) => {
        const user = { email: 'meow@meow.com', token: '23lk23lkj32lkj'};
        
        return { user };
    };

    return getUserFromReq;
};