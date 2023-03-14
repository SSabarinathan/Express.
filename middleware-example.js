import express from "express";

const app = express();
app.use(logger);
// app.use(exit);


app.get("/", (req, res) => {
  res.send("Welcome to middleware page!");
  console.log("1st");
});

app.use(exit);
app.get("/next", (req, res) => {
  res.send("Next page of middleware.");
  console.log("2nd");
});

function logger(req, res, next) {
  console.log("Welcome .");
  next();
}

function exit(req, res, next) {
  console.log("Exit..");
  next();
}

app.listen("4200");

//
