//Import express
const express = require("express");
const routes = require("./routes");
const path = require("path");
const bodyParser = require("body-parser");
// const nodemailer = require("nodemailer");

require('dotenv').config({ path: 'variables.env'});

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

//Contact form
// app.post("/send", (req, res) => {
// const output = `<p>You have a new contact request</p>
// <h3>Contact detail</h3>
// <ol>
//   <li>Name: ${req.body.name} </li>
//   <li>Email: ${req.body.email}</li>
// </ol>
// <h3>Message</h3>
// <p>Message: ${req.body.message}</p>`
//     ;
//   async function main() {
//     // create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true, // true for 465, false for other ports
//       auth: {
//         user: "pmontecchiarini.dev@gmail.com", // generated ethereal user
//         pass: "Mulder$$0128", // generated ethereal password
//       },
//     });

//     // send mail with defined transport object
//     let info = await transporter.sendMail({
//       from: '"Veggies Takeout Contact Form" <pmontecchiarini.dev@gmail.com>', // sender address
//       to: "pato1025@gmail.com", // list of receivers
//       subject: "You have a message from Veggies Resto", // Subject line
//       text: "Testing", // plain text body
//       html: output, // html body
//     },
//     { tls: {rejectUnauthorized:false}
//     }
//     );

//     console.log("Message sent: %s", info.messageId);
//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

//     res.render("/contactus", { msg: "Your message has been sent" });
//   }
//   main().catch(console.error);
// });

/** PORT & HOST */
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || '3000';

app.listen(port, host, () => console.log("Server starting..."));
