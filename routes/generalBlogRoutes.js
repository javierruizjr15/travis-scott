const router = require('express').Router()
const { generalBlog } = require('../models')

// GET all musicBlogs
router.get('/generalBlogs', (req, res) => {
  generalBlog.findAll({})
    .then(generalBlogs => res.json(generalBlogs))
    .catch(err => console.log(err))
})

// GET one generalBlog
router.get('/generalBlogs/:id', (req, res) => {
  generalBlog.findOne({ where: { id: req.params.id } })
    .then(generalBlog => res.json(generalBlog))
    .catch(err => console.log(err))
})

// POST one generalBlog
router.post('/generalBlogs', (req, res) => {
  generalBlog.create(req.body)
    .then(generalBlog => res.json(generalBlog))
    .catch(err => console.log(err))
})

// PUT one generalBlog
router.put('/generalBlogs/:id', (req, res) => {
  generalBlog.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// DELETE one generalBlog
router.delete('/generalBlogs/:id', (req, res) => {
  generalBlog.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router