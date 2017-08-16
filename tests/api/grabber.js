const supertest = require('supertest');
const readdirSync = require('fs').readdirSync;

const NODE_PORT = parseInt(process.env.NODE_PORT, 10);

describe('API Grabber', () => {
  const request = supertest(`http://localhost:${NODE_PORT}`);

  readdirSync('./tests/api/data')
    .forEach((filename) => {
      const data = require(`./data/${filename}`);
      it(`Grab ${data.domain}`, (done) => {
        request
          .get(encodeURI(`/api/grab/${data.domain}`))
          .expect(200, data)
          .end(done);
      });
    });

  it('Validate domain name', (done) => {
    request
      .get('/api/grab/ex*mple.com')
      .expect(422, {
        error: 'Invalid domain name.',
      })
      .end(done);
  });
});
