const Sequelize = require('sequelize');

const db = require('../config/database');

const Contact = db.define('contact', {

    name : {
        type: Sequelize.STRING
    },
    email : {
        type: Sequelize.STRING
    },
    message : {
        type: Sequelize.STRING
    }
})

module.exports = Contact;
