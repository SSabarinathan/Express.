import express from 'express';
const app = express();

const users = [
  { id: 1, name: 'HTML' },
  { id: 2, name: 'CSS' },
  { id: 3, name: 'JS' }
];

app.get('/users', (req, res) => {
  res.json(users);
  console.log(users);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
