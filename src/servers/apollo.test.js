import { getAppContext } from '../context/AppContext.js';
import {createApolloServer, getApolloContext, startApolloServer} from './apollo.js';
const appContext = getAppContext(process.env.NODE_ENV);
describe('apollo server ', ()=> {
    beforeEach(() => {
        // Clear all instances and calls to constructor and all methods:
        // startApolloServer = (params) => {
        //     console.log('this is a mock startApolloServer');
        // };

        
      });
    it('should be called with certain variables', ()=> {
        const result = createApolloServer(appContext);
        expect(result);
    });
});