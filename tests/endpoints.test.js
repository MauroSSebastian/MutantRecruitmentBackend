const req = require('supertest');
const app = require('../index');

describe('MUTANT COMPONENT', () => {
  test('simple is mutant', async () => {
    const res = await req(app).post('/mutant')
      .send({
        dna: ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"],
      });
    expect(res.status).toBe(200);
  });

  test('simple is not mutant', async () => {
    const res = await req(app).post('/mutant')
      .send({
        dna: ["GTGCGA","CAGTAC","TTATGT","AGAAGG","CTCCTA","TCACTG"],
      });
    expect(res.status).toBe(403);
  });

  test('stats', async () => {
    const res = await req(app).get('/stats');
    expect(res.status).toBe(200);
  });

  test('get', async () => {
    const res = await req(app).get('/mutant');
    expect(res.status).toBe(200);
  });
});