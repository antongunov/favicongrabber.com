const gulp = require('gulp');
const path = require('path');
const rimraf = require('rimraf');

/**
 * Gulp tasks
 */

gulp.task('clean', (done) => {
  const from = 'build/*';
  const cwd = process.cwd();
  const absFrom = path.join(cwd, from);

  if (path.relative(from, absFrom)) {
    return done(new Error(`Cleaning outside the project directory '${cwd}' is not allowed`));
  }
  return rimraf(absFrom, done);
});
