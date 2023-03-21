import express from 'express';
const app= express();

app.set('port', 3000)
app.set('title', 'Keep going !! Dont stop!! ')

app.get('/',(req, res)=>{
  res.send(app.get('title'));
})

app.listen(app.get('port'))















//
