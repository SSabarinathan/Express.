import express from 'express';

export const itemsRouter = express.Router();



itemsRouter.get('/',(req, res)=>{
  res.send('Hello items page!!')
});

itemsRouter.get('/item',(req, res)=>{
  res.send('You are in items page!!')
});

itemsRouter.get ('/particularItem', (req, res)=>{
  res.send('Your particular page is loading !!')
})



//
