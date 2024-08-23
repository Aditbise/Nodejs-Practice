const express = require('express');
const path = require('path');


const app = express();
const publicpath=path.join(__dirname,'public');

// app.use(express.static(publicpath));


app.set('view engine','ejs');

app.get('',(_,resp)=>
{
    resp.sendFile(`${publicpath}/index.html`);
});


app.get('/profile',(_,resp)=>
{
    const user={
        Name: 'Bro',
        Email: 'bro2130.1@gmail.com',
        City: 'Finland',
        Skill: ['js','java','c','c++','php']
    }
    resp.render('profile',{user});
});
app.get('/login',(_,resp)=>
{
    resp.render('login');
});



app.get('/about',(_,resp)=>
{
    resp.sendFile(`${publicpath}/about.html`);
});
app.get('/help',(_,resp)=>
{
    resp.sendFile(`${publicpath}/help.html`);
});
app.get('*',(_,resp)=>
{
    resp.sendFile(`${publicpath}/404.html`);
});


app.listen(5000);
