var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    brfs = require('gulp-brfs'),
    nodemon = require('gulp-nodemon'),
    stylus = require('gulp-stylus'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps');

paths = {
    src: {
        root: './',
        html: './src/app.html',
        styl: './src/styl/**',
        styl_main: './src/styl/main.styl',
        js: './src/app/**',
        js_app: './src/app/app.js',
        img: './src/img/**'
    },
    dist: {
        root: './public',
        css: './public/css',
        js: './public/js',
        img: './public',
        vendor: './public/vendor'
    }
};
/*
gulp.task('nodemon', function () {
    nodemon({
        script: 'server.js',
        ext: 'js',
        env: {
            'NODE_ENV': 'development'
        }
    })
        .on('start', ['watch'])
        .on('change', ['watch'])
        .on('restart', function () {
            console.log('restarted!');
        });
});
*/
gulp.task('browserify', function() {
    return browserify(paths.src.js_app)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(brfs())
        .pipe(gulp.dest(paths.dist.js));
});

gulp.task('styl', function() {
    gulp.src(paths.src.styl_main)
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.dist.css));
});

gulp.task('html', function() {
    gulp.src(paths.src.html)
        .pipe(gulp.dest(paths.dist.root));
});

gulp.task('img', function() {
    gulp.src(paths.src.img)
        .pipe(gulp.dest(paths.dist.img));
});

gulp.task('watch', function() {
    gulp.watch(paths.src.html, ['html']);
    gulp.watch(paths.src.styl, ['styl']);
    gulp.watch(paths.src.img, ['img']);
    gulp.watch(paths.src.js, ['browserify']);
});

gulp.task('default', ['img','styl','browserify','watch']);