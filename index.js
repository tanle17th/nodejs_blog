// Get express module:
const express = require('express')
// initialize a new express() object:
const app = express()
const port = 3000

// route:
app.get('/', (req, res) => {
    // use HTTP to send response Hello World! to the client:
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})