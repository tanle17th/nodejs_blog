var express = require('express')
var router = express.Router()

const siteController = require('../app/controllers/SiteController')

// router.get is only for subpaths

// subpath /search returns search()
router.get('/search', siteController.search)
// subpath / returns index() (HOME)
router.get('/', siteController.index)

module.exports = router
