const express=require("express");
const eventemitter=require("events");
const app=express();
const event =new eventemitter();

let count=0;


event.on("push",()=>{
    count++;
    console.log("event count : "+count);
});

app.get("/",(req,resp)=>{
    resp.send("api called");
    event.emit("push");
});
app.get("/search",(req,resp)=>{
    resp.send("search api called");
    event.emit("push");
});
app.get("/update",(req,resp)=>{
    resp.send("update api called");
    event.emit("push");
});
app.listen(5000);