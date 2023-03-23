import  express  from "express";
const app = express();

app.get('/', (req, res)=>{
   res.append('Warning', '201 Warning');
    console.log(res.get('Warning'));
    res.send('Data appended!')
})

app.listen(4200)



//
