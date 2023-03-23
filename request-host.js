import express from 'express';
const app = express();

app.get('/host',(req, res)=>{
  const hostname = req.hostname
  console.log(hostname);

  const ip= req.ip;
  console.log(ip);

  const ips= req.ips;
  console.log(ips);
  

  const originalUrl= req.originalUrl;
  console.log(originalUrl);

  const query= req.query;
  console.log(query);

//that is true if the request’s X-Requested-With header field is “XMLHttpRequest”,
  const xhr= req.xhr;
  console.log(xhr);

//The req.secure property is a Boolean property that is true if a TLS connection is established else returns false.

  const secure= req.secure;
  console.log(secure);

  res.send('Host name is ---' +hostname )
})

app.listen(4200)



























//
