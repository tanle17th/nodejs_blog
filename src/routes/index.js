const newsRouter = require("./news");
const siteRouter = require("./site");

function route(app) {
  // News Router:
  // app.use for /news path
  // second param receives newsRouter which configs all child paths
  // of /news
  app.use("/news", newsRouter);

  // Site Router (HOME, SEARCH):
  app.use("/", siteRouter);
}

module.exports = route;
