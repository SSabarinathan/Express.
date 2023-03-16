
import express from 'express';
import cookie from 'cookie-parser';
import Cookie from 'js-cookie'

// app.use(json());
const app= express();

app.get('/set-cookie',(req, res)=>{
  res.cookie('myCookie', 'My1st-Cookie-in-Express!!');
  console.log('url is',req.url);
  console.log(req.hostname);
  // console.log(req);
  res.send('Cookie set!!');


  });

app.get('/delete-cookie',(req, res)=>{
    res.clearCookie('my-Cookie');
     res.send("Cookie deleted!!");
})

app.listen(4200,()=>{
  console.log('Running on port 4200');
})















//
