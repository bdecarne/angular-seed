'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*']
});

/**
 * config
 **/
gulp.task('config', function() {
    return gulp.src('./config/config.yml')
      .pipe($.yaml())
      .pipe($.extend('config.js'))
      .pipe($.wrap('angular.module(\'app.config\', []).constant(\'appConfig\', <%= contents %>);'))
      .pipe(gulp.dest('./.tmp/scripts'))
      .pipe($.size());
});

/**
 * scripts
 **/
gulp.task('scripts', ['config'], function() {
    return gulp.src(['app/scripts/app.js', '.tmp/scripts/config.js'])
        .pipe($.include())
        .pipe($.concat('app.js'))
        .pipe(gulp.dest('.tmp/scripts'))
        .pipe($.size());
});

gulp.task('scripts:dist', ['scripts', 'templates:dist'], function() {
    return gulp.src(['.tmp/scripts/app.js', '.tmp/templates/templates.js'])
        .pipe($.concat('app.js'))
        .pipe($.ngAnnotate())
        .pipe($.uglify().on('error', console.error.bind(console)))
        .pipe(gulp.dest('dist/scripts'))
        .pipe($.size());
});
