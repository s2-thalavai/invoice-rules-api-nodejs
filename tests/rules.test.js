const request = require('supertest');
const express = require('express');
const rulesRoutes = require('../src/routes/rules.routes');

const app = express();
app.use(express.json());
app.use('/api/rules', rulesRoutes);

describe('Invoice Rules API', () => {
  it('should return empty rule list', async () => {
    const res = await request(app).get('/api/rules');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });
});
