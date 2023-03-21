import express from 'express';

const app = express();
app.disable('etag');
app.disabled('etag');
console.log('we disable the etag --  ',app.disabled('etag'));                                                             //where the disables returns true or false whether we disabled the crt thing.


app.get('/data',(req, res)=>{
  console.log('We disables the entity tag to increase performance.');
  res.send('We disables the entity tag to increase performance.')
})
//I have done both enable and disable
app.enable('case sensitive routing');
console.log('we enabled the case sensitive routing--  ',app.enabled('case sensitive routing'));

app.listen(4200)

//
