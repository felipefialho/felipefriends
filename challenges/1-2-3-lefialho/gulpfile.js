var gulp = require('gulp');
// Requires browserSync
var browserSync = require('browser-sync').create();
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
// Requires the gulp-useref concat js and css files plugin
var useref = require('gulp-useref');
// Requires the uglify plugin that minify js
var uglify = require('gulp-uglify');
// Requires the cssnano plugin to minify css
var cssnano = require('gulp-cssnano');
// Requires the gulp-if plugin
var gulpIf = require('gulp-if');
// Requires the gulp-imagemin plugin to minify images
var imagemin = require('gulp-imagemin');
// Requires svg-sprite plugin
var svgSprite = require('gulp-svg-sprite');
// Requires the gulp-cache plugin to optimize the speed image minification
var cache = require('gulp-cache');
// Requires the del plugin to clean files
var del = require('del');
// Requires run-sequence plugin
var runSequence = require('run-sequence');



// Basic Gulp task 
gulp.task('hello', function() {
  console.log('Hello Zell!');
})


// Devlopment Tasks 
// -----------------

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src'
    },
  })
})


gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss') // Gets all files ending with .scss in src/scss
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});


//Watchers

//Read browserSynk and sass before watch
gulp.task('watch', ['browserSync', 'sass'], function (){
  // Reloads the browser whenever SCSS files change
  gulp.watch('src/scss/**/*.scss', ['sass']); 
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('src/*.html', browserSync.reload); 
  gulp.watch('src/js/**/*.js', browserSync.reload); 
});


//Optimization tasks
//-------------------

gulp.task('useref', function(){
  return gulp.src('src/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});


gulp.task('images', function(){
  return gulp.src('src/images/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/images'))
});


//SVG sprite task
var config = {
  mode: {
    symbol: {
      dest: 'dist/sprites',
      sprite: 'sprite.svg', //nome do sprite
      example: true // criar página de exemplo
    }
  },
  svg:{
    xmlDeclaration: false, //não criar xml no svg
    doctypeDeclaration: false //não criar doctype no svg
  }
};

gulp.task('sprites', function(){
  return gulp.src('src/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('.'))
});


//Cleaning task

gulp.task('clean:dist', function() {
  return del.sync('dist');
})


// Task Sequences
// ---------------

gulp.task('build', function (callback) {
  runSequence('clean:dist', ['sass', 'useref', 'images', 'sprites'],
    callback
  )
})


gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
})




