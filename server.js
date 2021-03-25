require('dotenv').config()

const express = require('express')
const { join } = require('path')
const passport = require('passport')
const { User, foodBevBlog, merchBlog, musicBlog, generalBlog } = require('./models')
const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(passport.initialize())
app.use(passport.session())

passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET
}, ({ id }, cb) => User.findOne({ where: { id }, include: [foodBevBlog, merchBlog, musicBlog] })
  .then(user => cb(null, user))
  .catch(err => cb(err))))
// when it finds the user it pulls the data from theo models associated with the user

app.use(require('./routes'))

require('./db').sync()
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(err => console.log(err))