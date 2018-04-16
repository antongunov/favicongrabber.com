const extractDomain = require('./extract-domain');

const EXAMPLE_COM = 'example.com';

test('url parameter is required', () => {
  expect(() => extractDomain()).toThrow(/required/);
});

test('url is a domain', () => {
  expect(extractDomain(EXAMPLE_COM))
    .toEqual(EXAMPLE_COM);
});

test('url has a port number', () => {
  expect(extractDomain(`${EXAMPLE_COM}:8080`))
    .toEqual(EXAMPLE_COM);
});

test('url has an user', () => {
  expect(extractDomain(`user@${EXAMPLE_COM}`))
    .toEqual(EXAMPLE_COM);
});

test('url has an user with a password', () => {
  expect(extractDomain(`user:password@${EXAMPLE_COM}`))
    .toEqual(EXAMPLE_COM);
});

test('url has a path', () => {
  expect(extractDomain(`${EXAMPLE_COM}/about`))
    .toEqual(EXAMPLE_COM);
});

test('url has a protocol', () => {
  expect(extractDomain(`https://${EXAMPLE_COM}`))
    .toEqual(EXAMPLE_COM);
});

test('url has a protocol and a path', () => {
  expect(extractDomain(`https://${EXAMPLE_COM}/about`))
    .toEqual(EXAMPLE_COM);
});

test('url has a protocol and path with multiple slashes', () => {
  expect(extractDomain(`https://${EXAMPLE_COM}///about`))
    .toEqual(EXAMPLE_COM);
});
