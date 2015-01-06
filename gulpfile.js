var gulp    = require('gulp'),
    mocha   = require('gulp-mocha-co'),
    nodemon = require('gulp-nodemon'),
    exit    = require('gulp-exit');

gulp.task('default', function() {});

// Start server using live-reloading
gulp.task('server', ['nodemon']);

gulp.task('test-once', function() {
  return gulp.src('test/*/*.js', {read: false})
    .pipe(mocha({reporter: 'nyan'}))
    .pipe(exit());
});

gulp.task('nodemon', function() {
  nodemon({
    script: 'index.js',
    nodeArgs: ['--harmony']
  }).on('restart');
});
