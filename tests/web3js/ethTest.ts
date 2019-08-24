import request from 'supertest';
import app from '../../app';

/**
 * Web3 Eth API Test
 */
describe('setProvider API Test', () => {
    it('succeeds for correct provider', () => {
        request(app).post("/web3/eth/setProvider").send({
            provider: 'http://127.0.0.1:8545'
        })
        .then((res) => {
            console.log(res);
        });
    });
});

describe('isSyncing API Test', () => {
    it('succeeds for correct provider', async () => {
        const res = await request(app).get("/web3/eth/isSyncing");
        // expect(res.body.result).toEqual("false");
        expect(res.status).toEqual(200);
        console.log(res.body)
    });
});