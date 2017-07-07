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
});
