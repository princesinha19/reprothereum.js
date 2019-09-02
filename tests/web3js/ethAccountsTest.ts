import request from 'supertest';
import app from '../../app';

jest.useFakeTimers();

/**
 * Web3 Eth Accounts API Test
 */

describe('Create API Test', () => {
    it('success for create wallet', async (done) => {
        let res = await request(app).post("/web3/eth/accounts/create")
        .send({
            entropy: "2435@#@#@±±±±!!!!678543213456764321§34567543213456785432134567"
        })
        .then((res) => {
            expect(res.status).toEqual(200);
            expect(res.body.success).toEqual(true);
            console.log(res.text);
            done();
        })
    });
});