const URL = require('url').URL;

const selectors = [
  "link[rel='icon']",
  "link[rel='shortcut icon']",
  "link[rel='apple-touch-icon']",
  "link[rel='apple-touch-icon-precomposed']",
  "link[rel='apple-touch-startup-image']",
  "link[rel='mask-icon']",
  "link[rel='fluid-icon']",
];

module.exports = ($) => {
  const icons = [];

  selectors.forEach((selector) => {
    $(selector, 'head').each((i, elem) => {
      const { href, sizes, type } = elem.attribs;
      const icon = {
        sizes,
        src: href[0] === '/' ? new URL(href, $.baseUrl).href : href,
        type,
      };
      icons.push(icon);
    });
  });

  return icons;
};
