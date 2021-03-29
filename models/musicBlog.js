const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

// takes class and model from sql and puts it together to create table
class musicBlog extends Model { }

musicBlog.init({
  title: DataTypes.STRING,
  content: DataTypes.STRING,
  name: DataTypes.STRING
}, { sequelize, modelName: 'musicBlogs' })

module.exports = musicBlog