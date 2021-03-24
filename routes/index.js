const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./musicBlogRoutes.js'))
router.use('/seed', require('./seedRoutes.js'))
router.use('/api',require('./foodBevBlogRoutes.js'))
router.use('/api',require('./merchBlogRoutes.js'))
router.use('/api', require('./generalBlogRoutes.js'))

module.exports = router
