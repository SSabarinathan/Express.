import express from 'express';
const app = express();
const user= express();//it is the sub app

user.get('/',(req, res)=>{
  res.send('Mountpath "Subpath " --- User Homepage!')
  console.log(user.mountpath);
})

app.use('/user', user)

app.listen(3333)








//
