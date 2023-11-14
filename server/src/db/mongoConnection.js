const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
let db;

async function connectToMongo() {
  if (db) {
    return db;
  }

  await client.connect();
  console.log('Connected to MongoDB');
  db = client.db('mydb');
  return db;
}

module.exports = connectToMongo;
