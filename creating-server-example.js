import Express from 'express';
const express = Express();

express.get('/', (request, respond)=>{

  respond.send('Sabarinathan Server!!')
})
express.listen(3003,()=>{
  console.log('Working on port 3000');
})





























//
