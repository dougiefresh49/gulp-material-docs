var gulp = require('gulp'),
    sass = require('gulp-sass');


gulp.task('default', function() {
    console.log('default gulp task');
});


gulp.task('compile-sass', function() {
   return gulp
       .src('src/assets/styles/style.scss')
       .pipe(sass().on('error', sass.logError))
       .pipe(gulp.dest('src/assets/styles/'));
});