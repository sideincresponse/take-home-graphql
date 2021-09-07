import { getAppContext } from "../../context/AppContext";
import { getDataSources } from "../index";

const appContext = getAppContext(process.env.NODE_ENV);

describe('getDataSources should exist', () => {
    it('getDataSources should be a function', () => {

        expect(typeof getDataSources).toBe('function');
    });

    it('getDataSources has required functions', async () => {
        console.log('appcontext: ', appContext);
       const dsfunc = await getDataSources(appContext);
        console.log('dsfunc:', dsfunc)
       expect(typeof dsfunc).toBe('function');
       
       const sources = dsfunc();

       expect(typeof sources).toBe('object');

    });
});