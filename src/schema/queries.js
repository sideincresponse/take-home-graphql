// import { gql } from 'apollo-server';

export const queries = `
    type Query {
        allListings: [Listing]!
        getListingsByCity(city: String): [Listing]!
        listing(id: ID): Listing
    }
`;