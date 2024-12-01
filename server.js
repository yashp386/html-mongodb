const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const port=1212;

const app=express();
app.use(express.static(__dirname))
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb://127.0.0.1:27017/students')
const db = mongoose.connection
db.once('open',()=>{
    console.log("mongodb connected succesfully")
})

// const user = mongoose.model("data",users)

const userSchema = new mongoose.Schema({
    name:String,
    reg_no:String,
    email:String,
    branch:String,
})

const User = mongoose.model("data", userSchema);

app.get('/',(req,res)=>{
    // res.send('hi to server')  check to start server
    res.sendFile(path.join(__dirname,'form.html'))
})

app.post('/post',async (req,res)=>{
    const{reg_no,name,email,branch} = req.body
    const user = new Users({
        reg_no,
        name,
        email,
        branch,
    })
    await user.save()
    console.log(users)
    res.send("Form Submission Successfully")
})

app.listen(port,()=>{
    console.log("server started");
})