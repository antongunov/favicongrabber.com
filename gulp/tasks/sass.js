const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const plumber = require('gulp-plumber');

gulp.task('sass', () => gulp.src('assets/sass/main.scss')
    .pipe(plumber())
    .pipe(sass({ includePaths: ['node_modules/'] }))
    .pipe(postcss())
    .pipe(gulp.dest('build/assets/css/')));
