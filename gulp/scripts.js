var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')
var gutil = require('gulp-util')
var sourcemaps = require('gulp-sourcemaps')
var livereload = require('gulp-livereload')

gulp.task('js', function() {
    return gulp.src(['ng/module.js', 'ng/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .on('error', function(err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('assets'))
        .pipe(livereload())
})

gulp.task('watch:js', ['js'], function() {
    gulp.watch('ng/**/*.js', ['js'])
})