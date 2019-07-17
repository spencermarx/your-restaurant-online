// =================
// DOTENV SETUP
// =================
require('dotenv').config();

// =================
// PACKAGES SETUP
// =================
const expressSanitizer = require('express-sanitizer');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const favicon = require('serve-favicon');
const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

// =================
// MIDDLEWARE SETUP
// =================

// Set up Public Folder
app.use(express.static(path.join(`${__dirname}/public`)));

// Set up Favicon
app.use(
  favicon(path.join(__dirname, 'public', 'images', 'favicon', 'favicon.ico'))
);

// Set Up Body Parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const port = process.envPORT || 8080;

// Set default file to ejs
app.set('view engine', 'ejs');
app.locals.rmWhitespace = true;

// =================
// DATABASE SETUP
// =================

mongoose.connect(process.env.MONGODBURLDEV, {
  useNewUrlParser: true,
});

// =================
// ROUTING
// =================

const indexRoutes = require('./controllers/index');
const apiRoutes = require('./controllers/api');

// Routes
app.use('/', indexRoutes);
app.use('/api/', apiRoutes);

// =================
// START SERVER
// =================
app.listen(process.env.PORT || port, () => {
  console.log('App listening on port 8080!');
});
