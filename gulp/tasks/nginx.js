const gulp = require('gulp');
const fs = require('fs');
const render = require('mustache').render;

const nginxConf = require('../../conf/nginx.conf');
const nginxDir = 'conf/nginx';

/**
 * Gulp tasks
 */

gulp.task('nginx:conf', (done) => {
  fs.readFile(`${nginxDir}/server.nginx.mustache`, 'utf-8', (err, template) => {
    if (err) return done(err);
    const serverNginx = render(template, nginxConf);
    return fs.writeFile(`${nginxDir}/server.nginx`, serverNginx, (err) => {
      if (err) return done(err);
      return done();
    });
  });
});
