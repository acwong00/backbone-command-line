var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    webpack = require('gulp-webpack'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('lint', function  () {
    gulp.src('./js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('webpack', function () {
    gulp.src('./test.js')
        .pipe(webpack())
        .pipe(gulp.dest('dist/'));
});

gulp.task('scripts', function() {
    gulp.src('./dist/*.js')
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', function(){
    gulp.run('lint', 'webpack', 'scripts');

    // 监听文件变化
    // gulp.watch('./js/*.js', function(){
    //     gulp.run('lint', 'sass', 'scripts');
    // });
});