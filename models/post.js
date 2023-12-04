// models/userModel.js
const { DataTypes } = require('sequelize');
const db = require('./index');

const User = db.sequelize.define('post', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    post_link: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = User;
