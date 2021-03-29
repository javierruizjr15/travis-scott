const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class foodBevBlog extends Model { }

foodBevBlog.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING
    },
  }, { sequelize, modelName: 'foodBevBlogs' })

module.exports = foodBevBlog