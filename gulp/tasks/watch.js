const gulp = require('gulp');

const pageDir = 'server/pages';

gulp.task('watch', (done) => {
  gulp.watch([`${pageDir}/*.pug`, `${pageDir}/assets/pug/**/*.pug`], gulp.series('pug'));
  gulp.watch([`${pageDir}/*.!(pug)`], gulp.series('copy:root'));
  gulp.watch([`${pageDir}/assets/fonts/*`], gulp.series('copy:fonts'));
  gulp.watch([`${pageDir}/assets/sass/**/*.scss`], gulp.series('sass'));
  return done();
});
