import express from "express";
import fs from "fs";
import { json } from "express";

const logger= function(req, res, next){
  console.log('Middleware');
  next();
}
let app = express();//express() function is a top-level function exported by the express module.
app.use(json());
app.use(logger);
// app.use(express.json())


let movies = JSON.parse(fs.readFileSync("./router/movies.json"));


//GET--router->movies.json////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get("/movies", (req, res) => {
  res.json({
    status: "success",
    count: movies.length,
    data: {
      movies: movies,
    },
  });
});

//POST--router->movies.json///////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.post("/movies", (req, res) => {
  // console.log(req.body);

  const newID = movies[movies.length - 1].id + 1;
  const newMovie = { id: newID, ...req.body };
  // const newMovie= Object.assign({id:newID}, req.body)
  movies.push(newMovie);
  fs.writeFile("./router/movies.json", JSON.stringify(movies), (err) => {
    res.status(201).json({
      status: "success",
      data: {
        movies: newMovie,
      },
    });
  });
});

//query params(route parameter) -- for identify the specific portion/////////////////////////////////////////////////////////////////////////////////
//need to route parameter as optional we need to add ?question mark at the end of param eg: /:id?/:name
app.get("/movies/:id", (req, res) => {
  // const id = req.params.id * 1;
  // console.log(req.params);
  const id = req.params.id*1 ;
  let movie = movies.find(el=>el.id===id);
  if(!movie){
     return  res.status(404).json({
      status: "fail",
      message: "Movie with the id" +id+ "is not found"
    })
  }

  res.status(200).json({
    status: "success",
    data: {
      movie: movie
    }
  })
  });


//PATCH and PUT- request///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.put('/movies/:id',(req, res)=>{
  let id = req.params.id * 1;
  let movieToUpdate = movies.find(el=> el.id===id);

  if(!movieToUpdate){
    return res.status(404).json({
      status: 'fail',
      message: 'No movie subject with the id '+id+ ' is found.'
    })
  }
  let index= movies.indexOf(movieToUpdate);
  Object.assign(movieToUpdate, req.body);
  movies[index]= movieToUpdate;

  fs.writeFile('./router/movies.json', JSON.stringify(movies),()=>{
    res.status(200).json({
      status: "success",
      data: {
        movie: movieToUpdate,
      },
    });
  });

} )

//DELETE - request //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.delete('/movies/:id',(req, res)=>{
  const id = +req.params.id ; // for changing string into numeric type
  const movieToDelete= movies.find(el=> el.id ===id);
  const index= movies.indexOf(movieToDelete);

  movies.splice(index, 1);

  fs.writeFile('./router/movies.json', JSON.stringify(movies),()=>{
    res.status(204).json({
      status: "success",
      data: {
        movie: null,
      },
    });
  });



})






app.listen(2000, () => {
  console.log("Server starts!");
});


