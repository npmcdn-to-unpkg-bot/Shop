var gulp = require('gulp');
var sass = require('gulp-sass');
var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var livereload = require('gulp-livereload');
var myth = require('gulp-myth');
var csso = require('gulp-csso');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var connect = require('connect');

/*SASS*/
gulp.task('sass', function () {
    return gulp.src('../stylus/style.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('../stylus'))   
      .pipe(gulp.dest('../../build/stylus'));
});
/* Min CSS*/
gulp.task('cssminify', function(){
	 gulp.src('../../build/*.css')
     .on('error', console.log)
	 .pipe(csso())
     .on('error', console.log)
	 .pipe(gulp.dest('../../build/'));
});
/*Images*/
gulp.task('images', function() {
    gulp.src('../img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('../../build/img'));
});
gulp.task('html', function() {
    gulp.src('../*.html')
        .pipe(gulp.dest('../../build/'));
});
/*Copy files in src folder*/
gulp.task('default', ['sass', 'images' , 'cssminify', 'html']);