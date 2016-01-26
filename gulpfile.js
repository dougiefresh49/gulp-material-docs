var gulp = require('gulp'),
    del = require('del'),
    runSequence = require('run-sequence'),
    plugins = require('gulp-load-plugins')({lazy: true}),
    config = require('./config/gulp/gulp.config.js')(),
    materialDocs = require('./index.js'),
    packageJson = require('./package.json');

/* Main Task for Building */
gulp.task('default', function(callback) {
    runSequence(
        'clean',
        'build',
        'minify',
        'docs',
        callback);
});

/* Main Task for Running / Building Locally */
gulp.task('dev', function(callback) {
    runSequence(
        'clean',
        'build',
        'docs:make',
        'docs:inject::dev',
        callback);
});

/////////////

/* Sub-Tasks */
gulp.task('docs', function(callback) {
    runSequence(
        'docs:make',
        'docs:inject',
        callback);
});

gulp.task('docs:make', function() {
    var sections = {
        materialDocs: {
            glob: config.allJs,
            title: 'Website'
        }
    };

    var options = {
        html5Mode: false,
        title: "Gulp Material Docs",
        startPage: '/materialDocs',
        imageLink: "https://github.com/dougiefresh49/gulp-material-docs",
        titleLink: "/materialDocs"
    };

    return materialDocs
        .sections(sections)
        .pipe(materialDocs.make(options))
        .pipe(gulp.dest(config.folders.docs));
});

gulp.task('docs:inject', function() {
    var toInject = gulp.src(materialDocs.srcToInject('docs/'), { read: false });

    return gulp
        .src('docs/index.html')
        .pipe(plugins.inject(toInject, {ignorePath: 'docs', addRootSlash: false}))
        .pipe(gulp.dest('docs/'));
});

gulp.task('docs:inject::dev', function() {
    var toInject = gulp.src(config.toInject.dev, { read: false });

    return gulp
        .src('docs/index.html')
        .pipe(plugins.inject(toInject, {ignorePath: 'docs', addRootSlash: false}))
        .pipe(gulp.dest('docs/'));
});


gulp.task('clean', function(callback) {
    return del([
            config.folders.dist,
            config.folders.temp,
            config.folders.usrDocs
        ],
        { force: true }
        , callback);
});

gulp.task('build', ['build:app', 'build:assets', 'build:html']);


gulp.task('build:app', ['build:template-cache'], function() {
    var allJs = [].concat(config.allJs, config.folders.temp + config.templateCache.file);

    return gulp
        .src(allJs)
        .pipe(plugins.concat('material-docs.js'))
        .pipe(plugins.insert.prepend(getScriptHeader()))
        .pipe(gulp.dest(config.folders.dist));
});

gulp.task('build:assets', ['build:sass', 'build:images']);

gulp.task('build:images', function() {
    return gulp
        .src(['src/assets/images/**/*'])
        .pipe(gulp.dest('dist/'));
});

gulp.task('build:sass', function() {
   return gulp
       .src(config.folders.src + 'assets/styles/style.scss')
       .pipe(plugins.sass().on('error', plugins.sass.logError))
       .pipe(gulp.dest(config.folders.src + 'assets/styles/'))
       .pipe(plugins.rename('material-docs.css'))
       .pipe(gulp.dest(config.folders.dist));
});

gulp.task('build:html', function() {
    return gulp
        .src('src/index.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('build:template-cache', function() {
    return gulp
        .src(['src/app/**/*.html'])
        .pipe(plugins.angularHtmlify())
        .pipe(plugins.minifyHtml({empty: true}))
        .pipe(plugins.angularTemplatecache(
            config.templateCache.file,
            config.templateCache.options
        ))
        .pipe(gulp.dest(config.folders.temp));
});

gulp.task('minify', ['minify:app', 'minify:css']);

gulp.task('minify:app', function() {
    var src = [
        config.folders.dist + '*.js',
        '!' + config.folders.dist + '*.min.js'
    ];

    return gulp
        .src(src)
        .pipe(plugins.stripDebug())
        .pipe(plugins.uglify())
        .pipe(plugins.insert.prepend(getScriptHeader()))
        .pipe(plugins.rename({extname: '.min.js'}))
        .pipe(gulp.dest(config.folders.dist));
});

gulp.task('minify:css', function() {
    return gulp
        .src('./dist/material-docs.css')
        .pipe(plugins.cssnano())
        .pipe(plugins.rename({extname: '.min.css'}))
        .pipe(plugins.insert.prepend(getScriptHeader()))
        .pipe(gulp.dest(config.folders.dist));
});

/* --- Helper Functions --- */
function getScriptHeader() {
    return '/*\n' +
    '  Gulp Material Docs v' + packageJson.version + ' \n' +
    '  https://github.com/dougiefresh49/gulp-material-docs \n' +
    '  License: MIT \n' +
    '*/ \n'
}