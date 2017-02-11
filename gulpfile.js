var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var mmq = require('gulp-merge-media-queries');
var prefix = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');

//***********************************************************//

gulp.task('connect', function() {
    connect.server({
        root: './',
        livereload: true
    });
});

gulp.task('main', function () {
    gulp.src(mainBowerFiles('**/*.js'))
        .pipe(gulp.dest('dist/js'));
    gulp.src(mainBowerFiles('**/*.css'))
        .pipe(gulp.dest('dist/css'));
    gulp.src(mainBowerFiles('**/*.{eot,svg,ttf,woff,woff2}'))
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('less', function() {
    return gulp.src('src/less/style.less')
        .pipe(less())
        .pipe(prefix())
        .pipe(mmq())
        .pipe(gulp.dest('dist/css/'))
        .pipe(connect.reload());
});

gulp.task('js', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('script.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(connect.reload());
});

gulp.task('html', function() {
    return gulp.src('*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('src/less/*.less', ['less']);
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch('*.html', ['html']);
    gulp.watch('dist/articles/*.html', ['html']);
});

gulp.task('default', ['connect', 'less', 'js', 'watch']);
