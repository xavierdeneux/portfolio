'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync');

// Server content with BrowserSync
gulp.task('serve', ['styles', 'watch'], function () {
    browserSync({
        open: false,
        notify: true,
        files: [
            'app/**/*.html',
            'app/scripts/**/*.js',
            'app/images/**/*'
        ],
        server: {
            baseDir: ['.tmp', 'app']
        }
    });
});

// Build and serve the output from the dist build
gulp.task('serve:dist', ['build'], function () {
    browserSync({
        notify: false,
        server: {
            baseDir: 'dist'
        }
    });
});
