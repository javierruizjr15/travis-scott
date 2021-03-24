const router = require('express').Router()

<<<<<<< HEAD
router.use('/', require('./viewRoutes.js'))
router.use('/', require('./viewRoutes.js'))
router.use('/', require('./viewRoutes.js'))

module.exports = router
=======
router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./musicBlogRoutes.js'))
router.use('/seed', require('./seedRoutes.js'))
router.use('/api',require('./foodBevBlogRoutes.js'))
router.use('/api',require('./merchBlogRoutes.js'))
router.use('/api', require('./generalBlogRoutes.js'))

module.exports = router
>>>>>>> cdbfde12f64396153686e084169fdd443f0dbdd3
