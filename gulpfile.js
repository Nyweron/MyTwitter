var gulp = require('gulp')
var concat = require('gulp-concat')

gulp.task('js', () => {
    gulp.src('ng/**/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('assets'))
})

gulp.task('watch:js', ['js'], () => {
    gulp.watch('ng/**/*.js', ['js'])
})