const express=require('express');
const multer=require('multer');
const app=express();

const upload=multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb)
        {
            cb(null,"\\Users\\ADITYA BISHT\\Desktop\\Aditya Bisht\\NODEJS\\multer\\uploads")
        },
        filename:function(req,file,cb)
        {
            cb(null,file.filename+"-"+Date.now()+".jpg")
        }
    })
}).single("airdrop");

app.post("/upload",upload,(req,resp)=>{
    resp.send("file upload");
});

app.listen(5000);