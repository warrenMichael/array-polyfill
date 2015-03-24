var gulp = require('gulp'),
gutil = require('gulp-util'),
connect = require('gulp-connect');

gulp.task('webserver', function() {
  connect.server();
});

gulp.task('default', ['webserver']);