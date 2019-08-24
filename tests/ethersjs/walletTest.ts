import request from 'supertest';
import app from '../../app';

/**
 * Web3 Eth API Test
 */
describe('sendTransaction API Test', () => {
    it('succeeds for correct provider', async() => {

        await request(app).post("/sendTransaction").send({
            web3Version: '1.2.0'
        })
        .then((res) => {
            console.log(res.text);
        });
    });
});