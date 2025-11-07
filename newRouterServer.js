import express from 'express';
import apps from './routes/newRouterData.js';
import logger from './logger.js';
import error from './errorHandler.js';
let port = process.env.value;
let app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Logger Middleware
app.use(logger);

app.use('/',apps);


// if there give a url that doesn't exist, normally the result will be automatically an html file with error
// we can change it and make specific comment
app.use((req,res,next) => {
    let err = new Error("TThis Link is Currently Unavailable...!");
    err.status = 404;
    next(err);
});

app.use(error);


app.listen(port,() => console.log(`it is working on ${port}`));