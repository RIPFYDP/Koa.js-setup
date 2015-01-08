var gulp    = require('gulp'),
    mocha   = require('gulp-mocha-co'),
    nodemon = require('gulp-nodemon'),
    exit    = require('gulp-exit'),
    jshint  = require('gulp-jshint'),
    stylish = require('jshint-stylish');

gulp.task('default', function() {});

// Start server using live-reloading
gulp.task('server', ['nodemon']);

gulp.task('test-once', function() {
  return gulp.src('test/lib/**/*.js', {read: false})
    .pipe(mocha({reporter: 'nyan'}))
    .pipe(exit());
});

gulp.task('nodemon', function() {
  nodemon({
    script: 'index.js',
    nodeArgs: ['--harmony']
  }).on('restart');
});

gulp.task('lint', function() {
  return gulp.src(['./index.js', './lib/**/*.js'])
  .pipe(jshint())
  .pipe(jshint.reporter(stylish));
});
