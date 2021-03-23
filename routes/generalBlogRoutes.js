const router = require('express').Router()
const { generalBlog } = require('../models')

// GET all musicBlogs
router.get('/generalBlogs', passport.authenticate('jwt'), (req, res) => {
  generalBlog.findAll({})
    .then(generalBlogs => res.json(generalBlogs))
    .catch(err => console.log(err))
})

// GET one generalBlog
router.get('/generalBlogs/:id', passport.authenticate('jwt'), (req, res) => {
  generalBlog.findOne({ where: { id: req.params.id } })
    .then(generalBlog => res.json(generalBlog))
    .catch(err => console.log(err))
})

// POST one generalBlog
router.post('/generalBlogs', (req, res) => {
  generalBlog.create({
    title:req.body.title,
    content:req.body.content,
    name:req.body.name,
    uid:req.user.id
  })
    .then(generalBlog => res.json(generalBlog))
    .catch(err => console.log(err))
})

// PUT one generalBlog
router.put('/generalBlogs/:id', passport.authenticate('jwt'), (req, res) => {
  generalBlog.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// DELETE one generalBlog
router.delete('/generalBlogs/:id', passport.authenticate('jwt'), (req, res) => {
  generalBlog.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router