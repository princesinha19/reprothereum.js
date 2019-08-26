import request from 'supertest';
import app from '../../app';

/**
 * Web3 Eth API Test
 */
describe('createRandomWallet API Test', () => {
    it('succeeds for correct provider', async(done) => {

        await request(app).get("/ethers/wallet/createRandomWallet").then((res) => {
            expect(res.status).toEqual(200);
            expect(res.body.success).toEqual(true);
            console.log(res.text);
            done();
        });
    });
});