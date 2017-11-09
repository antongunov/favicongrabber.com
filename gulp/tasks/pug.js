const gulp = require('gulp');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');

const markdownItPrismFilter = require('../../server/lib/pug-filter-markdown-it-prism');

const filters = {
  'markdown-it-prism': markdownItPrismFilter,
};

gulp.task('pug', () => gulp.src('server/pages/*.pug')
    .pipe(plumber())
    .pipe(pug({
      filters,
      data: {
        env: process.env,
      },
    }))
    .pipe(gulp.dest('build/')));
