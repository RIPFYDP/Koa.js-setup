var gulp = require('gulp');
var mocha = require('gulp-mocha-co');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('test', function() {
  return gulp.src('test/tests.js', {read: false})
    .pipe(mocha({reporter: 'nyan'}))
    .once('end', function () {
      process.exit();
    });
});
