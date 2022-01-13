// Get express module:
const express = require('express')
// Get morgan
const morgan = require('morgan')
// Get express-handlebars
const { engine } = require('express-handlebars')
// Path is default library of NodeJS
const path = require('path')
// Get method-override
const methodOverride = require('method-override')
// initialize a new express() object:
const app = express()
const port = 3000

const sortMiddleware = require('./app/middlewares/sortMiddleware')

const route = require('./routes')
const db = require('./config/db')

// init db object and call its connect() method
db.connect()

// To serve static files such as images, CSS files, and JavaScript files,
// use the express.static built-in middleware function in Express.
// Source for all folders within PUBLIC:
app.use(express.static(path.join(__dirname, 'public')))

// app.use(morgan("combined"));

// Template engine:
app.engine(
  'hbs',
  // engine receives an object
  // config: to change the extension name for views
  engine({
    extname: '.hbs',
    helpers: require('./helpers/handlebars'),
  }),
)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

// Middleware:
app.use(
  express.urlencoded({
    extended: true,
  }),
) // Form sends normal HTML
app.use(express.json()) // XMLHttpRequest, Fetch, axios sends json

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

// Custom middleware:
app.use(sortMiddleware)

// Routes init (all routes)
route(app)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
