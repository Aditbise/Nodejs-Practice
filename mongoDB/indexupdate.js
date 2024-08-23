const dbconnect = require('./api');

const main= async (query,update)=>{
    let data = await dbconnect();
    // let result1 = await data.updateOne(
    //     {name:'chimchar'},{ $set: {name:'tepig'} }
        
    // );
    // let result2 = await data.updateOne(
    //     {secondform:'monferno'},{ $set: {secondform:'pignite'} }
        
    // );
    // let result3 = await data.updateOne(
    //     {thirdform:'infernape'},{ $set: {thirdform:'emboar'} }
        
    // );
    let result = await data.updateOne(query,{$set:update});
    // console.warn(result1);
    // console.warn(result2);
    console.warn(result);
}
module.exports=main;