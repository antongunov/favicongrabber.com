const extractDomain = require('./extract-domain');

it('url parameter is required', () => {
  expect(() => extractDomain()).toThrow(/required/);
});
