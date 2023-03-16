import express from 'express';
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/',(req, res)=>{
  res.render('index',
  {
    Name: "Sabarinathan",
    Role: "Web developing"
  //we can pass the data through the variable name here like  Name , Role and calling the variable name assigned
  //to the tags presented there . #Data passing.
  })
})

app.listen(4200,()=>{
  console.log('Template engine runs');
});













//
