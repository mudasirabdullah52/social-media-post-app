// models/index.js
const Sequelize = require('sequelize');

const sequelize = new Sequelize('appointment-db', 'root', 'Mudasir@1231', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false,
    },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
