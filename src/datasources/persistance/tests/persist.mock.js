export const getPersistAPI = () => {
    const store = {};
    const persistAPI = {
       Users: {
           getUsers: (userId) => {
            return {email: 'meow@meow.com', token: 'meowmeowmeow'};
           },
       },
       FavoriteListings: {
            getFavoriteCount: (listingId) => {
                return store[listingId].favoriteCount;
            },
            incrementFavoriteCount: (listingId) => {
                if(store[listingId])
                {
                    store[listingId].favoritecount++;
                }
                store[listingId].favoritecount = 1
                return true;
            }
       }
    };
     
    return persistAPI;
 };
 