module.exports= reqFilter=(req,resp,next)=>{
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