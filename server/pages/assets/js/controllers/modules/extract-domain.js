require('url-polyfill');

module.exports = (value) => {
    let domain = null;
    let url = null;

    try {
      url = new URL(value);
      domain = url.hostname;
    } catch (err) {
      if (!/[:@/]/.test(value)) domain = value;
    }

    return domain;
};
