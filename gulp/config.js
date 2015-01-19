'use strict';

var gulp     = require('gulp');
var minimist = require('minimist');
var $        = require('gulp-load-plugins')({pattern: ['gulp-*']});
var fs = require('fs');

// Generate configuration file based on the given environment
gulp.task('config', function() {
    // read env parameter from argv, defaulting to 'development'
    var options = minimist(process.argv.slice(2), {
        string: 'env',
        default: { env: 'development' }
    });

    var jsonFile = fs.readFileSync('environments/' + options.env + '.json');
     
    //var jsonFile = require('environments/' + options.env + '.json');

    return gulp.src('environments/settings.js')
        .pipe($.replaceTask({
            patterns: [{
                json: JSON.parse(jsonFile)
            }]
        }))
        .pipe(gulp.dest('app'));
});
