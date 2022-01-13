const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../utils/mongoose')

class MeController {
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    let courseQuery = Course.find({})

    // After call find({}) to the dtb,
    // call sort({ [field]: sortType }) to itself
    if (req.query.hasOwnProperty('_sort')) {
      courseQuery = courseQuery.sort({
        [req.query.column]: req.query.type,
      })
    }

    courseQuery
      .then((courses) =>
        res.render('me/stored-courses', {
          courses: multipleMongooseToObject(courses),
        }),
      )
      .catch(next)
  }

  // [GET] /me/trash/courses
  trashCourses(req, res, next) {
    Course.findDeleted({})
      .then((courses) =>
        res.render('me/trash-courses', {
          courses: multipleMongooseToObject(courses),
        }),
      )
      .catch(next)
  }
}

module.exports = new MeController()
