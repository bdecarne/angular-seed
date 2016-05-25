'use strict';

var gulp = require('gulp');
var htmlify = require('gulp-angular-htmlify');
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*']
});

/**
 * angular templates
 **/
gulp.task('templates', function () {
  return gulp.src('app/scripts/**/*.html')
    .pipe(gulp.dest('.tmp/templates'))
    .pipe($.size());
});

gulp.task('templates:dist', ['templates'], function() {
  return gulp.src(['.tmp/templates/**/*.html'])
    .pipe($.angularHtmlify())
    .pipe($.htmlmin({
        removeComments: true,
        collapseWhitespace: true
    }))
    .pipe($.ngHtml2js({
      moduleName: 'app.templates',
      prefix: '',
      declareModule: false
    }))
    .pipe($.concat('templates.js'))
    .pipe(gulp.dest('.tmp/templates'))
    .pipe($.size());
});

/**
 * html
 **/
gulp.task('html:dist', function () {
  return gulp.src('app/*.html')
    .pipe($.angularHtmlify())
    .pipe($.htmlmin({
        removeComments: true,
        collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist'))
    .pipe($.size());
});
