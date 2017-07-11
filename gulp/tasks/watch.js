const gulp = require('gulp');

const pagesDir = 'server/pages';

/**
 * Gulp tasks
 */

gulp.task('watch', (done) => {
  gulp.watch([
    `${pagesDir}/*.pug`,
    `${pagesDir}/assets/pug/**/*.pug`,
    `${pagesDir}/assets/blocks/**/*.pug`,
  ], gulp.series('pug'));
  gulp.watch([
    `${pagesDir}/*.!(pug)`,
  ], gulp.series('copy:root'));
  gulp.watch([
    `${pagesDir}/assets/fonts/*`,
  ], gulp.series('copy:fonts'));
  gulp.watch([
    `${pagesDir}/assets/sass/**/*.scss`,
    `${pagesDir}/assets/blocks/**/*.scss`,
  ], gulp.series('sass'));
  return done();
});
