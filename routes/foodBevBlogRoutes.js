const router = require('express').Router()
const { foodBevBlog } = require('../models')

// GET all foodBevBlogs
router.get('/foodBevBlogs', (req, res) => {
  foodBevBlog.findAll({})
    .then(foodBevBlogs => res.json(foodBevBlogs))
    .catch(err => console.log(err))
})

// GET one foodBevBlog
router.get('/foodBevBlogs/:id', (req, res) => {
  foodBevBlog.findOne({ where: { id: req.params.id } })
    .then(foodBevBlog => res.json(foodBevBlog))
    .catch(err => console.log(err))
})

// POST one foodBevBlog
router.post('/foodBevBlogs', (req, res) => {
  foodBevBlog.create(req.body)
    .then(blog => res.json(blog))
    .catch(err => console.log(err))
})

// PUT one foodBevBlog
router.put('/foodBevBlogs/:id', (req, res) => {
  foodBevBlog.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// DELETE one foodBevBlog
router.delete('/foodBevBlogs/:id', (req, res) => {
  foodBevBlog.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router