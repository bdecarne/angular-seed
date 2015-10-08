'use strict';

var gulp = require('gulp');

gulp.task('watch', ['styles', 'scripts', 'templates'] ,function () {
    gulp.watch(['app/**/*.scss'], ['styles']);
    gulp.watch(['app/**/*.js', 'config/config.yml'], ['scripts']);
    gulp.watch('app/**/*.html', ['templates']);
});
