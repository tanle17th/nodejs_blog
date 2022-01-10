// Data returned from mongoose is of its prototype object (CANT be used in views)
// We need to map those data and returned a new JS array (Object Literal)
// to be used in the views
module.exports = {
  multipleMongooseToObject: (courses) => {
    return (courses = courses.map((course) => course.toObject()))
  },
  mongooseToObject: (course) => {
    return course ? course.toObject() : course
  },
}
