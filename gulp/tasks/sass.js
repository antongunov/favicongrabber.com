const gulp = require('gulp');

/**
 * Gulp plugins
 */

const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const { log, colors } = require('gulp-util');

/**
 * PostCSS plugins
 */

const autoprefixer = require('autoprefixer');
const normalize = require('postcss-normalize');
const fontMagician = require('postcss-font-magician');

/**
 * Log errors nicely
 */

const logError = end => (err) => {
  const file = colors.magenta(`./${err.relativePath}`);
  const status = colors.red.bold('[failed]');

  log(`[${colors.blue('sass')}] process file ${file} ${status}`);

  console.error(`\nERROR in ./${err.message}`);

  return end();
};

/**
 * Gulp tasks
 */

gulp.task('sass', done => gulp.src('server/pages/assets/sass/main.scss')
    .pipe(sass())
    .on('error', logError(done))
    .pipe(postcss([
      normalize(),
      fontMagician({
        hosted: ['server/pages/assets/fonts/'],
      }),
      autoprefixer({
        cascade: false,
      }),
    ]))
    .pipe(gulp.dest('build/assets/css/')));
