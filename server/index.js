//Import express
const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

const db = require('./config/database');
 db.authenticate()
     .then(() => console.log('DB connected'))
     .catch( error => console.log('error')); 

//Configure Express
const app = express();

//enable pug
app.set('view engine', 'pug');

//Add views
app.set('views', path.join(__dirname, './views'));

//Load public folder
app.use(express.static('public'));

// Show current year and current route
app.use((req, res, next) => {
    const date = new Date();
    res.locals.currentDate = date.getFullYear();
    res.locals.route = req.path;
    return next();
}
)

app.use(bodyParser.urlencoded({extended: true}));

//Load routes
app.use('/', routes())

app.listen(3000);