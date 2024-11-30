const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const port = 1010;

const app=express();

app.listen(port,()=>{
    console.log("server started");
})