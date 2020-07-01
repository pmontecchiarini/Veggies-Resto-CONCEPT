const Sequelize = require('sequelize');

const db = require('../config/database');

const Review = db.define('reviews', {

    name : {
        type: Sequelize.STRING
    },
    email : {
        type: Sequelize.STRING
    },
    review : {
        type: Sequelize.STRING
    }
})

module.exports = Review;
