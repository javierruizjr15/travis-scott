const pls = require('passport-local-sequelize')
const { DataTypes } = require('sequelize')
const uuid = require('uuid');
const crypto = require('crypto');
const sequelize = require('../db')

const User = pls.defineUser(sequelize, 
{
  name: { 
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
})

// password encryption


module.exports = User
