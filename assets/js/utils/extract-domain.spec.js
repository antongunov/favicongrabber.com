const extractDomain = require('./extract-domain');

const EXAMPLE_COM = 'example.com';

it('removes whitespace', () => {
  expect(extractDomain(` ${EXAMPLE_COM} `)).toEqual(EXAMPLE_COM);
});

it('url parameter is required', () => {
  expect(() => extractDomain()).toThrow(/required/);
});
