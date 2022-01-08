var express = require("express");
var router = express.Router();

const siteController = require("../app/controllers/SiteController");

// search router:
router.use("/search", siteController.search);
// home router:
router.use("/", siteController.index);

module.exports = router;
