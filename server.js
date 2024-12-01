const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const port=1234;

const app=express();
app.use(express.static(__dirname))

mongoose.connect('mongodb://120.0.0.1:27017/students')
const db = mongoose.connection
db.once('open',()=>{
    console.log("mongodb connected succesfully")
})

new mongoose.Schema({
    name:String,
    reg_no:String,
    email:String,
    branch:string,
})

const 

app.get('/',(req,res)=>{
    // res.send('hi to server')  check to start server
    res.sendFile(path.join(__dirname,'form.html'))
})

app.listen(port,()=>{
    console.log("server started");
})