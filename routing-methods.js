import express from 'express';
import fs from 'fs';
import { json } from "express";



let app= express();
app.use(json());


let movies = JSON.parse(fs.readFileSync('./router/movies.json'))

//GET--router->movies.json
app.get('/movies',(req, res)=>{
  res.json({
    status: "success",
    count : movies.length,
    data: {
      movies: movies
    }
  });
});

//POST--router->movies.json
app.post('/movies',(req, res)=>{
  // console.log(req.body);

  const newID = movies[movies.length-1].id + 1;
  const newMovie= ({id:newID, ...req.body})
  // const newMovie= Object.assign({id:newID}, req.body)
  movies.push(newMovie);
  fs.writeFile('./router/movies.json', JSON.stringify(movies), (err)=>{
    res.status(201).json({
      status: "success",
      data:{
        movies:newMovie

      }
    })
  })
})

//query params(route parameter) -- for identify the specific portion
//need to route parameter as optional we need to add ?question mark at the end of param eg: /:id?/:name
app.get('/movies/:id',(req, res)=>{
  // const id = (req.params.id*1);
    const id = number(req.params.id);


  console.log(id);

})




app.listen(2000, ()=>{
console.log('Server starts!');
})



























//
