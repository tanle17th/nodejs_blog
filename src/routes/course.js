var express = require('express')
var router = express.Router()

const courseController = require('../app/controllers/CourseController')

// router.get is only for subpaths

// subpath courses/:slug returns show()
router.post('/handle-dropdown-action', courseController.handleDropdownAction)
router.get('/create', courseController.create)
router.post('/store', courseController.store)
router.get('/:id/edit', courseController.edit)
router.put('/:id', courseController.update)
router.patch('/:id/restore', courseController.restore)
router.delete('/:id', courseController.delete)
router.delete('/:id/force', courseController.destroy)
router.get('/:slug', courseController.show)

module.exports = router
