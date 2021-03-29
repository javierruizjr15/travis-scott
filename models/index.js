const User = require('./User.js')
const musicBlog = require('./musicBlog.js')
const merchBlog = require('./merchBlog.js')
const foodBevBlog = require('./foodBevBlog.js')
const generalBlog = require('./generalBlog.js')

User.hasMany(musicBlog, { foreignKey: 'uid' })
musicBlog.belongsTo(User, { foreignKey: 'uid' })

User.hasMany(merchBlog, { foreignKey: 'uid' })
merchBlog.belongsTo(User, { foreignKey: 'uid' })

User.hasMany(foodBevBlog, { foreignKey: 'uid' })
foodBevBlog.belongsTo(User, { foreignKey: 'uid' })

User.hasMany(generalBlog, { foreignKey: 'uid' })
generalBlog.belongsTo(User, { foreignKey: 'uid' })



module.exports = { User, musicBlog, merchBlog, foodBevBlog, generalBlog }