'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*']
});

/**
 * Copy root files except html into dist
 **/
gulp.task('copy:dist', function () {
  return gulp.src(['app/*.*', '!app/*.html'])
    .pipe(gulp.dest('dist'))
    .pipe($.size());
});
