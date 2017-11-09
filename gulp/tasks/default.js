const gulp = require('gulp');

gulp.task('default:production', gulp.series(
  'clean',
  gulp.parallel(
    'fonts',
    'public',
    'pug',
    'sass'
  )
));

gulp.task('default:development', gulp.series(
  'clean',
  gulp.parallel(
    'fonts',
    'public',
    'pug',
    'sass'
  ),
  gulp.parallel(
    'watch',
    'browser-sync:init'
  )
));

gulp.task('default', gulp.series(`default:${process.env.NODE_ENV}`));
