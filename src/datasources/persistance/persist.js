// import { MongoDataSource } from 'apollo-datasource-mongodb';


// This is a function that returns a class defintion
// Went this route because of unfamiliarity with how to
// implement MongoDataSource outside of a class 
export const getPersistAPI = () => {

    // Users constructor takes a db collection 
    class Users {

        constructor(dbClient) {            
            this.dbClient = dbClient;
          }
  
        /**
         * This is a function that gets called by ApolloServer when being setup.
         * This function gets called with the datasource config including things
         * like caches and context. We'll assign this.context to the request context
         * here, so we can know about the user making requests
         */
        initialize(config) {
            this.context = config.context;
        }

        async getUser(userId) {
            const users = this.dbClient.collection('users');
            const query = { token: userId };
            const user = await users.findOne(query);
            return user;
        }
    }

    class FavoriteListings {
        
        constructor(dbClient) {            
            this.dbClient = dbClient;
        }
        /**
         * This is a function that gets called by ApolloServer when being setup.
         * This function gets called with the datasource config including things
         * like caches and context. We'll assign this.context to the request context
         * here, so we can know about the user making requests
         */
         initialize(config) {
            this.context = config.context;
        }

        async getFavoriteCount(listingId) {
            const favoriteListings = this.dbClient.collection('favorites');            
            const query = { mlsId: `${listingId}` };            
            const listing = await favoriteListings.findOne(query);

            if(listing === null || listing === 'null' || listing === {}) {                
                return 0;
            }
            return listing.favorite;
        }

        async incrementFavoriteCount(listingId) {            
            const favoriteListings = this.dbClient.collection('favorites');
            const filter = { mlsId: listingId };
            const upInc = { $inc: { favorite: 1 } };
            const options = { upsert: true };
            const result = await favoriteListings.updateOne(filter, upInc, options);
            
            return result;
        }

    }
    return { Users, FavoriteListings };
}