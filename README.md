# Gulp Material Docs
A gulp plugin to create Material Design inspired documentation

[![travis build](https://img.shields.io/travis/dougiefresh49/gulp-material-docs.svg?style=flat-square)](https://travis-ci.org/dougiefresh49/gulp-material-docs)
[![codecov coverage](https://img.shields.io/codecov/c/github/dougiefresh49/gulp-material-docs.svg?style=flat-square)](https://codecov.io/github/dougiefresh49/gulp-material-docs)
[![version](https://img.shields.io/npm/v/gulp-material-docs.svg?style=flat-square)](http://npm.im/gulp-material-docs)
[![downloads](https://img.shields.io/npm/dm/gulp-material-docs.svg?style=flat-square)](http://npm-stat.com/charts.html?package=gulp-material-docs&from=2016-23-01)
[![MIT License](https://img.shields.io/npm/l/gulp-material-docs.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

## Table of Contents

  1. [Why Material Docs?](#why-material-docs)
  1. [Setup](#setup)
  1. [Usage](#usage)
  1. [Options](#options)
  1. [Demo](#demo)
  1. [Building Material Docs Locally](#building-material-docs-locally)
  1. [Future Features](#future-features)

## Why Material Docs?
`gulp-material-docs` document generator is a beautiful AND easy way to display your docs based on Google's
[Material Design Patterns](https://www.google.com/design/spec/material-design/introduction.html).

`gulp-material-docs` built right on top of [gulp-ngdocs](https://github.com/nikhilmodak/gulp-ngdocs) but with an
entirely rebuilt internals for optimized performance. See below for features supported and those that are coming soon.

## Setup
`npm install --save-dev gulp-material-docs`

## Usage
With two simple gulp tasks, you will have your beautiful docs ready to go

* Setup at the top of the gulpfile

```js
var gulp = require('gulp'),
    materialDocs = require('gulp-material-docs'),
    inject = require('gulp-inject');
```

* The main task that makes the documents

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

* The inject task, which will inject the dependency files into the generated docs/index.html file

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

### Supplying your own Angular Version

* In the main task, add the `scripts` list to the `options`

```js
var options = {
        html5Mode: false,
        title: "Gulp Material Docs",
        startPage: '/materialDocs',
        scripts: [
            'bower_components/angular/angular.min.js',
            'bower_components/angular-animate/angular-animate.min.js'
        ],
        imageLink: "https://github.com/dougiefresh49/gulp-material-docs",
        titleLink: "/materialDocs"
    };
```

* and in the inject step, simply pass the angular paths to `srcToInject` function 
[link to source file for  more details](https://github.com/dougiefresh49/gulp-material-docs/blob/master/index.js#L30-L47)

```js

var angularOptions = {
    angularPath: 'bower_components/angular/angular.min.js',
    ngAnimatePath: 'bower_components/angular-animate/angular-animate.min.js'
};

var toInject = gulp.src(materialDocs.srcToInject('docs/', angularOptions), { read: false });
```

## Options

Most options supported by [gulp-ngdocs](https://github.com/nikhilmodak/gulp-ngdocs#options) are supported or will be in
the future. See [currently unsupported options](#currently-unsupported-options) for more details and
[Additional Options](#additional-options) for new options not supported by gulp-ngdocs.

### Currently Unsupported Options

###### [[analytics](https://github.com/nikhilmodak/gulp-ngdocs#analytics)] {object}
  - Coming soon.

###### [[discussions](https://github.com/nikhilmodak/gulp-ngdocs#discussions)]
  - Coming soon.

###### [[bestMatch](https://github.com/nikhilmodak/gulp-ngdocs#bestmatch)] {bool}
  - Best match will always occur on submission of search form. Other results will still be visible in the left nav bar.

###### [[navTemplate](https://github.com/nikhilmodak/gulp-ngdocs#navtemplate)] {string}

### Additional Options

###### [legal] {object}
  - The legal object is a container for links / text in the footer of the left navbar.

  ```js
  var legal = {
    companyName: 'Some Company',
    privacyLink: 'http://www.google.com/intl/en/policies/privacy/'
    termsLink: 'http://www.google.com/intl/en/policies/terms/'
  };
  ```

###### [nodeModulesDir] {string} default: `node_modules/gulp-material-docs/`
  - The path to your node modules, relative to your gulpfile.js

  Example: Given the folder structure...
  ```js
  | - config
  | - dist
  | - docs
  | - node_modules
  | - src
  | - gulpfile.js
  ```
  the default path will work


###### [favicon] {string} default: `''`
  - The path to your .ico file used for the title icon of the docs site.

  Example: Given the folder structure...
  ```js
  | - config
  | - dist
      | -- material-docs.ico
  | - docs
  | - src
      | -- app
      | -- assets
           | -- images
                | -- material-docs.ico

  ```
  The favico path would be written as such

  ```js
  var faviconPath = 'dist/material-docs.ico'
  ```

  OR

  ```js
  var faviconPath = 'src/assets/images/material-docs.ico'
  ```


## Demo
A full working demo will be available soon. For now, please follow the steps for
[Building Material Docs Locally](#building-material-docs-locally).

## Building Material Docs Locally
1. Clone the repository from [GitHub](https://github.com/dougiefresh49/gulp-material-docs)

    `git clone https://github.com/dougiefresh49/gulp-material-docs.git`

2. Install the dependencies

    `npm install`

3. Build release or development version

    **Release**
        `gulp default`

    **Development**
        `gulp dev`

4. Run the Docs

    Open `docs/index.html` with a localhost server
    *Note:* local gulp serve task will be added in the future for easier development


## Future Features
  - add mode detailed styling for chapter content and ngdoc files
  - add ability to provide angular version and change color scheme
  - add ability for direct source link (docs to code)
  - add ability to show type for property
  - functions - public or private support

