
import { resolvers } from "../index";

describe('resolvers should exist', () => {
    it('resolvers should be a function', () => {

        expect(typeof resolvers).toBe('object');
    });

    it('resolvers has required functions', () => {
        const { allListings, getListingsByCity } = resolvers.Query;
        const { incrementFavorite } = resolvers.Mutation;
        
        expect(typeof allListings).toBe('function');
        expect(typeof getListingsByCity).toBe('function');
        expect(typeof incrementFavorite).toBe('function');
    });
});