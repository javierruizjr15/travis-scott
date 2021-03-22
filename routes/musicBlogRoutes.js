const router = require('express').Router()
const { musicBlog } = require('../models')

// GET all musicBlogs
router.get('/musicBlogs', (req, res) => {
  musicBlog.findAll({})
    .then(musicBlogs => res.json(musicBlogs))
    .catch(err => console.log(err))
})

// GET one musicBlog
router.get('/musicBlogs/:id', (req, res) => {
  musicBlog.findOne({ where: { id: req.params.id } })
    .then(musicBlog => res.json(musicBlog))
    .catch(err => console.log(err))
})

// POST one musicBlog
router.post('/musicBlogs', (req, res) => {
  musicBlog.create(req.body)
    .then(musicBlog => res.json(musicBlog))
    .catch(err => console.log(err))
})

// PUT one musicBlog
router.put('/musicBlogs/:id', (req, res) => {
  musicBlog.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// DELETE one musicBlog
router.delete('/musicBlogs/:id', (req, res) => {
  musicBlog.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router