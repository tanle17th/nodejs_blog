var express = require("express");
var router = express.Router();

const newsController = require("../app/controllers/NewsController");

// second child of /news
router.use("/:slug", newsController.show);
// main child of /news
// call index function of NewsController:
router.use("/", newsController.index);

module.exports = router;
