const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class musicBlog extends Model { }

musicBlog.init({
  title:DataTypes.STRING,
  content:DataTypes.STRING,
  name:DataTypes.STRING
}, { sequelize, modelName: 'musicBlogs' })

module.exports = musicBlog