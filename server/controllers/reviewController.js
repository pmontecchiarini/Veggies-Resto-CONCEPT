const Review = require('../models/Reviews');


exports.showReviews = async (req, res) => {
    const reviews = await Review.findAll()
    res.render('reviews', {
        page: 'Customer reviews',
        reviews
    })
}

exports.addReview = async (req, res) => {
        
    console.log(req.body);
    //Validate complete fields
    let {name, email, review} = req.body;

    let errors = [];
    if (!name){
        errors.push({'message': 'Your name field cannot be empty'})
    }
    if (!email){
        errors.push({'message': 'Your email field cannot be empty'})
    }
    if (!review){
        errors.push({'message': 'The message field cannot be empty'})
    }

    //Check for errors
    if(errors.length > 0){
        const reviews = await Review.findAll()
        res.render('reviews', {
            errors,
            name,
            email,
            review,
            page: 'Reviews',
            reviews
        })
        
    } else {
        //Store in DB
        Review.create({
            name,
            email,
            review
        })
        .then( 
            review => res.redirect('/reviews'))
        .catch(errors => console.log(errors));
    }


}
