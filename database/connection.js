const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);


module.exports.dbConnection = async (dbName="mydb") => {
  // Use connect method to connect to the server
  try{
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    return db;
  }catch(err){
    console.log(err);
    console.log("err in connection");
  }
}