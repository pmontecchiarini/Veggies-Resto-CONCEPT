//Consiguracion para la base de datos
const Sequelize = require('sequelize');

module.exports = new Sequelize('veggies_takeout_concept', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }, define: {
            timestamps: false
    }
    
}); 

