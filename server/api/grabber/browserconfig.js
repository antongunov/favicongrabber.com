const URL = require('url').URL;

module.exports = ($, done) => {
  const icons = [];

  const tileImage = $('meta[name="msapplication-TileImage"]', 'head').attr('content');

  if (tileImage) {
    icons.push({
      src: tileImage[0] === '/' ? new URL(tileImage, $.baseUrl).href : tileImage,
    })
  }

  // TODO: browserconfig.xml

  return done(null, icons);
};
