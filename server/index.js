//Import express
const express = require("express");
const routes = require("./routes");
const path = require("path");
const bodyParser = require("body-parser");

//Setting production enviroment
const configs = require('./config');

if (process.env.NODE_ENV !== 'production') { require('dotenv').config({ path: 'variables.env'})  }

//require('dotenv').config({ path: 'variables.env'}) 

//if (process.env.NODE_ENV !== 'production') {require('dotenv').config({ path: 'variables.env'}) }

const db = require("./config/database");
const { getMaxListeners } = require("process");
db.authenticate()
  .then(() => console.log("Database connection was succesfull."))
  .catch((error) => console.log("Error connectiong to de database."));

//Configure Express
const app = express();

//View engine set up
app.set("view engine", "pug");

//Add views
app.set("views", path.join(__dirname, "./views"));

//Load static folder
app.use(express.static("public"));

//Validate enviroment
const config = configs[app.get('env')];

app.locals.title = config.sitename;

// Show current year and current route
app.use((req, res, next) => {
  const date = new Date();
  res.locals.currentDate = date.getFullYear();
  res.locals.route = req.path;
  return next();
});

//Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

//Load routes
app.use("/", routes());


/** PORT & HOST */
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || '3000';

app.listen(port, host, () => console.log("Server starting..."));
