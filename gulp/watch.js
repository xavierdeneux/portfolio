'use strict';

var gulp = require('gulp');

// Watch Files For Changes with Gulp & execute required tasks
gulp.task('watch', function () {
    // scss -> css files
    gulp.watch(['app/styles/**/*.scss'], ['styles']);

    // js lint
    gulp.watch(['app/scripts/**/*.js'], ['scripts']);

    // images processing
    gulp.watch(['app/images/**/*'], ['images']);

    // bower dependencies
    gulp.watch(['bower.json'], ['wiredep']);
});
