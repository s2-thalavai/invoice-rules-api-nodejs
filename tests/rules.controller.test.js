const request = require('supertest');
const express = require('express');
const rulesRoutes = require('../src/routes/rules.routes');

const app = express();
app.use(express.json());
app.use('/api/rules', rulesRoutes);

describe('Rules API', () => {
    it('GET /api/rules should return empty array initially', async () => {
        const res = await request(app).get('/api/rules');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([]);
    });

    it('POST /api/rules should create a new rule', async () => {

        const newRule = {
            id: 'b1a2c3d4-e5f6-7890-abcd-1234567890ef',
            name: 'Early Payment Discount',
            condition: 'invoice.paidEarly == true',
            action: 'invoice.applyDiscount(10)'
        };


        const res = await request(app)
            .post('/api/rules')
            .send(newRule);

        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual(newRule);
    });
});