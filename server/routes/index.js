const express = require('express');
const router = express.Router();

/*Controllers*/
const contactusController = require ('../controllers/contactusController');
const homeController = require ('../controllers/homeController');
const menuController = require ('../controllers/menuController');
const reviewController = require ('../controllers/reviewController');


module.exports = function (){

    router.get('/', homeController.Homepage);
    router.get('/contact', contactusController.infoAboutUs);
    router.get('/menu', menuController.onlineMenu );
    router.get('/menu/:id', menuController.menuDish);    
    router.get('/reviews', reviewController.showReviews );
    //When a new review is submitted
    router.post('/reviews', reviewController.addReview);
    //Submit contact form
    router.post('/contact', contactusController.contactForm);
    
    return router;
}