import express from 'express';
const app= express();

app.all('*', (req, res, next)=>{
  console.log('The request method is '+ req.method+ ' was made to the path '+ req.path);
  next();
})

app.get('/',(req, res)=>{
  res.send('Welcome to homepage!!')
})

app.get('/user', (req, res)=>{
  res.send('User page welcomes you!!')
})

app.listen(4200,()=>{
  console.log('Running on the port 4200');
})








//
