
import { getDBClient } from "../dbClient";

describe('dbClient should exist', () => {

    //This will fail of course if you don't have mongo running locally 
    // *facepalm*
    it('dbClient should return mongoClient ** IF MONGO IS RUNNING **', async () => {
        const connection = {
            dbURI: 'mongodb://127.0.0.1:27017/',
            dbName: 'properties'
        };
        const result = await getDBClient(connection);

        expect(typeof result).toBe('object');
        expect(result.s).toHaveProperty('client')

    });

    it('dbClient should error without connection info', async () => {
        const connection = {
            dbURI: '',
            dbName: ''
        };
        const result = await getDBClient(connection);

        expect(result).toBe(false);
    });
    
});