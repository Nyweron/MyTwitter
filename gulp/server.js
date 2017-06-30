var gulp = require('gulp')
var nodemon = require('gulp-nodemon')

gulp.task('dev:server', function() {
    nodemon({
        script: 'server.js',
        ext: 'js',
        ignore: ['ng*', 'gulp*', 'assets*']
    })
})

gulp.task('dev', ['watch:css', 'watch:js', 'dev:server'])