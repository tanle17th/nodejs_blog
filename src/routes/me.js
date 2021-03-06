var express = require('express')
var router = express.Router()

const meController = require('../app/controllers/MeController')

// router.get is only for subpaths

// subpath courses/:slug returns show()
router.get('/stored/courses', meController.storedCourses)
router.get('/trash/courses', meController.trashCourses)

module.exports = router
