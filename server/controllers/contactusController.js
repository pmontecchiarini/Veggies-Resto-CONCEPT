const Contact = require('../models/Contact');


exports.infoAboutUs = (req, res) => {
    res.render('contact', {
        page: 'Contact us'
    });
} 

//When a contact form is submitted
exports.contactForm = async (req, res) => {
 
     //Validate complete fields
    let {name, email, message} = req.body;

     let errors = [];
     if (!name){
         errors.push({'message': 'Your name field cannot be empty'})
    }
     if (!email){
         errors.push({'message': 'Your email field cannot be empty'})
     }
     if (!message){
         errors.push({'message': 'The message field cannot be empty'})
     }
    
     //Check for errors
     if(errors.length > 0){
        const contact = await Contact.findAll()
         res.render('contact', {
             errors,
             name,
             email,
             message,
             page: 'Contact us',
         })
    } else {
         //Store in DB
         Contact.create({
             name,
             email,
             message
         })
         .then( 
             contact => res.redirect('/contact',
             ))
         .catch(errors => console.log(errors));
     }


 }

