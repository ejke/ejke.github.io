var gulp = require('gulp');
// var pug = require('gulp-pug');
var sass = require('gulp-sass');
// var minifyCSS = require('gulp-csso');

// gulp.task('html', function(){
//   return gulp.src('client/templates/*.pug')
//     .pipe(pug())
//     .pipe(gulp.dest('build/html'))
// });

// gulp.task('css', function(){
//   return gulp.src('client/templates/*.less')
//     .pipe(less())
//     .pipe(minifyCSS())
//     .pipe(gulp.dest('build/css'))
// });

gulp.task('sass', function () {
  return gulp.src('./css/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./css/sass/*.scss', ['sass']);
});

gulp.task('default', [ 'sass' ]);
