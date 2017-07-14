const MarkdownIt = require('markdown-it');
const prism = require('markdown-it-prism');

module.exports = (markdown, options) => {
  const md = new MarkdownIt(options);
  md.use(prism, options.prism);
  return md.render(markdown);
};
