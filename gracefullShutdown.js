import express from 'express';
const app = express();


app.get('/',(req, res)=>{

process.on('SIGINT', () => {
  console.log('Received SIGINT. Shutting down server...');
  server.close(() => {
    res.send('sdv')
    console.log('Server gracefully shut down');
    process.exit(0);
  });
});

})

// process.on('SIGTERM', () => {
//   console.log('Received SIGTERM. Shutting down server...');
//   server.close(() => {
//     console.log('Server gracefully shut down');
//     process.exit(0);
//   });
// });


  const server = app.listen(4200, () => {
    console.log('Server listening on port 3000');
  });
