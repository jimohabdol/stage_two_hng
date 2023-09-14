import { MongoClient } from "mongodb";

const connectionString = process.env.NOSQL_URI || "";

const client = new MongoClient(connectionString, { useUnifiedTopology: true });

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("stage_two");

export default db;