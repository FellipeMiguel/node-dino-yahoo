const Sequelize = require('sequelize');

const connection = new Sequelize('dinoyahoo', 'dino', 'Btz85y7i.', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = connection;