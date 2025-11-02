import express from "express";

let app = express();

app.get('/',(req,res) => {
    res.send("<a>Click Me!!!</a>")
})

app.listen(3000,() => console.log("Server is Running On Port : 3000"));