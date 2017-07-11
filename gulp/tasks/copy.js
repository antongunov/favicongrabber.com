const gulp = require('gulp');

/**
 * Gulp tasks
 */

gulp.task('copy:root', () => gulp.src('server/pages/*.!(pug)', { since: gulp.lastRun('copy:root') })
    .pipe(gulp.dest('build/')));

gulp.task('copy:fonts', () => gulp.src('server/pages/assets/fonts/*', { since: gulp.lastRun('copy:fonts') })
    .pipe(gulp.dest('build/assets/fonts/')));

gulp.task('copy', gulp.parallel(
  'copy:root',
  'copy:fonts'
));
