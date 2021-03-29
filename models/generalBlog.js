const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class generalBlog extends Model { }

generalBlog.init({
  title: DataTypes.STRING,
  content: DataTypes.STRING,
  name: DataTypes.STRING
}, { sequelize, modelName: 'generalBlogs' })

module.exports = generalBlog