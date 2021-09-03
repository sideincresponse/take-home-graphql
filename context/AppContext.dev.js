import { MongoMemoryServer } from 'mongodb-memory-server';
import {startDB} from '../boundaries/persistance/database.js';

const dbClient = startDB(MongoMemoryServer);

export const devContext = {

    databaseClient: dbClient,
};