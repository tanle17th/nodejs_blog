// Get express module:
const express = require("express");
// Get morgan
const morgan = require("morgan");
// Get express-handlebars
const { engine } = require("express-handlebars");
// Path is default library of NodeJS
const path = require("path");
// initialize a new express() object:
const app = express();
const port = 3000;

// To serve static files such as images, CSS files, and JavaScript files,
// use the express.static built-in middleware function in Express.
// Source for all folders within PUBLIC:
app.use(express.static(path.join(__dirname, "public")));

// app.use(morgan("combined"));

// Template engine:
app.engine(
    "hbs",
    // engine receives an object
    // extname: to change the extension name for views
    engine({
        extname: ".hbs",
    })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Middleware:
app.use(express.urlencoded({
    extended: true,
})); // Form sends normal HTML
app.use(express.json()); // XMLHttpRequest, Fetch, axios sends json

// route:
app.get("/", (req, res) => {
    // use HTTP to send response Hello World! to the client:
    res.render("home");
});

app.get("/news", (req, res) => {
    // use HTTP to send response Hello World! to the client:
    res.render("news");
});

app.get("/search", (req, res) => {
    // Get query parameters by req.query:
    res.render("search");
});

app.post("/search", (req, res) => {
    // Get query parameters by req.query:
    res.send(`<h1>${req.body.q} - ${req.body.gender}</h1>`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});