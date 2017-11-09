const gulp = require('gulp');

gulp.task('public', () => gulp.src('public/**/*', { since: gulp.lastRun('public') })
    .pipe(gulp.dest('build/')));
