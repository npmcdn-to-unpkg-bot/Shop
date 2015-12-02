var gulp = require('gulp');
babel = require('gulp-babel'),
sass = require('gulp-sass'),
watch = require('gulp-watch'),
babel = require('gulp-babel'),
plumber = require('gulp-plumber'),
concat = require('gulp-concat'),
prefixer = require('gulp-autoprefixer'),
sourcemaps = require('gulp-sourcemaps'),
csso = require('gulp-csso'),
browserify = require('browserify'),
babelify = require('babelify'),
imagemin = require('gulp-imagemin'),
uglify = require('gulp-uglify'),
source = require('vinyl-source-stream'),
browserSync = require('browser-sync'),
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
        'bower_components/react/JSXTransformer.js',
    ],
    src: {
        html: 'src/*.html',
        js: 'src/js/**/*.js',
        jsx: 'src/js/**/*.jsx',
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
        .pipe(babel({
            presets: ['es2015' , 'react']
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
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path.build.style))
        .pipe(reload({stream: true}));
});

/*Images*/
gulp.task('images', function() {
    gulp.src(path.src.img)
        .pipe(imagemin())
        .pipe(gulp.dest(path.build.img));
});
gulp.task('JS1', function () {
		browserify({
			entries: 'build/js/build.js',
			debug: true,
			paths: ['build/js/', 'node_modules/'],
			insertGlobals: true,
		})
        .transform(babelify)
		.bundle()
        .on("error", function (err) { console.log("Error : " + err.message); })
        .pipe(plumber())
        .pipe(source('build.js'))
		.pipe(gulp.dest('build/js/'));
});	
/*Copy files in src folder*/
gulp.task('html', function() {
    gulp.src(path.src.html)
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});
/*Copy JS*/
gulp.task('JS', function() {
    gulp.src(path.src.js)
        .pipe(gulp.dest(path.build.js))
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
        gulp.start('react');
    });
        watch([path.watch.js], function(event, cb) {
        gulp.start('JS');
    });
});

gulp.task('build', ['react', 'style-build', 'images', 'html', 'libs', 'JS']);

gulp.task('server', ['webserver', 'watch']);
gulp.task('default', ['build', 'server']);
