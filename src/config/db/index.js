const mongoose = require('mongoose')

async function connect() {
  try {
    await mongoose.connect(
      'mongodb+srv://tanle17th:Whatsupbro123!@cluster0.bca54.mongodb.net/f8_education_dev?retryWrites=true&w=majority',
    )
    console.log('Connect successfully!!!')
  } catch (error) {
    console.log('Connection failed!')
  }
}

module.exports = { connect }
