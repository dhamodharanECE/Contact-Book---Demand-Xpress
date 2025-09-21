const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let database;
async function getDatabase() {
    const client = await MongoClient.connect('mongodb://localhost:27017');
    database = client.db('Contact-Book');
    if (!database) {
        console.log('No database found');
    }
    return database;
}
module.exports = { getDatabase };
