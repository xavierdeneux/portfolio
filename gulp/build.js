'use strict';

var gulp              = require('gulp');
var $                 = require('gulp-load-plugins')({pattern: ['gulp-*']});
var browserSync       = require('browser-sync');
var mainBowerFiles    = require('main-bower-files');
var uglifySaveLicense = require('uglify-save-license');

var AUTOPREFIXER_BROWSERS = ['last 2 version'];

// Compile Any Other Sass Files You Added (app/styles)
gulp.task('styles', function () {
    return gulp.src('app/styles/main.scss')
        .pipe($.sass({
            style: 'expanded',
            precision: 10
        }))
        .pipe($.autoprefixer({
            browsers: AUTOPREFIXER_BROWSERS
        }))
        .on('error', console.error.bind(console))
        .pipe(gulp.dest('.tmp/styles'))
        .pipe(browserSync.reload({stream:true}))
        .pipe($.size({title: 'styles'}));
});

// Lint JavaScript
gulp.task('scripts', function () {
    return gulp.src('app/scripts/**/*.js')
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.size({title: 'scripts'}));
});

// Converting html partials (directives, controller)
// to javascript.
// pre-load HTML code into the $templateCache.
// This way AngularJS doesn't need to request the actual HTML files anymore
gulp.task('partials', function () {
    return gulp.src('app/views/**/*.html')
        // JDY: Minification breaks the html layout as of 2014.11.27
        /*
        .pipe($.minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        */
        .pipe($.ngHtml2js({
            moduleName: 'ofsBoProApp',
            prefix: "views/"
        }))
        .pipe(gulp.dest('.tmp/views'))
        .pipe($.size());
});

// Scan Your HTML For Assets & Optimize Them
gulp.task('html', ['styles', 'partials', 'scripts'], function () {
    var jsFilter = $.filter('**/*.js');
    var cssFilter = $.filter('**/*.css');
    var htmlFilter = $.filter('*.html');
    var assets = $.useref.assets({searchPath: '{.tmp,app}'});

    return gulp.src('app/*.html')
        .pipe($.inject(gulp.src('.tmp/views/**/*.js'), {
            read: false,
            starttag: '<!-- inject:partials -->',
            addRootSlash: false,
            addPrefix: '../'
        }))

        // Concatenate with useref
        .pipe(assets)

        // Minify JavaScript
        .pipe(jsFilter)
        .pipe($.ngAnnotate())
        .pipe($.uglify({preserveComments: uglifySaveLicense}))
        .pipe(jsFilter.restore())

        // Minify Styles
        .pipe(cssFilter)
        .pipe($.csso())
        .pipe($.replace('bower_components/bootstrap-sass-official/vendor/assets/fonts/bootstrap','fonts'))
        .pipe(cssFilter.restore())

        // Static asset revisioning by appending content hash to filenames
        // eg: unicorn.css → unicorn-098f6bcd.css
        .pipe($.rev())

        .pipe(assets.restore())
        .pipe($.useref())

        // Substitute in new filename
        .pipe($.revReplace())

        // HTML files minification
        .pipe(htmlFilter)
        .pipe($.minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(htmlFilter.restore())

        // Write file in dest directory
        .pipe(gulp.dest('dist'))
        .pipe($.size({title: 'html'}));
});

// Optimize Images
gulp.task('images', function () {
    return gulp.src(['app/images/**/*', '!app/images/**/*.svg'])
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true,
            svgoPlugins: [{removeViewBox: false}],
        })))
        .pipe(gulp.dest('dist/images'))
        .pipe($.size({title: 'images'}));
});


// Copy All Files At The Root Level (app)
// And some extra resources
//  - html partials for directives and controllers
//  - translations
//  - svg files
gulp.task('misc', function () {
    return gulp.src(['app/*.*', '!app/*.html', 'app/translations/**.json', 'app/images/**/*.svg'], {dot: true, base: 'app'})
        .pipe(gulp.dest('dist'))
        .pipe($.size({title: 'copy'}));
});

// Fonts from bower dependencies if needed (gylphicons, font-awsome, ...)
gulp.task('fonts', function () {
    return gulp.src(mainBowerFiles())
        .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
        .pipe($.flatten())
        .pipe(gulp.dest('dist/fonts'))
        .pipe($.size());
});

// Other bower dependenciesa
//  - select 2 icons
gulp.task('bowerfiles', function () {
    return gulp.src(mainBowerFiles())
        .pipe($.filter('**select2*.{png,jpg,gif,ico,svg}'))
        .pipe(gulp.dest('dist/styles'))
        .pipe($.size());
});

gulp.task('build', ['html', 'images', 'fonts', 'bowerfiles', 'misc']);
