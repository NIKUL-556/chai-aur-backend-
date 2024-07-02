const express = require('express');
require("dotenv").config();

const app = express();
const port = process.env.PORT;   // require

// npm i init 
// npm i express dotenv


app.get('/',(req,res)=>{
    res.send("<h1>hello world</h1>")
});

app.get('/youtube',(req,res)=>{
    res.send("<h2>this is youtube route</h2>")
})



app.listen(port,()=>{
    console.log("server is running")
})