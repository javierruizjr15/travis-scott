const router = require('express').Router()
const { Blog } = require('../models')

// GET all blogs
router.get('/blogs', (req, res) => {
  Blog.findAll({})
    .then(blogs => res.json(blogs))
    .catch(err => console.log(err))
})

// GET one Blog
router.get('/blogs/:id', (req, res) => {
  Blog.findOne({ where: { id: req.params.id } })
    .then(blog => res.json(blog))
    .catch(err => console.log(err))
})

// POST one Blog
router.post('/blogs', (req, res) => {
  Blog.create(req.body)
    .then(blog => res.json(blog))
    .catch(err => console.log(err))
})

// PUT one Blog
router.put('/blogs/:id', (req, res) => {
  Blog.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// DELETE one Blog
router.delete('/blogs/:id', (req, res) => {
  Blog.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router