import express from "express";
const app = express();
const child = express();
const parent = express();
const subApp = express();

subApp.get("/", (req, res) => {
  res.send("sub app");
  console.log("It is the sub app");
});

app.use("/sub", subApp);

child.on("mount", () => {
  console.log("Child mount");
  console.log(child.mountpath);
});

parent.on("mount", () => {
  console.log("Parent mount");
  console.log(parent.mountpath);
});

app.use("/child", child);
app.use("/parent", parent);

app.listen(3000);

//
