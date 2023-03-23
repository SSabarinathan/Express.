import  express from "express";
import cookieParser from "cookie-parser";
const app= express();

app.use(cookieParser());

app.get('/',(req, res)=>{
  req.signedCookies.title="Sabarinathan";
  console.log(req.signedCookies.title);
  res.send(`Signed cookie is ${req.signedCookies.title}`)
})
app.listen(4200);

//
