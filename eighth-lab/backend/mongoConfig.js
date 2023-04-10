const { MongoClient } = require('mongodb');

const connectionString = process.env.MONGODB_URI || "";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db(process.env.DB_NAME);

export default db;
