const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const watch = require('gulp-watch');
const del = require('del');
const clr = require('colors');

// All our paths
const path = {
    ROOT_SRC: './src',
    DEST: './dist'
};

/**
 * CSS
 */
gulp.task('sass', function () {
    return gulp
        .src(path.ROOT_SRC + '/style/main.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(concat('app.css'))
        .pipe(gulp.dest(path.DEST));
});

/**
 * Assets
 */
gulp.task('assets', function () {
    return gulp
        .src(path.ROOT_SRC + '/assets/**/*')
        .pipe(gulp.dest(path.DEST + '/assets'));
});

/**
 * Main entry point
 */
gulp.task('default', ['sass', 'assets']);

/**
 * Clean up
 */
gulp.task('clean', function (cb) {
    return del(['static']);
});

/**
 * Watch task
 */
gulp.task('watch', ['sass'], function () {
    isDebug = true;
    console.log("Running in DEBUG MODE!".yellow);
    gulp.watch([path.ROOT_SRC + '/**/*.scss'], ['default']);
});