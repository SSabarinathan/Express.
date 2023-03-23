
//doubt on this cookie request
import express from 'express';
import cookieParser from 'cookie-parser';
const app= express();
app.use(cookieParser());


app.get('/', (req, res)=>{
  const cookieName= 'PersonalCookie';
  const cookieValue= 'MyPersonalValueOfCookie';
  res.cookie(cookieName, cookieValue)
  res.send('Cookie Set!! You can view ')
})

app.get('/read', (req, res)=>{
  const cookieName= 'Another Cookie Set!'
  res.cookie(cookieName, 'NewValue')
  const cookieValue= req.cookies[cookieName];
  // console.log(cookieValue);
  if(cookieValue){
    res.send(`Your cookie name is ${cookieName} and the value is ${cookieValue}`)
    console.log((`Your cookie name is ${cookieName} and the value is ${cookieValue}`));
  }
  else{
    res.send('Cookie not found!')
  }
})

app.listen(4200,()=>{
  console.log('Cookie running successfully!!');
})






















//
