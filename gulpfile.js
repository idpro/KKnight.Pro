'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');

var SASS_INCLUDE_PATHS = [
  path.join(__dirname, '/node_modules/bourbon/app/assets/stylesheets/'),
  path.join(__dirname, '/node_modules/bourbon-neat/app/assets/stylesheets/')
];

gulp.task('sass', function () {
  return gulp.src('./source/scss/**/*.scss')
    .pipe(sass({
      includePaths: SASS_INCLUDE_PATHS,
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./source/scss/**/*.scss', ['sass']);
});


gulp.task('default', ['sass'], function() {

});
