import { devContext }  from './AppContext.dev.js';
import { testContext } from './AppContext.testenv.js';

// This is ultimately an AppContext factory that returns
// an instance based on the run time environment
// At the moment supporting dev and test envs
export const getAppContext = (env) => {    
    console.log('ENV IS: ', env);
    if(env === 'test') {    
        return testContext;
    }
    return devContext;
}