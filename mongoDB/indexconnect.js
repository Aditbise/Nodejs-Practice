const {MongoClient} = require('mongodb');
const url =  'mongodb://0.0.0.0:27017';
const database='pokemon';
const client =new MongoClient(url);
async function getData()
{
    try{
        let result= await client.connect();
        let db=result.db(database);
        let collection=db.collection('fire');
        let data=await collection.find({}).toArray()
        console.log(data);
    }
    catch(error)
    {
        console.error('Error:',error);
    }
    finally{
        await client.close();
    }
}
getData();
