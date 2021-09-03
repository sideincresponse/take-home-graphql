// https://api.simplyrets.com/properties

export const propertyAPI = {
    getProperties: ({http, config}) => {
        
        const { propertyApiURI,
                apiUser,
                apiToken,
            } = config;
         
        //returns a promise   
        return http.get({url: propertyApiURI, method: 'get', auth: { username: apiUser, token: apiToken } });
    },
}