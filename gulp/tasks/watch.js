const gulp = require('gulp');

gulp.task('watch', (done) => {
  gulp.watch('pages/**/*.pug', gulp.series('pug'));
  gulp.watch('public/**/*/', gulp.series('public'));
  gulp.watch('assets/fonts/*', gulp.series('fonts'));
  gulp.watch('assets/sass/**/*.scss', gulp.series('sass'));
  return done();
});
