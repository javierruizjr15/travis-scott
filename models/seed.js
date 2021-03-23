const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class seed extends Model { }

seed.init({
  title: DataTypes.STRING,
  content: DataTypes.STRING,
  name: DataTypes.STRING
}, { sequelize, modelName: 'seed' })

module.exports = seed