import express from 'express';

const routing = express();

routing.get('/', (request, response)=>{
  response.send('Welcome to Sabarinathan server!!');

});

routing.get('/read-users',(request, response)=>{
  const userObject= {
    id: 10,
    name: "Preethi",
    lastName: "Sabarinathan",
    status: true
    }
  response.send(userObject)
})


routing.get('*',(request, response)=>{
  response.send('Sorry, No page available!')
})


routing.listen(4200,()=>{
  console.log('Your server is running on port number 4200');
})












































//
