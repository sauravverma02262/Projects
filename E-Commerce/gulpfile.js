var gulp = require('gulp');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var css = require('gulp-css');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');

gulp.task('serve', function() {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    
    gulp.watch("./index.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src([
            
        ])
        .pipe(sass()).on('error', sass.logError)

    .pipe(concat("bundle.css"))
        .pipe(cssmin())
        .pipe(gulp.dest("./dist/"));
});

gulp.task('scripts', function() {
    return gulp.src([
           
        ])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest("./dist/"))

});

gulp.task('default', ['server']);