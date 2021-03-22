const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class merchBlog extends Model { }

merchBlog.init({
  title: DataTypes.STRING,
  content: DataTypes.STRING,
  name: DataTypes.STRING
}, { sequelize, modelName: 'merchBlogs' })

module.exports = merchBlog