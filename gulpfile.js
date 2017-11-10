var gulp = require('gulp'),
    sass = require('gulp-sass')
    concat = require('gulp-concat')
    pug = require('gulp-pug');


gulp.task('pug', function buildHTML() {
  return gulp.src('portmi/*.pug')
  .pipe(pug({
    // Your options in here.
  }))
    .pipe(gulp.dest('./portmi'))
});

gulp.task('sass', function() {
  return gulp.src('./css/sass/*.scss')
    .pipe(concat('css/app.css'))
    .pipe(gulp.dest('./css'))
    .on('error', console.log)
});

gulp.task('default',['sass'], function() {
  // place code for your default task here
});
