const mergeListings = async (listing, favDB) => {  
    const favoriteCount = await favDB.getFavoriteCount(listing.mlsId);
    listing.favoriteCount = favoriteCount || 0;
    return listing;
};

export const resolvers = {
    Query: {
        allListings: async (_, __, {dataSources}) => {
          const allListings = await dataSources.listingAPI.getAllListings();
          const favDB = dataSources.persistAPI.favoriteListingsDB;
          const mergedListings = await Promise.all(allListings.map((listing) => mergeListings(listing, favDB)));
          
          return mergedListings;
        },
        getListingsByCity: async (_source, { city }, { dataSources }) => {
          const filteredListings = await dataSources.listingAPI.getListingsByCity(city);
          const favDB = dataSources.persistAPI.favoriteListingsDB;
          const mergedListings = await Promise.all(filteredListings.map((listing) => mergeListings(listing, favDB)));

          return mergedListings;
        },
      },
    Mutation: {
      incrementFavorite: async (_, { listingId }, { dataSources }) => {

        const favDB = dataSources.persistAPI.favoriteListingsDB;
        const updatedListing = await favDB.incrementFavoriteCount(listingId);
        const success = updatedListing.acknowledged;

        return { success };

      },
    },
};