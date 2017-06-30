var gulp = require('gulp')
var stylus = require('gulp-stylus')
var livereload = require('gulp-livereload')

gulp.task('css', function() {
    return gulp.src('css/**/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('assets'))
        .pipe(livereload())
})

gulp.task('watch:css', ['css'], function() {
    gulp.watch('css/**/*.styl', ['css'])
})