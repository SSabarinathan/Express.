import express from 'express';
const app= express();

app.param('id', (req, res, next, id)=>{
  const users= [
    {id:1, name:"HTML"},
    {id:2, name:"CSS"},
    {id:3, name:"Express"},
    {id:4, name:"NodeJS"},
    {id:5, name:"Angular"}
  ];
  const user= users.find( user=>user.id ===parseInt(id));
  if(!user){
    return res.status(404).send('User not found!')
  }
  req.particularUser= user;
  next();
})

app.get('/users/:id',(req, res)=>{
  const user= req.particularUser;
  res.send(`Hello, thanks for choosing domain:-->  |${ user.name}|`)
})

app.listen(4200)








//
