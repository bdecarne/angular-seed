'use strict';

require('require-dir')('./build');
var gulp = require('gulp');
var del = require('del');

/**
 * build
 **/
gulp.task('build:dist', ['clean', 'styles:dist', 'scripts:dist', 'assets:dist', 'html:dist', 'copy:dist']);

/**
 * clean
 * @todo : https://github.com/gulpjs/gulp/blob/master/docs/recipes/running-tasks-in-series.md
 * @see https://github.com/gulpjs/gulp/issues/686
 **/
gulp.task('clean', function () {
    return del.sync(['.tmp', 'dist']);
});
