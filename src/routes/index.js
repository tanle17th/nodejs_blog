const newsRouter = require('./news')
const siteRouter = require('./site')
const courseRouter = require('./course')
const meRouter = require('./me')

function route(app) {
  // News Router:
  // app.use for /news path
  // second param receives newsRouter which configs all child paths
  // of /news
  app.use('/news', newsRouter)

  // app.use for /courses path
  app.use('/courses', courseRouter)

  // app.use for /me path
  app.use('/me', meRouter)

  // Site Router (HOME, SEARCH):
  app.use('/', siteRouter)
}

module.exports = route
