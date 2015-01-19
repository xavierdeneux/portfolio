'use strict';

var gulp    = require('gulp');
var $       = require('gulp-load-plugins')();
var wiredep = require('wiredep');
var karma   = require('karma').server;

gulp.task('test', function() {
    // JDY: maybe there is a way to generate the configuration file from this !
    /*
    // Dependencies libs to include as defined in bower
    var bowerDeps = wiredep({
        directory: 'app/bower_components',
        exclude: ['bootstrap-sass-official'],
        dependencies: true,
        devDependencies: true
    });
    */

    // Add the project's javascript files
    //var testFiles = bowerDeps.js.concat([
    //    'app/scripts/**/*.js',
    //    'test/unit/**/*.js'
    //]);
    karma.start({
        configFile: __dirname + '/../karma.conf.js',
        singleRun: true
    }, karma.done);
});
