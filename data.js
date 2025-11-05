import express from "express";
import path from 'path';
import posts from "./routes/posts.js";
const port = process.env.topper;
const app = express();


// Router
app.use('/products',posts);









app.listen(port,() => console.log(`IT IS RUNNING ON ${port}`));