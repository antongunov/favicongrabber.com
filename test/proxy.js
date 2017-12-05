const supertest = require('supertest');

const NGINX_PORT = parseInt(process.env.NGINX_PORT, 10);

describe('Proxy', () => {
  const request = supertest(`http://${process.env.NGINX_SERVER_NAME}:${NGINX_PORT}`);

  it('Support for a preflight request', (done) => {
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

  it('Support for CORS headers for (GET)', (done) => {
    request
      .get('/api')
      .expect('Access-Control-Allow-Origin', '*')
      .expect(404)
      .end(done);
  });

  it('Support for SNI', (done) => {
    request
      .get('/download/https://vuejs.org/images/icons/favicon-96x96.png')
      .expect(200)
      .end(done);
  });
});
