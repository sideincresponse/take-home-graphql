
import { getListingAPI } from "./listings";

describe('ListingAPI should exist', () => {
    it('getListingAPI should return a function', () => {
        const result = getListingAPI;
        expect(typeof result).toBe('function');
    });

    it('ListingAPI has required functions', () => {
        const ListingAPI = getListingAPI('meow.com', {user: 'meow', apiToken: 'mix'});
        const listingAPIProperties = ListingAPI.prototype;
       
        expect(listingAPIProperties).toBe([
            'constructor',
            'willSendRequest',
            'getAllListings',
            'getListingsByCity',
            'listingReducer'
        ]);
    })
});