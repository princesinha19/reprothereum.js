import request from 'supertest';
import app from '../../app';

jest.useFakeTimers();

/**
 * Web3 Eth API Test
 */

describe('isSyncing API Test', () => {
    it('success for syncing', async (done) => {
        let res = await request(app).get("/web3/eth/isSyncing").then((res) => {
            expect(res.status).toEqual(200);
            expect(res.body.success).toEqual(true);
            console.log(res.text);
            done();
        })
    });
});

describe('getCoinbase API Test', () => {
    it('succees for get coinbase', async (done) => {

        await request(app).get("/web3/eth/getCoinbase").then((res) => {
            expect(res.status).toEqual(200);
            expect(res.body.success).toEqual(true);
            console.log(res.text);
            done();
        });
    });
});

describe('isMining API Test', () => {
    it('return coinbase address', async (done) => {

        await request(app).get("/web3/eth/isMining").then((res) => {
            expect(res.status).toEqual(200);
            expect(res.body.success).toEqual(true);
            console.log(res.text);
            done();
        });
    });
});

describe('getHashrate API Test', () => {
    it('return hash rate', async (done) => {

        await request(app).get("/web3/eth/getHashrate").then((res) => {
            expect(res.status).toEqual(200);
            expect(res.body.success).toEqual(true);
            console.log(res.text);
            done();
        });
    });
});


describe('getGasPrice API Test', () => {
    it('success for get gas price', async (done) => {

        await request(app).get("/web3/eth/getGasPrice").then((res) => {
            expect(res.status).toEqual(200);
            expect(res.body.success).toEqual(true);
            console.log(res.text);
            done();
        });
    });
});

describe('getAccounts API Test', () => {
    it('success for get accounts', async (done) => {

        await request(app).get("/web3/eth/getAccounts").then((res) => {
            expect(res.status).toEqual(200);
            expect(res.body.success).toEqual(true);
            console.log(res.text);
            done();
        });
    });
});

describe('getBlockNumber API Test', () => {
    it('success for get block number', async (done) => {

        await request(app).get("/web3/eth/getBlockNumber").then((res) => {
            expect(res.status).toEqual(200);
            expect(res.body.success).toEqual(true);
            console.log(res.text);
            done();
        });
    });
});