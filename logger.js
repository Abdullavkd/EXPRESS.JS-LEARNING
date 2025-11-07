import colors from 'colors';

let logger = (req,res,next) => {

    // we can change color of console data
    // first we want to install colors library, then want to import it to the file then we can use it.

    let allColors = {
        GET:'blue',
        POST: 'green',
        PUT: 'yellow',
        DELETE: 'red'
    }
    let color = allColors[req.method] || 'white';
    console.log(`${req.method}${req.protocol}://${req.get('host')}${req.originalUrl}`[color]);
    next();
};
export default logger;