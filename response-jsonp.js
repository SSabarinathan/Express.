import express from 'express';
const app = express();

app.get('/api/data', (req, res) => {
  const data = { message: 'Hello, world!' };
  res.jsonp(data);

  console.log(data);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
