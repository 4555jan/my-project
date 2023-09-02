const MongoClient = require('mongodb').MongoClient;
const assert =require('assert');

const url = "mongodb://127.0.0.1:27017";


const dbName = 'fruitsDB';
const client = new MongoClient(url);

client.connect(function(err){
    assert.equal(null , err);
    console.log("connected to server ");
    const db  = client.db(dbName);

    client.close();
});


