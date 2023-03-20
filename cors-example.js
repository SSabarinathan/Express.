import express from 'express';
import  cors from 'cors';

const app = express();

app.use(cors({
  origin:"http://corsss.com"
}));

app.get('/api/data', (req, res) =>{

  const data = {
    name: 'Sabarinathan',
    age: 22,
    city: 'Chennai'
  };
  res.json(data);
});

app.listen(2020, ()=> {
  console.log('Server started on port 2020');
});
