
const seedUsers = (db, callback) => {
    const userCollection = db.collection('users');
    userCollection.insertMany([{
        "email": "user1@sideinc.com",
        "token": "676cfd34-e706-4cce-87ca-97f947c43bd4",
    }, {
        "email": "user2@sideinc.com",
        "token": "2f403433-ba0b-4ce9-be02-d1cf4ad6f453",
    }], function(err, result) {
        callback(err, result);
    });
};

export const startDB = async (dbServer) => {
    const mongod = new dbServer({
        instance: {
            port: 27017,
            ip: '127.0.0.1',
            dbName: 'properties'
        }
    });
    const uri = await mongod.getUri();
    const port = await mongod.getPort();
    const dbPath = await mongod.getDbPath();
    const dbName = await mongod.getDbName();

    console.log(`Database uri: ${uri}`);
    console.log(`Database running on port: ${port}`);
    console.log(`Database Name: ${dbName}`);
    console.log(`Local DB Storage path ${dbPath}`);

    const mongoClient = require('mongodb').MongoClient;
    mongoClient.connect(uri, function(err, client) {
        const db = client.db(dbName);
        seedUsers(db, function(err, result) {
            if(err) throw new Error("Error seeding");
            console.log("Seeded the following users into users collection: ", result.ops);
            client.close();
        });
    });
    return mongoClient;
};

