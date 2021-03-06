/* eslint no-use-before-define: 0 */ // --> OFF

// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const { src, dest, watch, series, parallel } = require('gulp');

// Importing all the Gulp-related packages we want to use
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');

// File paths
const files = {
  scssPath: './src/scss/**/*.scss',
  jsPath: './src/js/**/*.js',
  babelPolyfill: 'node_modules/babel-polyfill/dist/polyfill.js',
  imagePath: './src/images/*',
};

// PostCSS Plugins
const postCSSPlugins = [cssnano, autoprefixer];

// Sass task: compiles the style.scss file into style.css
function scssTask() {
  return src(files.scssPath)
    .pipe(sourcemaps.init()) // initialize sourcemaps first
    .pipe(sass()) // compile SCSS to CSS
    .pipe(postcss(postCSSPlugins)) // PostCSS plugins
    .pipe(
      rename({
        basename: 'main',
        suffix: '.min',
        extname: '.css',
      })
    )
    .pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
    .pipe(dest('public/styles')); // put final CSS in dist folder
}

// JS task: concatenates and uglifies JS files to app.js
function jsTask() {
  return src([
    files.babelPolyfill,
    files.jsPath, // ,'!' + 'includes/js/jquery.min.js', // to exclude any specific files
  ])
    .pipe(concat('app.js'))
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(uglify())
    .pipe(
      rename({
        basename: 'app',
        suffix: '.min',
        extname: '.js',
      })
    )
    .pipe(dest('public/scripts'));
}

function imageTask() {
  return src([files.imagePath])
    .pipe(imagemin())
    .pipe(dest('public/images/content'));
}

// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask() {
  watch(
    [files.scssPath, files.jsPath, files.imagePath],
    parallel(scssTask, jsTask, imageTask)
  );
}

// Export the default Gulp task so it can be run
// Runs the scss and js tasks simultaneously
// then runs cacheBust, then watch task
exports.default = series(parallel(scssTask, jsTask, imageTask), watchTask);
