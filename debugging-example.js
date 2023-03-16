import express from 'express';
import debug from 'debug'

const app = express();

debug('Starting app...');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port =  3000;
app.listen(port, () => {
  debug(`Listening on port ${port}...`);
});

// DEBUG=express:* node index.js 
