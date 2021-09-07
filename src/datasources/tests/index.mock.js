import { getListingAPI } from '../api/tests/listings.mock.js';
import { getPersistAPI } from '../persistance/tests/persist.mock.js';

export const getDataSources = async (appContext) => {
    const ListingAPI = getListingAPI(propertyApiURI, propertyAPIcreds);
    const {Users, FavoriteListings} = getPersistAPI();
    
    const dsFunc = () => {        
        return { 
            listingAPI: ListingAPI, 
            persistAPI: { 
                usersDB: Users,
                favoriteListingsDB: FavoriteListings,
            },
        };
    };
    return dsFunc;

}