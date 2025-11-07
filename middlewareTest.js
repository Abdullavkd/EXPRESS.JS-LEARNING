import express from 'express';

let app = express();

app.use((req,res,next) => {
    console.log({common: "It is the test of use"})
    next()
})

app.get('/',(req,res,next) => {
    console.log({test: "it is first test"})
    next()
})

app.get('/',(req,res) => {
    res.json({know: "it is the second test"})
})

app.listen(3400,() => {
    console.log("started")
})