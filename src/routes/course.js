var express = require('express')
var router = express.Router()

const courseController = require('../app/controllers/CourseController')

// router.get is only for subpaths

// subpath courses/:slug returns show()
router.get('/create', courseController.create)
router.post('/store', courseController.store)
router.get('/:id/edit', courseController.edit)
router.put('/:id', courseController.update)
router.get('/:slug', courseController.show)

module.exports = router
