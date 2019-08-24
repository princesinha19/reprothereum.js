import request from 'supertest';
import app from '../../app';

/**
 * Web3 Eth API Test
 */
describe('setProvider API Test', () => {
    it('succeeds for correct provider', () => {
        const provider = 'http://localhost:8545';
        post('/web3/eth/setProvider', provider).expect(400);
    });
});

// a helper function to make a POST request
export function post(url: string, body: any) {
    const httpRequest = request(app).post(url);
    httpRequest.send(body);
    httpRequest.set('Accept', 'application/json')
    httpRequest.set('Origin', 'http://localhost:4000')
    return httpRequest;
}