const express = require ('express');
const app = express();
app.get('',(req,resp)=>{
    console.log("this is your request query : "+req.query.show);

    resp.send(`<h1>Welcome to, this is Home Page<h1>
        <a href='/about'>go to about tab</a>
        <a href='/help'>go to help tab</a>`);
    
});

app.get('/about',(req,resp)=>{
    resp.send(`<h1>Welcome to, this is About Page<h1>
               <input type='text' placeholder="user name" value=${req.query.name}> `);
});

app.get('/help',(req,resp)=>{
    resp.send("Welcome to, this is Help Page");
});

app.listen(5000);