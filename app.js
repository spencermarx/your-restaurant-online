// =================
// PACKAGES SETUP
// =================

var bodyParser = require('body-parser'),
    favicon = require('serve-favicon'),
    express = require('express'),
    path = require("path"),
    ejs = require('ejs'),
    app = express();


// =================
// MIDDLEWARE SETUP
// =================

// Set up Public Folder
app.use(express.static(path.join(__dirname + "/public")));

// Set up Favicon
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon', 'favicon.ico')));

//Set Up Body Parser
app.use(bodyParser.urlencoded({
    extended: true
}));
var port = process.envPORT || 8080;

// Set default file to ejs
app.set("view engine", "ejs");
app.locals.rmWhitespace = true;


// =================
// ROUTING
// =================

var indexRoutes = require('./controllers/index');

// Routes
app.use('/', indexRoutes);

// =================
// START SERVER
// =================
app.listen(process.env.PORT || port, () => {
    console.log('App listening on port 8080!');
});