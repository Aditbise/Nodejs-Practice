const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    name:String,
    taste:String
})
module.exports=mongoose.model('product',productSchema,'product');
