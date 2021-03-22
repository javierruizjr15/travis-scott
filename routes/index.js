const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./musicBlogRoutes.js'))
router.use('/seed', require('./seedRoutes.js'))

module.exports = router