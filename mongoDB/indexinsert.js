const dbconnect = require('./api');

const main=async (document)=>{
    const db=await dbconnect();

    const result=await db.insertOne(document);
    // const result=await db.insertOne(
    //     {name:'chimchar',secondform:'monferno',thirdform:'infernape'}
    // );
    console.log(result);
}
module.exports=main;