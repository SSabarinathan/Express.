import express from 'express';
const app= express();

app.get('/', (req, res)=>{
  //post

  res.redirect('/redirect')
})


app.get('/redirect',(req, res)=>{
  res.send('Thank you , you are redirected!!')

})
//response type to format the content type.
app.get('/json', (req, res) =>{
  res.type('json').send({ message: 'Hello, World!' })

});

app.listen(4200)




















//
