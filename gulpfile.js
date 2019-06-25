// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const { src, dest, watch, series, parallel } = require('gulp');

// Importing all the Gulp-related packages we want to use
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');

// File paths
const files = {
  scssPath: './src/scss/**/*.scss',
  jsPath: './src/js/**/*.js',
  imagePath: './src/images/*',
};
// TODO: Change name to include "min" in final build
// Sass task: compiles the style.scss file into style.css
function scssTask() {
  return src(files.scssPath)
    .pipe(sourcemaps.init()) // initialize sourcemaps first
    .pipe(sass()) // compile SCSS to CSS
    .pipe(postcss([autoprefixer(), cssnano()])) // PostCSS plugins
    .pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
    .pipe(dest('public/styles')); // put final CSS in dist folder
}
// TODO: Change name to include "min" in final build
// JS task: concatenates and uglifies JS files to app.js
function jsTask() {
  return src([
    files.jsPath, // ,'!' + 'includes/js/jquery.min.js', // to exclude any specific files
  ])
    .pipe(concat('app.js'))
    .pipe(uglify())
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
