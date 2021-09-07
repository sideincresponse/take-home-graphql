export const getListingAPI = (baseUrl, apiCreds) => {
   const ListingAPI = {
       willSendRequest: () => {
            return true;
       },
       getAllListings: () => {
            return [{mlsId: 13413}, {mlsId: 49493}];
       },
       getListingsByCity: (city) => {
            return [{mlsId: 13413}, {mlsId: 49493}];
       }
   };
    
    return ListingAPI;
};
