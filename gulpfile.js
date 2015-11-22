var gulp = require('gulp');
sass = require('gulp-sass'),
watch = require('gulp-watch'),
prefixer = require('gulp-autoprefixer'),
sourcemaps = require('gulp-sourcemaps'),
csso = require('gulp-csso'),
imagemin = require('gulp-imagemin'),
uglify = require('gulp-uglify'),
browserSync = require("browser-sync"),
reload = browserSync.reload; 

var path = {
    build: {
        html: 'build/',
        js: 'build/js/',
        style: 'build/stylus/',
        img: 'build/img/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/main.js',

        style: 'src/stylus/*.scss',
        img: 'src/img/**/*.*'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/stylus/**/*.scss',
        img: 'src/img/**/*.*'
    },
    clean: './build'
};

var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 8000,
    logPrefix: "Global-task"
};

/* CSS-build*/
gulp.task('style-build', function(){
    gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefixer())
        .pipe(csso())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.style))
        .pipe(reload({stream: true}));
});

/*Images*/
gulp.task('images', function() {
    gulp.src(path.src.img)
        .pipe(imagemin())
        .pipe(gulp.dest(path.build.img));
});

/*Copy files in src folder*/
gulp.task('html', function() {
    gulp.src(path.src.html)
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});
/*webserver*/
gulp.task('webserver', function () {
    browserSync(config);
});
/*watch*/
gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style-build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('images');
    });
});

gulp.task('default', ['style-build', 'images', 'html', 'webserver', 'watch']);