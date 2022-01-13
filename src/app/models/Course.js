// Mongoose - Schema
const mongoose = require('mongoose')
const Schema = mongoose.Schema
// Slug
const slug = require('mongoose-slug-generator')
// mongoose-delete (soft delete)
const mongooseDelete = require('mongoose-delete')
// Auto-Increment
const autoIncrement = require('mongoose-sequence')(mongoose)

const CourseSchema = new Schema(
  {
    _id: { type: Number },
    name: {
      type: String,
      maxLength: 255,
      default: 'New Course',
      required: true,
    },
    description: { type: String },
    image: { type: String, maxLength: 255 },
    // unique: true prevents two same slugs
    // shortid library of mongoose-slug-generator will add
    // a randomID at the end of the slug
    slug: { type: String, slug: 'name', unique: true },
    videoId: { type: String, required: true },
  },
  {
    _id: false,
    // from version mongoose 4, this replaces createdAt & updatedAt:
    timestamps: true,
  },
)

// Custom query helpers:
// This replaces calling .sort() after calling .find()
// in MeController.js
CourseSchema.query.sortHelper = function (req) {
  // After call find({}) to the dtb,
  // call sort({ [field]: sortType }) to itself
  if (req.query.hasOwnProperty('_sort')) {
    const isValidtype = ['asc', 'desc'].includes(req.query.type)

    // this obj is Course query after calling .find():
    return this.sort({
      [req.query.column]: isValidtype ? req.query.type : 'desc',
    })
  }
  return this
}

// Add plugins
mongoose.plugin(slug)
CourseSchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' })
CourseSchema.plugin(autoIncrement)

// mongoose lowercases model name ('Course' below) -> course
// and add s -> courses
// will match our collection in the database
module.exports = mongoose.model('Course', CourseSchema)
