import btoa from 'btoa';
import { RESTDataSource } from 'apollo-datasource-rest';

// This is a function that returns a class defintion
// Went this route because of unfamiliarity with how to
// implement RESTDataSource outside of a class as well as supporting
// a more flexible pattern for dependency injection
export const getListingAPI = (baseUrl, apiCreds) => {
   
    class ListingAPI extends RESTDataSource {
        constructor() {            
          super();          
          this.baseURL = baseUrl;
          this.apiCredsStr = `${apiCreds.user}:${apiCreds.apiToken}`;
        }

        // this intercepts the get request, and adds auth headers
        willSendRequest(request) {
            if(!request.headers) {
                request.headers = {};
            }
            const encoded = btoa(this.apiCredsStr);  
            request.headers.set('Authorization', `Basic ${encoded}`);
        }

        async getAllListings() {
            try {
                const response = await this.get('properties');
                return Array.isArray(response)
                    ? response.map(listing => this.listingReducer(listing)) : [];
            } catch (awaitErr) {
                // should return semantic apollo error
                console.log('getAllListings Error: ', awaitErr);
                return [];
            }
        }

        async getListingsByCity(city) {
            // https://api.simplyrets.com/properties?q=Houston
            try {
                const response = await this.get(`properties?q=${city}`);
                
                // this is necessary because simplyrets ?q is a text search not a field search
                const filteredProperties = Array.isArray(response)
                ? response.filter((listing)=>{
                    if(listing.address.city.toUpperCase() === city.toUpperCase()) {
                        return true;
                    }
                }) 
                : [];

                const listings = filteredProperties.map(listing => this.listingReducer(listing));

                return listings;
            } catch (awaitErr) {
                // Should return semantic apollo error
                console.log('getListingsByCity Error: ', awaitErr);
                
                return [];
            }
        }

        listingReducer (listing) {
            // inject favorite count

            return listing;
        }
    }

    return ListingAPI;
};
