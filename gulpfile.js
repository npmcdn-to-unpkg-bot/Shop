var gulp = require('gulp');
sass = require('gulp-sass'),
watch = require('gulp-watch'),
babel = require('gulp-babel'),
concat = require('gulp-concat'),
prefixer = require('gulp-autoprefixer'),
sourcemaps = require('gulp-sourcemaps'),
csso = require('gulp-csso'),
imagemin = require('gulp-imagemin'),
uglify = require('gulp-uglify'),
browserSync = require("browser-sync"),
react = require('gulp-react'),
reload = browserSync.reload;
 

var path = {
    build: {
        html: 'build/',
        js: 'build/js/',
        style: 'build/stylus/',
        img: 'build/img/'
    },
    libs: [
      'bower_components/react/react.js',
      'bower_components/react/react-dom.js',
    ],
    src: {
        html: 'src/*.html',
        js: 'src/js/*.js',
        jsx: 'src/js/*.jsx',
        style: 'src/stylus/*.scss',
        img: 'src/img/**/*.*'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.*',
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
/* Libs*/
gulp.task('libs', function() {
  return gulp.src(path.libs)
    .pipe(sourcemaps.init())
    .pipe(concat('libs.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.build.js))
})
/* JSX-build*/
gulp.task('react', function () {
    return gulp.src(path.src.jsx)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['react']
        }))
        .pipe(concat('build.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path.build.js));
});
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
    watch([path.watch.js], function(event, cb) {
        gulp.start('js');
    });
});

gulp.task('build', ['react', 'style-build', 'images', 'html', 'libs']);
gulp.task('server', ['webserver', 'watch']);
gulp.task('default', ['build', 'server']);
