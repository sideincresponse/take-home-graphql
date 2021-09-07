import { getAppContext } from '../../context/AppContext.js';
import {createApolloServer, getApolloContext, startApolloServer} from '../apollo.js';
const appContext = getAppContext(process.env.NODE_ENV);
describe('apollo server ', ()=> {   
    it('should be called with certain variables', ()=> {
        const result = createApolloServer(appContext);
        expect(result);
    });
});