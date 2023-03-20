import express from 'express';
const app = express();
const child= express();
const parent = express();

child.on('mount', (req, res )=>{
  console.log('Child mount');
  // res.send('CHild')

})

parent.on('mount',(req, res)=>{
  console.log('Parent mount');
    // res.send('Parent')

})

app.use('/child', child);
app.use('/parent', parent);


app.listen(2222)


//
