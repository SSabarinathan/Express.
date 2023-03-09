import express from 'express';

const router = express();

router.get('/items',(req, res)=>{
  res.send('You are in item page!!')
});

router.listen(3000)



//
