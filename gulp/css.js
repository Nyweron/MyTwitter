var gulp = require('gulp')
var stylus = require('gulp-stylus')
var livereload = require('gulp-livereload')
var clean = require('gulp-clean')

gulp.task('clean-css', function() {
    return gulp.src('assets/*.css', { read: false })
        .pipe(clean());
});

gulp.task('css', function() {
    return gulp.src('css/**/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('assets'))
        .pipe(livereload())
})

gulp.task('watch:css', ['clean-css', 'css'], function() {
    gulp.watch('css/**/*.styl', ['css'])
})