const supertest = require('supertest');
const { readdirSync } = require('fs');

const NODE_PORT = parseInt(process.env.NODE_PORT, 10);

describe('API Grabber', () => {
  const request = supertest(`http://localhost:${NODE_PORT}`);
  readdirSync('./tests/api/data')
    .forEach((filename) => {
      const data = require(`./data/${filename}`);
      it(`GET /api/grab/${data.domain}`, (done) => {
        request
          .get(`/api/grab/${data.domain}`)
          .expect(200, data)
          .end(done);
      });
    });
});
