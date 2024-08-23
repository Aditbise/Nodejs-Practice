const {MongoClient} = require('mongodb');
const url =  'mongodb://0.0.0.0:27017';
const database='pokemon';
const client =new MongoClient(url);

async function dbconnect(){
    try{
        let result= await client.connect();
        const db=result.db(database);
        return db.collection('fire');
    }
    catch(error)
    {
        console.error('Error:',error);
    }
}
module.exports = dbconnect;