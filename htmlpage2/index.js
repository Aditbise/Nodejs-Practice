const express = require('express');
const path = require('path');


const app = express();
const publicpath=path.join(__dirname,'public');

// app.use(express.static(publicpath));

app.get('',(_,resp)=>
{
    resp.sendFile(`${publicpath}/index.html`);
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
