const User = require('./User.js')
const Blog = require('./Blog.js')

User.hasMany(Blog, {foreignKey:'uid'})
Blog.belongsTo(User,{foreignKey:'uid'})

module.exports={User,Blog}