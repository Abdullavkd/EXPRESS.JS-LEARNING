import express from 'express';
import apps from './routes/newRouterData.js';
import logger from './logger.js';
import error from './errorHandler.js';
import {fileURLToPath} from 'url';
import path from 'path';

let port = process.env.value;
let app = express();

// create dirname and file name
let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Logger Middleware
app.use(logger);

// status static folder
// it is used to work any another static file in this file without any other middleware action and anything. 
// now, if we call localhost:2900/contact.html, the html file named contact.html inside public folder will work.
app.use(express.static(path.join(__dirname,'public')))

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