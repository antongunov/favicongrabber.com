const gulp = require('gulp');
const browserSync = require('browser-sync').create();

/**
 * Gulp plugins
 */

const { log, colors } = require('gulp-util');

/**
 * Gulp tasks
 */

gulp.task('browser-sync:reload', (done) => {
  browserSync.reload();
  return done();
});

gulp.task('browser-sync:init', (done) => {
  browserSync.init({
    server: {
      baseDir: 'build/',
      index: 'home.html',
    },
    open: false,
    ui: false,
    notify: false,
    logLevel: 'silent',
  }, (err, bs) => {
    if (err) {
      console.error(err.stack || err);
      return done();
    }

    const module = colors.blue('browser-sync');
    const port = colors.green(bs.options.getIn(['port']));

    log(`[${module}] listening on port ${port}`);

    return done();
  });

  gulp.watch('build/**/*', gulp.series('browser-sync:reload'));
});
