const router = require('express').Router()
const { musicBlog } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

// GET all musicBlogs
router.get('/musicBlogs', passport.authenticate('jwt'), (req, res) => {
  musicBlog.findAll({})
    .then(musicBlogs => res.json(musicBlogs))
    .catch(err => console.log(err))
})

// GET one musicBlog
router.get('/musicBlogs/:id', passport.authenticate('jwt'), (req, res) => {
  musicBlog.findOne({ where: { id: req.params.id } })
    .then(musicBlog => res.json(musicBlog))
    .catch(err => console.log(err))
})

// POST one musicBlog
router.post('/musicBlogs', passport.authenticate('jwt'), (req, res) => {
  musicBlog.create({
    title: req.body.title,
    content: req.body.content,
    name: req.body.name,
    uid: req.user.id
  })
    .then(musicBlog => res.json(musicBlog))
    .catch(err => console.log(err))
})

// PUT one musicBlog
router.put('/musicBlogs/:id', passport.authenticate('jwt'), (req, res) => {
  musicBlog.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// DELETE one musicBlog
router.delete('/musicBlogs/:id', passport.authenticate('jwt'), (req, res) => {
  musicBlog.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router