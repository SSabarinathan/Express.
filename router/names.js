import express from 'express';

const router = express();

router.get('/namelist',(req, res)=>{
  res.send('You are in namelist page!!')
});

router.listen(3000)

