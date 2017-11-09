const gulp = require('gulp');

gulp.task('fonts', () => gulp.src(['assets/fonts/*', 'node_modules/font-awesome/fonts/*'], { since: gulp.lastRun('fonts') })
    .pipe(gulp.dest('build/assets/fonts/')));
