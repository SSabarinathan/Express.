import express from 'express';
const app= express();
const user= express();
const admin= express();


app.use('/user', user);
app.use('/admin', admin);

console.log(app.path());
console.log(user.path());
console.log(admin.path());


//it gives the canonical path for the app





















//
