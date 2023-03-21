import express from 'express';
const app= express();



app.get('/app',(req, res)=>{
  console.log(req);
  res.send('app')
})

app.listen(3000,()=>{
  console.log('Running successfully! ');
})


//
