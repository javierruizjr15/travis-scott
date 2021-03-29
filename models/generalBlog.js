const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class generalBlog extends Model { }

generalBlog.init(
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
    createdAt: { 
      type: DataTypes.DATE,
      allowNull: false
    }
}, { sequelize, modelName: 'generalBlogs' })

module.exports = generalBlog