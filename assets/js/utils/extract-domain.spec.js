const extractDomain = require('./extract-domain');

const EXAMPLE_COM = 'example.com';

it('url parameter is required', () => {
  expect(() => extractDomain()).toThrow(/required/);
});

it('url has a port number', () => {
  expect(extractDomain(`${EXAMPLE_COM}:8080`)).toEqual(EXAMPLE_COM);
});

it('url has an user', () => {
  expect(extractDomain(`user@${EXAMPLE_COM}`)).toEqual(EXAMPLE_COM);
});

it('url has an user with a password', () => {
  expect(extractDomain(`user:password@${EXAMPLE_COM}`)).toEqual(EXAMPLE_COM);
});
