import express from 'express';
const app= express();

app.locals.title= "Sabarinathan web page!!"
app.locals.email= "sabarinathan@gmail.com"
app.locals.role= "Web developing!"

console.log(app.locals.title);
console.log(app.locals.email);
console.log(app.locals.role);



//
