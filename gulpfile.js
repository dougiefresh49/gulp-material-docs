var gulp = require('gulp'),
    del = require('del'),
    runSequence = require('run-sequence'),
    plugins = require('gulp-load-plugins')({lazy: true}),
    config = require('./config/gulp/gulp.config.js')(),
    materialDocs = require('./index.js');


gulp.task('default', function(callback) {
    runSequence(
        'clean',
        'build',
        'minify',
        'inject',
        callback);
});

gulp.task('dev', function(callback) {
    runSequence(
        'clean',
        'build',
        'inject:dev',
        callback);
});

gulp.task('docs', function() {
    // TODO: this will build the docs for the material doc generator :O
    var sections = {
        materialDocs: {
            glob: config.allJs,
            title: 'Material Docs'
        }
    };

    var options = {
        html5Mode: false,
        title: "Gulp Material Docs",
        startPage: '/materialDocs',
        image: '',
        imageLink: "https://github.com/dougiefresh49/gulp-material-docs",
        titleLink: "/materialDocs",
        //template: config.folders.dist + 'index.html',
        poop: 'poop'
    };

    return materialDocs
        .sections(sections)
        .pipe(materialDocs.make(options))
        .pipe(gulp.dest(config.folders.docs));

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

gulp.task('build', ['build:app', 'build:sass']);


gulp.task('build:app', ['build:template-cache'], function() {
    var allJs = [].concat(config.allJs, config.folders.temp + config.templateCache.file);

    return gulp
        .src(allJs)
        .pipe(plugins.concat('material-docs.js'))
        .pipe(gulp.dest(config.folders.dist));
});

gulp.task('build:sass', function() {
   return gulp
       .src(config.folders.src + 'assets/styles/style.scss')
       .pipe(plugins.sass().on('error', plugins.sass.logError))
       .pipe(gulp.dest(config.folders.src + 'assets/styles/'))
       .pipe(plugins.rename('material-docs.css'))
       .pipe(gulp.dest(config.folders.dist));
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

gulp.task('inject', function() {
    console.log(config.toInject.prod);
    var sources = gulp.src(config.toInject.prod, { read: false });

    return gulp
        .src('src/index.html')
        .pipe(plugins.inject(sources, {ignorePath: 'dist', addRootSlash: false}))
        .pipe(gulp.dest('dist/'));
});


gulp.task('inject:dev', function() {
    var sources = gulp.src(config.toInject.dev, { read: false });

    return gulp
        .src('src/index.html')
        .pipe(plugins.inject(sources, {ignorePath: 'dist', addRootSlash: false}))
        .pipe(gulp.dest('dist/'));

});

gulp.task('minify', ['minify:app', 'minify:css']);

gulp.task('minify:app', function() {
    // TODO: add package text
    var src = [
        config.folders.dist + '*.js',
        '!' + config.folders.dist + '*.min.js'
    ];

    return gulp
        .src(src)
        .pipe(plugins.stripDebug())
        .pipe(plugins.uglify())
        .pipe(plugins.rename({extname: '.min.js'}))
        .pipe(gulp.dest(config.folders.dist));
});

gulp.task('minify:css', function() {
    return gulp
        .src('./dist/material-docs.css')
        .pipe(plugins.cssnano())
        .pipe(plugins.rename({extname: '.min.css'}))
        .pipe(gulp.dest(config.folders.dist));
});