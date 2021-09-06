import { devContext }  from './AppContext.dev.js';
import { testContext } from './AppContext.test.js';

export const getAppContext = (env) => {
    if(env === 'test') {
        return testContext;
    }
    return devContext;
}