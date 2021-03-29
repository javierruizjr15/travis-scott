const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class musicBlog extends Model { }

musicBlog.init(
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
      type: DataTypes.STRING,
      allowNull: false
    },
  }, { sequelize, modelName: 'musicBlogs' })

module.exports = musicBlog