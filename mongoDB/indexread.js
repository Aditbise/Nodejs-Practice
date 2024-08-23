const dbconnect=require('./api');

const main=async (query)=>{
    let data=await dbconnect();
    data=await data.find(query).toArray();
    console.warn(data);
}
module.exports=main;
