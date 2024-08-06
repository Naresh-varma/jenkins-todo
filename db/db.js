
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://dongarinaresh13:FTqHFs24tNF5aKSk@cluster0.14xvng6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const getMongoClient = (async function () {
    let mongoClient;
    const connectToMongo = async () => {
        if (mongoClient) return mongoClient;
        mongoClient = new MongoClient(uri);
        try {
            await mongoClient.connect();
            return mongoClient;
        } catch (err) {
            throw (err);
        }
    };
    if (!mongoClient) mongoClient = await connectToMongo();
    return mongoClient;
}());

async function getCollection(colName, dbName = 'HighLevel') {
    const client = await getMongoClient;
    const col = await client.db(dbName).collection(colName);
    return col;
}



module.exports = {
    getMongoClient,
    getCollection,
};
