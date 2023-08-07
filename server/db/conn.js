
const { MongoClient, ServerApiVersion } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let conn;
let userCollection;

module.exports = {
    connectToServer: async function () {
        conn = await client.connect();
    },

    getUserCollection: async function () {
        if (!userCollection) {
            userCollection = await conn.db("users").collection('users');
        }
        return userCollection;
    },
};