import express from "express";
import multer from "multer";
//for getting image
// const upload = multer({ dest: "upload/" });

//for getting full control......
const storage = multer.diskStorage({
  destination:(req, file , cb)=>{
    return cb(null, './uploads')
  },
  filename:(req, file, cb)=>{
    return cb(null, `${Date.now()}-${file.originalname}`)
  }
});
const upload= multer({storage: storage})


const app = express();
const port = 4200;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("fileUpload");
});

app.post("/upload", upload.single("profileImage"), (req, res) => {
  console.log(req.body);
  console.log(req.file);

  res.send("File upload successfully");
  return res.redirect("/");
});

app.listen(port,()=>{
  console.log(`Running on port ${port}`);
});

//
