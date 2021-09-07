
import { getDBClient } from "./dbClient";

describe('dbClient should exist', () => {
    it('dbClient should return mongoClient', async () => {
        const connection = {
            dbURI: 'mongodb://127.0.0.1:27017/',
            dbName: 'properties'
        };
        const result = await getDBClient(connection);
        console.log('dbclient result: ', result.s);
        expect(typeof result).toBe('object');
    });

    // it('ListingAPI has required functions', () => {
    //     const ListingAPI = getListingAPI('meow.com', {user: 'meow', apiToken: 'mix'});
    //     const listingAPIProperties = ListingAPI.prototype;
       
    //     expect(listingAPIProperties).toBe([
    //         'constructor',
    //         'willSendRequest',
    //         'getAllListings',
    //         'getListingsByCity',
    //         'listingReducer'
    //     ]);
    // });
});