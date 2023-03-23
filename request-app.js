import express from 'express';
const app= express();

app.set('title', 'This is my express app!')

app.get('/',(req, res)=>{
  const title= req.app.get('title');
  res.send(title)
})

app.listen(3000,()=>{
  console.log('Running successfully! ');
})


//
