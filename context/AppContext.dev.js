import { MongoMemoryServer } from 'mongodb-memory-server';
import axios from 'axios';
import { MongoClient } from 'mongodb';
import { propertyAPI } from '../boundaries/api/properties.js';


const config = {
    dbURI: 'mongodb://127.0.0.1:27017/',
    propertyApiURI: 'https://api.simplyrets.com/properties',
    apiUser: 'simplyrets',
    apiToken: 'simplyrets',
};



export const devContext = {

    databaseClient: MongoClient,
    getDBConnection: () => {
        let dbClient;
        MongoClient.connect(config.dbURI, function(err, client) { 
            dbClient = client;
        });
        return dbClient;
    },

    getProperties: () => {
        return propertyAPI.getProperties({http: axios, config})
    }

};