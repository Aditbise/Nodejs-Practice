const dbconnect = require('./api');

const main=async(quary)=>{
    let data = await dbconnect();
    let result = await data.deleteOne(quary) 
    // let result = await data.deleteOne({name:'chimchar',secondform:'monferno',thirdform:'infernape'}) 
    if(result.acknowledged)
    {
        console.log("Record deleted");
    }

}
module.exports=main;