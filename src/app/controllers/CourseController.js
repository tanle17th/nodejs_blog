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
    course
      .save()
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next)
  }

  // [GET] /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) => {
        res.render('courses/edit', { course: mongooseToObject(course) })
      })
      .catch(next)
  }

  // [PUT] /courses/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next)
  }

  // [DELETE] /courses/:id
  delete(req, res, next) {
    // override deleteOne() of mongoose by delete() of mongoose-delete
    Course.delete({ _id: req.params.id })
      // redirect to previous route (/me/stored/courses)
      .then(() => res.redirect('back'))
      .catch(next)
  }

  // [DELETE] /courses/:id/force
  destroy(req, res, next) {
    // override deleteOne() of mongoose by delete() of mongoose-delete
    Course.deleteOne({ _id: req.params.id })
      // redirect to previous route (/me/stored/courses)
      .then(() => res.redirect('back'))
      .catch(next)
  }

  // [PATCH] /courses/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      // redirect to previous route (/me/trash/courses)
      .then(() => res.redirect('back'))
      .catch(next)
  }

  // [POST] /courses/handle-dropdown-action
  handleDropdownAction(req, res, next) {
    switch (req.body.action) {
      case 'remove':
        // Remove all courses wherein ARRAY: courseIds
        Course.delete({ _id: { $in: req.body.courseIds } })
          .then(() => res.redirect('back'))
          .catch(next)
        break
      default:
        res.json({ message: 'Action invalid' })
    }
  }
}

module.exports = new CourseController()
