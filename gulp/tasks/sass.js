const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const plumber = require('gulp-plumber');

const autoprefixer = require('autoprefixer');
const normalize = require('postcss-normalize');
const fontMagician = require('postcss-font-magician');

gulp.task('sass', () => gulp.src('assets/sass/main.scss')
    .pipe(plumber())
    .pipe(sass({ includePaths: ['node_modules/'] }))
    .pipe(postcss([
      normalize(),
      fontMagician({ hosted: ['assets/fonts/'] }),
      autoprefixer({ cascade: false }),
    ]))
    .pipe(gulp.dest('build/assets/css/')));
