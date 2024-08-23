const express=require('express');
const app=express();

const reqFilter=(req,resp,next)=>{
    if(!req.query.age)
        {
            resp.send("please provide age");
        }
    else if(req.query.age<=18)
    {
        resp.send("User must be older than 18 ");
    }
    else
    {
        next();
    }
}
app.use(reqFilter);
app.get('/',(req,resp)=>{
    resp.send('Greetings! this is Home page');
})
app.get('/users',(req,resp)=>{
    resp.send('Greetings! this is Users page');
})
app.listen(5000);