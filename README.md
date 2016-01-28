# Gulp Material Docs
A gulp plugin to create Material Design inspired documentation

[![travis build](https://img.shields.io/travis/dougiefresh49/gulp-material-docs.svg?style=flat-square)](https://travis-ci.org/dougiefresh49/gulp-material-docs)
[![codecov coverage](https://img.shields.io/codecov/c/github/dougiefresh49/gulp-material-docs.svg?style=flat-square)](https://codecov.io/github/dougiefresh49/gulp-material-docs)
[![version](https://img.shields.io/npm/v/gulp-material-docs.svg?style=flat-square)](http://npm.im/gulp-material-docs)
[![downloads](https://img.shields.io/npm/dm/gulp-material-docs.svg?style=flat-square)](http://npm-stat.com/charts.html?package=gulp-material-docs&from=2016-23-01)
[![MIT License](https://img.shields.io/npm/l/gulp-material-docs.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

## Why Material Docs?
`gulp-material-docs` document generator is a beautiful AND easy way to display your docs based on Google's
[Material Design Patterns](https://www.google.com/design/spec/material-design/introduction.html).

`gulp-material-docs` built right on top of [gulp-ngdocs](https://github.com/nikhilmodak/gulp-ngdocs) but with an
entirely rebuilt internals for optimized performance. See below for features supported and those that are coming soon.

## Setup
`npm install --save-dev gulp-material-docs`

## Usage
With two simple gulp tasks, you will have your beautiful docs ready to go

1. Setup at the top of the gulpfile

```js
var gulp = require('gulp'),
    materialDocs = require('gulp-material-docs'),
    inject = require('gulp-inject');
```

2. The main task that makes the documents

```js
gulp.task('docs:make', function() {
    var sections = {
        materialDocs: {
            // Files to load into the defined section
            glob: [
                'src/**/*module.js',
                'src/**/*config.js',
                'src/**/*.js',
                '!src/**/*spec.js'
            ],
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
        .pipe(gulp.dest('docs/'));
});
```

3. The inject task, which will inject the dependency files into the generated docs/index.html file

```js
gulp.task('docs:inject', ['docs:make'], function() {
    // get the default list of sources to inject to the docs/index.html file
    var toInject = gulp.src(materialDocs.srcToInject('docs/'), { read: false });

    return gulp
        .src('docs/index.html')
        .pipe(inject(toInject, {ignorePath: 'docs', addRootSlash: false}))
        .pipe(gulp.dest('docs/'));
});
```
