import request from 'supertest';
import app from '../app';

/**
 * Web3 Eth API Test
 */
describe('setWeb3Version API Test', () => {
    it('succeeds for correct provider', async() => {

        await request(app).post("/setWeb3Version").send({
            web3Version: '1.2.0'
        })
        .then((res) => {
            console.log(res.text);
        });
    }, 100000);
});

describe('setEthersVersion API Test', () => {
    it('succeeds for correct provider', async() => {

        await request(app).post("/setEthersVersion").send({
            ethersVersion: '4.0.36'
        })
        .then((res) => {
            console.log(res.text);
        });
    }, 150000);
});