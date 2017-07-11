const gulp = require('gulp');

/**
 * Gulp plugins
 */

const pug = require('gulp-pug');
const { log, colors } = require('gulp-util');

/**
 * Log errors nicely
 */

const logError = end => (err) => {
  const template = colors.magenta(`.${err.filename.slice(process.cwd().length)}`);
  const status = colors.red.bold('[failed]');

  log(`[${colors.blue('pug')}] compile template ${template} ${status}`);

  console.error(`\nERROR in ${err.message}\n`);

  return end();
};

/**
 * Gulp tasks
 */

gulp.task('pug', done => gulp.src('server/pages/*.pug')
    .pipe(pug({
      data: {
        env: process.env,
      },
    }))
    .on('error', logError(done))
    .pipe(gulp.dest('build/')));
