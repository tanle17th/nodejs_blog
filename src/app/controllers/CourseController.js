const Course = require('../models/Course')
const { mongooseToObject } = require('../../utils/mongoose')

class CourseController {
  // [GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render('courses/details', {
          course: mongooseToObject(course),
        })
      })
      .catch(next)
  }

  // [GET] /courses/create
  create(req, res, next) {
    res.render('courses/create')
  }

    // [POST] /courses/store
    store(req, res, next) {
      const formData = req.body
      formData.image = `https://cdn.fullstack.edu.vn/f8-production/courses/6.png`
      const course = new Course(formData)
      course.save()
        .then(() => res.redirect('/'))
        .catch(next)
    }
}

module.exports = new CourseController()
