const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Blog extends Model { }

Blog.init({
  name:DataTypes.STRING,
  title:DataTypes.STRING,
  content:DataTypes.STRING
}, { sequelize, modelName: 'blogs' })

module.exports = Blog