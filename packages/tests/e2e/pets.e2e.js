const request = require('supertest');
const app = require('../../api/app');

describe('GET /api/pets', () => {
  it('should return all pets', async () => {
    return request(app)
      .get('/api/pets')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});
