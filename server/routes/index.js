const express = require('express');
const router = express.Router();

/*Controllers*/
const contactusController = require ('../controllers/contactusController');
const homeController = require ('../controllers/homeController');
const menuController = require ('../controllers/menuController');
const reviewController = require ('../controllers/reviewController');


module.exports = function (){

    router.get('/', homeController.Homepage);
    router.get('/contactus', contactusController.infoAboutUs);
    router.get('/menu', menuController.OrderFood );    
    router.get('/reviews', reviewController.showReviews );
    //When a new review is submitted
    router.post('/reviews', reviewController.addReview);

    return router;
}