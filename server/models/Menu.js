const Sequelize = require('sequelize');

const db = require('../config/database');

const Menu = db.define('menu', {
    name: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.STRING
    }});

module.exports = Menu;