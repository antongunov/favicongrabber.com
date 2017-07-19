const supertest = require('supertest');

const NGINX_PORT = parseInt(process.env.NGINX_PORT, 10);

describe('Nginx as reverse proxy', () => {
  const request = supertest(`http://${process.env.NGINX_FQDN}:${NGINX_PORT}`);

  it('Support for preflight request', (done) => {
    request
      .options('/api')
      // preflight response headers
      .expect('Access-Control-Allow-Origin', '*')
      .expect('Access-Control-Allow-Methods', /GET/)
      .expect('Access-Control-Allow-Headers', /Content-Type/)
      // no content
      .expect('Content-Length', '0')
      .expect(204)
      .end(done);
  });

  it('Support for CORS headers for GET request', (done) => {
    request
      .get('/api')
      .expect('Access-Control-Allow-Origin', '*')
      .expect(404)
      .end(done);
  });
});
