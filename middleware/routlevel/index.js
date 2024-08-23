const express=require('express');
const reqFilter =require('./middleware');
const app=express();
const route=express.Router();


// app.use(reqFilter);

route.use(reqFilter);
app.get('/',(req,resp)=>{
    resp.send('Greetings! this is Home page');
})
app.get('/users',(req,resp)=>{
    resp.send('Greetings! this is Users page');
})
route.get('/about',(req,resp)=>{
    resp.send('Greetings! this is About page');
})
route.get('/contact',(req,resp)=>{
    resp.send('Greetings! this is Contact page');
})

app.use('/',route);
app.listen(5000);