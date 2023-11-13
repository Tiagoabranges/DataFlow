const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function connectToMongo() {
  await client.connect();
  console.log("Connected to MongoDB");
  return client.db("mydb");
}

module.exports = connectToMongo;
