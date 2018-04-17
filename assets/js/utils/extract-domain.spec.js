const extractDomain = require('./extract-domain');

const EXAMPLE_COM = 'example.com';

function expectExampleCom(url) {
  expect(extractDomain(url)).toEqual(EXAMPLE_COM);
}

test('url parameter is required', () => {
  expect(() => extractDomain()).toThrow(/required/);
});

test('url is a domain', () => {
  expectExampleCom(EXAMPLE_COM);
});

test('url has a port number', () => {
  expectExampleCom(`${EXAMPLE_COM}:8080`);
});

test('url has an user', () => {
  expectExampleCom(`user@${EXAMPLE_COM}`);
});

test('url has an user with a password', () => {
  expectExampleCom(`user:password@${EXAMPLE_COM}`);
});

test('url has a path', () => {
  expectExampleCom(`${EXAMPLE_COM}/about`);
});

test('url has a protocol', () => {
  expectExampleCom(`https://${EXAMPLE_COM}`);
});

test('url has a protocol and a path', () => {
  expectExampleCom(`https://${EXAMPLE_COM}/about`);
});

test('url has a protocol and path with multiple slashes', () => {
  expectExampleCom(`https://${EXAMPLE_COM}///about`);
});
