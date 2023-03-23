import express from 'express';
const app = express();

app.get('/', (req, res)=>{
  const fileName= 'example.txt';
  const fileContents= 'File having more example!'

  res.attachment(fileName)
  res.send(fileContents)
})
//the file got downloaded

app.listen(4200)






















//
