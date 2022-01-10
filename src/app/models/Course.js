const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ObjectId = Schema.ObjectId

const Course = new Schema({
  id: ObjectId,
  name: { type: String, maxLength: 255, default: 'New Course' },
  description: { type: String, maxLength: 255 },
  image: { type: String, maxLength: 255 },
  createdAt: { type: Date, default: Date.now },
  UpdatedAt: { type: Date, default: Date.now },
  slug: { type: String, maxLength: 255 },
  videoId: { type: String },
})

// mongoose lowercases Schema name -> course
// and add s -> courses
// will match our collection in the database
module.exports = mongoose.model('Course', Course)
