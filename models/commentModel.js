// models/userModel.js
const { DataTypes } = require('sequelize');
const db = require('./index');

const Comment = db.sequelize.define('comment', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    comment_description: {
        type: DataTypes.STRING,
        // allowNull: false,
    }
});

module.exports = Comment;
