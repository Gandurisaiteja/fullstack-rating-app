const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Assuming sequelize connection is set in db.js

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('user', 'store_owner', 'admin'),
    defaultValue: 'user', // Default to user role
  },
});

module.exports = User;
