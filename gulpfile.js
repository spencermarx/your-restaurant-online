// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const { src, dest, watch, series, parallel } = require('gulp');

// Importing all the Gulp-related packages we want to use
const sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    imagemin = require('gulp-imagemin');


// File paths
const files = {
    scssPath: './src/scss/*.scss',
    jsPath: './src/js/*.js',
    imagePath: './src/images/*'
}

// Sass task: compiles the style.scss file into style.css
function scssTask(){
    return src(files.scssPath)
        .pipe(sass()) // compile SCSS to CSS
        .pipe(postcss([ autoprefixer(), cssnano() ])) // PostCSS plugins
        .pipe(dest('public/stylesheets')); // put final CSS in dist folder
}

// JS task: concatenates and uglifies JS files to script.js
function jsTask(){
    return src([
        files.jsPath //,'!' + 'includes/js/jquery.min.js', // to exclude any specific files
        ])
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(dest('public/scripts'));
}

function imageTask(){
    return src([
        files.imagePath
        ])
        .pipe(imagemin())
        .pipe(dest('public/images/content'));
}

// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask(){
    watch([files.scssPath, files.jsPath, files.imagePath],
        parallel(scssTask, jsTask, imageTask));
}

// Export the default Gulp task so it can be run
// Runs the scss and js tasks simultaneously
// then runs cacheBust, then watch task
exports.default = series(
    parallel(scssTask, jsTask, imageTask),
    watchTask
);