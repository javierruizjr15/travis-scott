const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class foodBevBlog extends Model { }

foodBevBlog.init({
  title: DataTypes.STRING,
  content: DataTypes.STRING,
  name: DataTypes.STRING
}, { sequelize, modelName: 'foodBevBlogs' })

module.exports = foodBevBlog