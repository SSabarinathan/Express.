import express from 'express';

const app = express();

app.get('/',(req, res)=>{
  res.send('Welcome to serving static files!')

})

app.use(express.static('./static-files'))

app.listen(3000, ()=>{
  console.log('Running in the port 3000');
})
























//
