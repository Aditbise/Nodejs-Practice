const express = require('express');
const app=express(); 
require('./api');
const product=require('./indexschema');

app.use(express.json());

app.post("/create",async (req,resp)=>{
    let data = new product(req.body);
    let result = await data.save();
    console.log(result+"\nAdded to db");
    resp.send(data);
});

app.get("/list",async (req,resp)=>{
    let data=await product.find();
    resp.send(data);
});

app.delete("/delete/:_id",async (req,resp)=>{
    console.log(req.params);
    let data=await product.deleteOne(req.params);
    resp.send(data);
});

app.put("/update/:_id",async (req,resp)=>{
    console.log(req.params);
    let data=await product.updateOne(
        req.params,
        {$set:req.body}
    );
    resp.send(data);
});

//for searching
app.get("/search/:key",async (req,resp)=>{
    let data=await product.find(
        {
            "$or":
            [
                {"name":{$regex:req.params.key}},
                {"taste":{$regex:req.params.key}}
            ]
        }
    );
    resp.send(data);
    console.log(req.params.key);
});



app.listen(5000);
