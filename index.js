import http from "http";
import express from 'express';

const server = http.createServer((request, respond) => {
  const url = request.url;
  if (url === "/") {
    respond.writeHead(200, { "content-type": "text/html" });
    respond.write("Sabari nathan server");

    respond.end();
  } else if (url === "/about") {
    respond.writeHead(200, { "content-type": "text/html" });
    respond.write("Welcome to about page");
        respond.end();

  } else {
    respond.writeHead(400, { "content-type": "text/html" });

    respond.write("Default page");
        respond.end();


  }
});
console.log("Server Hits");
server.listen("5000");

// process.exit(0);

//
