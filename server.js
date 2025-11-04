// import express from "express";
// import path from "path";

// commonjs Method
const express = require('express');
const path = require('path');

let app = express();

app.get('/about',(req,res) => {
    res.send("This is about session")
})
app.get('/',(req,res) => {
    res.send("<a>Click Me!!!</a>")
})
app.get('/welcome',(req,res) => {
    res.sendFile(path.join(__dirname,'public','welcome.html'));
})
app.get('/contact',(req,res) => {
    res.sendFile(path.join(__dirname,'public','contact.html'))
})

app.listen(3000,() => console.log("Server is Running On Port : 3000"));