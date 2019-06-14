var
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  pug = require('gulp-pug'),

  concat = require('gulp-concat'),
  deporder = require('gulp-deporder'),
  stripdebug = require('gulp-strip-debug'),
  uglify = require('gulp-uglify');
//  runSequence = require('run-sequence');

//  var browserSync = require('browser-sync').create();

//basic gulp task
//gulp.task('task-name', function() {
  // Stuff here
//  return gulp.src('source-files') // Get source files with gulp.src
//   .pipe(aGulpPlugin()) // Sends it through a gulp plugin
//   .pipe(gulp.dest('destination')) // Outputs the file in the destination folder
//});


gulp.task('sass', function(){
   return gulp.src('src/scss/**/*.scss')
   .pipe(sass()) // Using gulp-sass
   .pipe(gulp.dest('dist/css'))
  /* .pipe(browserSync.reload({
     stream: true
   }))*/
});

gulp.task('pug', function(){
 return gulp.src('src/*.pug')
   .pipe(pug()) // Using gulp-pug
   .pipe(gulp.dest('dist'))
});

gulp.task('js', function() {
  return gulp.src('src/js/**/*')
    .pipe(deporder())
    .pipe(concat('main.js'))
    .pipe(stripdebug())
    //.pipe(uglify())
    .pipe(gulp.dest('dist/js'))

});

//gulp.task('default', [ 'sass', 'pug', 'js' ]);

gulp.task('watch', function(){
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('src/**/*.pug', ['pug']);
})

//browserSync
/*gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})*/

gulp.task('default', [ 'sass', 'pug', 'js', 'watch' ]);
/*gulp.task('default', function (callback) {
  runSequence(['sass', 'pug', 'js', 'browserSync', 'watch'],
    callback
  )
})
*/
