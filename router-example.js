import express from "express";
import { json } from "express";
import { nameRouter } from "./router/names.js";
import { itemsRouter } from "./router/items.js";



const app = express();
app.use(json());


app.get("/", (req, res) => {
  res.send("You are in Sabarinathan Home page!!");
});

app.use("/user", nameRouter);
app.use("/items", itemsRouter);


app.get("*", (req, res) => {
  res.send("No Page found , Please try again later.");
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});



//nodemon
