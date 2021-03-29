const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class merchBlog extends Model { }

merchBlog.init(
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
  }, { sequelize, modelName: 'merchBlogs' })

module.exports = merchBlog