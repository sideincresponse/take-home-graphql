import { MongoClient } from 'mongodb';

export const getDBClient = async ({dbURI, dbName}) => {
    try {        
        const client = new MongoClient(dbURI);
        await client.connect()
        // console.log('client: ', client);

        const db = client.db(dbName);        
        return db;
    } catch (err) {
        console.log('Error creating Mongo DB client: ', err);
        return false;
    }    
};