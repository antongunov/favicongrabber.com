const supertest = require('supertest');

const NODE_PORT = parseInt(process.env.NODE_PORT, 10);

describe('API router', () => {
  const request = supertest(`http://localhost:${NODE_PORT}`);

  it('Unknown endpoint', (done) => {
    request
      .get('/api/unknown-endpoint')
      .expect(404, {
        error: 'Unknown API endpoint "GET /api/unknown-endpoint"',
      })
      .end(done);
  });

  it('Unresolved domain', (done) => {
    request
      .get('/api/grab/unresolved-domain.foobar')
      .expect(400, {
        error: 'Unresolved domain name',
      })
      .end(done);
  });

  it('Server timeout', (done) => {
    request
      .get('/api/grab/8.8.8.8')
      .expect(400, {
        error: 'Connection to server of domain timeout',
      })
      .end(done);
  });
});
