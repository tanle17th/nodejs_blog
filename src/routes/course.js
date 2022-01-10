var express = require('express')
var router = express.Router()

const courseController = require('../app/controllers/CourseController')

// router.get is only for subpaths

// subpath courses/:slug returns show()
router.get('/:slug', courseController.show)

module.exports = router