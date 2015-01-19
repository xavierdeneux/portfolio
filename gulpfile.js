'use strict';

// Include Gulp & Tools We'll Use
var gulp = require('gulp');
var del  = require('del');

// load additional tasks defined in the gulp directory
require('require-dir')('./gulp');

// Clean Output Directories
gulp.task('clean', function (done) {
    del(['.tmp', 'dist'], done);
});

// Default gulp task = clean -> build
gulp.task('default', ['clean'], function () {
    gulp.start('build');
});
