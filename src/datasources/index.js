import { getListingAPI } from './api/listings.js';
import { getPersistAPI } from './persistance/persist.js';

export const getDataSources = async (appContext) => {
    const { propertyApiURI, propertyAPIcreds } = appContext.getConfig();
    const dbClient = await appContext.getDBClient();    
    const ListingAPI = getListingAPI(propertyApiURI, propertyAPIcreds);
    const {Users, FavoriteListings} = getPersistAPI();

    //return a function that returns an object that insantiates datasource classes
    const dsFunc = () => {
        // console.log('dsFunc dbClient: ', dbClient);
        return { 
            listingAPI: new ListingAPI(), 
            persistAPI: { 
                usersDB: new Users(dbClient),
                favoriteListingsDB: new FavoriteListings(dbClient),
            },
        };
    };
    return dsFunc;

}