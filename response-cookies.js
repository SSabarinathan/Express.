import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.cookie('username', 'john', { maxAge: 1000});
  res.send('Cookie set!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});


