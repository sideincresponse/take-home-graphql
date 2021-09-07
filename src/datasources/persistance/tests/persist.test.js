
import { getPersistAPI } from "../persist";
import { getDBClient } from './dbClient.mock';

describe('getPersistAPI should exist', () => {

    it('getPersistAPI should be a function', () => {
        const result = getPersistAPI;
        expect(typeof result).toBe('function');
    });

    it('getPersistAPI has required functions', () => {
        const db = getDBClient({dbURI: 'fake', dbName: 'fake'});
        const {Users, FavoriteListings} = getPersistAPI();
        
        const usersDB = new Users(db);
        const favs = new FavoriteListings(db);

        console.log('usersdb: ', typeof usersDB.getUser);
        expect(favs).toHaveProperty('dbClient');
        expect(usersDB).toHaveProperty('dbClient');
        expect(typeof usersDB.getUser).toBe('function');
        expect(typeof favs.getFavoriteCount).toBe('function');
        expect(typeof favs.incrementFavoriteCount).toBe('function');
    });
});