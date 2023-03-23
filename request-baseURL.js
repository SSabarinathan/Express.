import express from 'express';
const app = express();
const user= express();//it is the sub app

user.get('/',(req, res)=>{
  res.send('Mountpath "Subpath " --- User Homepage!')
  console.log(user.mountpath);
})

user.get('/inneruser/into',(req, res)=>{
  const result = req.baseUrl;
  console.log(result);
  res.send('Mountpath "Subpath " --- User Innerpage!')
  console.log(user.mountpath);
})
// http://localhost:3333/user/inneruser/into


app.use('/user', user)//it is the mount used

app.listen(3333)
