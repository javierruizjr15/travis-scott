const router = require('express').Router()
const { merchBlog } = require('../models')

// GET all merchBlogs
router.get('/merchBlogs', (req, res) => {
  merchBlog.findAll({})
    .then(merchBlogs => res.json(merchBlogs))
    .catch(err => console.log(err))
})

// GET one merchBlog
router.get('/merchBlogs/:id', (req, res) => {
  merchBlog.findOne({ where: { id: req.params.id } })
    .then(merchBlog => res.json(merchBlog))
    .catch(err => console.log(err))
})

// POST one merchBlog
router.post('/merchBlogs', (req, res) => {
  merchBlog.create(req.body)
    .then(merchBlog => res.json(merchBlog))
    .catch(err => console.log(err))
})

// PUT one merchBlog
router.put('/merchBlogs/:id', (req, res) => {
  merchBlog.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// DELETE one merchBlog
router.delete('/merchBlogs/:id', (req, res) => {
  merchBlog.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router