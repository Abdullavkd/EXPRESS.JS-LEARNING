import express from 'express';
import apps from './routes/newRouterData.js'
let port = process.env.value;
let app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/',apps)



app.listen(port,() => console.log(`it is working on ${port}`))