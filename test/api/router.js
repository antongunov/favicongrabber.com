const supertest = require('supertest');

const NODE_PORT = parseInt(process.env.NODE_PORT, 10);

describe('Router', () => {
  const request = supertest(`http://localhost:${NODE_PORT}`);

  it('Unknown API endpoint', (done) => {
    request
      .get('/api/unknown-endpoint')
      .expect(404, {
        error: 'Unknown API endpoint "GET /api/unknown-endpoint".',
      })
      .end(done);
  });

  it('Unresolved domain name', (done) => {
    request
      .get('/api/grab/example.test')
      .expect(400, {
        error: 'Unresolved domain name.',
      })
      .end(done);
  });

  it('Server timeout', (done) => {
    request
      .get('/api/grab/ns4cpw.name.com')
      .expect(400, {
        error: 'The connection to a server of the domain timed out.',
      })
      .end(done);
  });

  it('Support for a JSONP response', (done) => {
    request
      .get('/api/grab/example.test?callback=done')
      .expect(400, '/**/ typeof done === \'function\' && done({"error":"Unresolved domain name."});')
      .end(done);
  });
});
