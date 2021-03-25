const router = require('express').Router()
const { merchBlog } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

// GET all merchBlogs
router.get('/merchBlogs', passport.authenticate('jwt'), (req, res) => {
  merchBlog.findAll({})
    .then(merchBlogs => res.json(merchBlogs))
    .catch(err => console.log(err))
})

// GET one merchBlog
router.get('/merchBlogs/:id', passport.authenticate('jwt'), (req, res) => {
  merchBlog.findOne({ where: { id: req.params.id } })
    .then(merchBlog => res.json(merchBlog))
    .catch(err => console.log(err))
})

// POST one merchBlog
router.post('/merchBlogs', passport.authenticate('jwt'), (req, res) => {
  merchBlog.create({
    title: req.body.title,
    content: req.body.content,
    name: req.body.name,
    uid: req.user.id
  })
    .then(merchBlog => res.json(merchBlog))
    .catch(err => console.log(err))
})

// PUT one merchBlog
router.put('/merchBlogs/:id', passport.authenticate('jwt'), (req, res) => {
  merchBlog.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// DELETE one merchBlog
router.delete('/merchBlogs/:id', passport.authenticate('jwt'), (req, res) => {
  merchBlog.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router