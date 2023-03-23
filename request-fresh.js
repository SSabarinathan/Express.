import express from 'express';

const app = express();

app.get('/resource', (req, res) => {
  console.log(req.fresh);
    res.send('sd');

});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});



//The req.fresh method checks the request headers to determine if the client's cache is up-to-date or not.
// If the cache is fresh, req.fresh returns true, otherwise it returns false.
