const mergeListings = () => {  
    const listing = {favoriteCount: 1, mlsId: 1213123 };
    return listing;
};

export const resolvers = {
    Query: {
        allListings: (_, __, {dataSources}) => {
          const merge = mergeListing();
          const mergedListings = [merge];
          return mergedListings;
        },
        getListingsByCity: (_source, { city }, { dataSources }) => {
            const merge = mergeListing();
            const mergedListings = [merge];
            return mergedListings;
        },
      },
    Mutation: {
        incrementFavorite: (_, { listingId }, { dataSources }) => {

        const success = true;

        return { success };

      },
    },
};