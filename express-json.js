import express from 'express';
const app = express();

app.use(express.json());


app.post('/add',(req, res)=>{
  console.log(req.body);
})

app.listen(4201, ()=>{
  console.log('Server starts!');
})

//
