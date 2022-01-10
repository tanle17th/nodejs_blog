const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../utils/mongoose')

class SiteController {
  // [GET] /
  index(req, res, next) {
    // find() is from mongoose model, receives a callback func
    // response to client if no err is found

    /** Write in PROMISE way */
    Course.find({})
      // Pass data to views as objects
      .then((courses) => {
        /**IMPORTANT NOTE */
        // Security problem of Handlebars:
        // Need to change objects
        // FROM: mongoose prototype
        // TO: JS object literal
        // => Call multipleMongooseToObject from utils/mongoose.js
        res.render('home', {
          courses: multipleMongooseToObject(courses),
        })
      })
      .catch(next)
    // res.render('home')
  }

  // [GET] /search
  search(req, res) {
    res.render('search')
  }
}

module.exports = new SiteController()
