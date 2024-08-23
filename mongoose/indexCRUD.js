const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/mongoose");
    const productschema=new mongoose.Schema({
        name:String,
        taste:String
    });

const saveInDB = async ()=>{
    const productmodel=new mongoose.model('product',productschema,'product');
    let data=new productmodel({
        name:"banana",
        taste:"sweet"
    });
    let result=await data.save();
    console.log(result);
}

const updateInDB = async ()=>{
    const product = mongoose.model('product',productschema,'product');
    let data = await product.updateOne(
        {
            name:"banana"
        },
        {
            $set:{name:"apple",taste:"sweet"}
        }
    );
    console.log(data);
    
}
const deleteInDB = async ()=>{
    const product = mongoose.model('product',productschema,'product');
    let data = await product.deleteOne(
        {
            name:"banana"
        }
    );
    console.log(data);
}
const findInDB = async ()=>{
    const product = mongoose.model('product',productschema,'product');
    let data = await product.find(
        {
            name:"banana"
        }
    );
    console.log(data);
}


// saveInDB();
// deleteInDB();
findInDB();