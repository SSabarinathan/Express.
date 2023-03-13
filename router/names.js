import express from "express";

export const nameRouter = express.Router();

nameRouter.get("/", (req, res) => {
  res.send("Hello all!!");
});

nameRouter.get("/names", (req, res) => {
  res.send("You are in names page!! ");
});

nameRouter.get("/names/:name", (req, res) => {
  res.send(" Dynamic url is  " + req.params.name);
});

nameRouter.get("/id/:num", (req, res) => {
  res.send("User id is " + req.params.num );
});

nameRouter.post("/postData", (req, res) => {
  res.send(req.body);
  console.log(req.body);
});

nameRouter.put("/put", (req, res) => {
  res.send("Data updated by using put method!");
});
