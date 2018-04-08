const extractDomain = require('./extract-domain');

const EXAMPLE_COM = 'example.com';

it('remove whitespace', () => {
  expect(extractDomain(` ${EXAMPLE_COM} `)).toEqual(EXAMPLE_COM);
});
