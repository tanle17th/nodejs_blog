var express = require('express')
var router = express.Router()

const newsController = require('../app/controllers/NewsController')

// router.get is only for subpaths

// subpath news/:slug returns show()
router.get('/:slug', newsController.show)
// main subpath: /news/
// returns index()
router.get('/', newsController.index)

module.exports = router
