const mongoose = require('mongoose');
const main=async()=>{
    await mongoose.connect("mongodb://localhost:27017/mongoose");
    const productschema=new mongoose.Schema({
        name:String,
        taste:String
    });
    const productmodel=new mongoose.model('m1',productschema);
    let data=new productmodel({
        name:"banana",
        taste:"sweet"
    });
    let result=await data.save();
    console.log(result);
}
main();
