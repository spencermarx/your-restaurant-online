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
var replace = require('gulp-replace');
const imageMin = require('gulp-imagemin');


// File paths
const files = {
    scssPath: './src/scss/*.scss',
    jsPath: './src/js/*.js'
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
        .pipe(dest('public/scripts')
    );
}

// function nodemonTask() {
//     var stream = nodemon({ script: 'server.js'
//           , ext: 'html css js'
//           , tasks: ['watchTask']
//           , done: done })

//   return stream
//       .on('restart', function () {
//         console.log('restarted!')
//       })
//       .on('crash', function() {
//         console.error('Application has crashed!\n')
//          stream.emit('restart', 10)  // restart the server in 10 seconds
//       });
// }

// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask(){
    watch([files.scssPath, files.jsPath],
        parallel(scssTask, jsTask));
}

// Export the default Gulp task so it can be run
// Runs the scss and js tasks simultaneously
// then runs cacheBust, then watch task
exports.default = series(
    parallel(scssTask, jsTask),
    watchTask
);