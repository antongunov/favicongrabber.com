module.exports = ($, done) => {
  const icons = [];

  const tileImage = $('meta[name="msapplication-TileImage"]', 'head').attr('content');

  if (tileImage) {
    icons.push({
      src: tileImage,
    });
  }

  return done(null, icons);
};
