const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)

const ObjectId = Schema.ObjectId

const Course = new Schema(
  {
    id: ObjectId,
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
    // from version mongoose 4, this replaces createdAt & updatedAt:
    timestamps: true,
  },
)

// mongoose lowercases Schema name -> course
// and add s -> courses
// will match our collection in the database
module.exports = mongoose.model('Course', Course)
