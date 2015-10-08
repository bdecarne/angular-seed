'use strict';

var gulp = require('gulp');

var browserSync = require('browser-sync');
var modRewrite = require('connect-modrewrite');
var url = require('url');

function browserSyncInit(baseDir, files, browser) {
    browser = browser === undefined ? 'default' : browser;

    var rewrite = modRewrite(['!\.html|\.woff|\.js|\.ttf|\.svg|\.css|\.png|\.jpg /index.html [L]']);

    // connect middlewares
    var middlewares = [rewrite];

    var options = {
        //startPath: '/index.html',
        server: {
            baseDir: baseDir,
            middleware: middlewares
        },
        browser: browser,
        open: false
    };

    if(files) {
        options.files = files;
    }

    browserSync(options);
}

gulp.task('serve', ['watch'], function () {
    browserSyncInit([
        '.tmp/templates',
        '.tmp',
        'app'
    ], [
        '.tmp/styles/**/*.css',
        '.tmp/scripts/**/*.js',
        '.tmp/templates/**/*.html',
        'app/*.html'
    ]);
});

gulp.task('serve:dist', ['build:dist'], function () {
    browserSyncInit('dist');
});
