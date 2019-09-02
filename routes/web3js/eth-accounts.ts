/*
    This file is a part of reprothereum.js.
    All route will follow prefix "/web3/eth/".
*/
/**
 * @file eth.ts
 * @author Prince Sinha <sinhaprince013@gmail.com>
 * @date August, 2019
 */

// Import modules
const express = require('express');
const router = express.Router();
var Accounts = require('web3-eth-accounts');
import { Request, Response } from 'express';
import { RLPEncodedTransaction, TransactionConfig } from "../../types/web3js/web3-core";

// Web3 Options
const options = {
    "transactionConfirmationBlocks": 1
};

// Initializing Web3
const accounts = new Accounts('http://127.0.0.1:8545', null, options);

/* POST request for creating account. */
router.post('/create', async function (req: Request, res: Response) {

    let entropy: string = req.body.entropy;

    var result: Object = await accounts.create(entropy);

    console.log(result);

    res.status(200).json({
        success: true,
        result: result
    });
});

/* POST request for fetching account from private key. */
router.post('/privateKeyToAccount', function (req: Request, res: Response) {

    let privateKey: string = req.body.privateKey;

    let result: string = accounts.privateKeyToAccount(privateKey);

    console.log(result);

    res.status(200).json({
        success: true,
        result: result
    });
});

/* POST request for signing a transaction. */
router.post('/signTransaction', function (req: Request, res: Response) {

    let from = req.body.from;
    let to = req.body.to;
    let value = req.body.value;
    let gas = req.body.gas;
    let gasPrice = req.body.gasPrice;
    let data = req.body.data;
    let nonce = req.body.nonce;
    let privateKey: string = req.body.privateKey;

    let transactionObject: TransactionConfig = {
        "from": from,
        "to": to,
        "value": value,
        "gas": gas,
        "gasPrice": gasPrice,
        "data": data,
        "nonce": nonce
    }

    accounts.signTransaction(transactionObject, privateKey).then((result: RLPEncodedTransaction) => {

        console.log(result);

        res.status(200).json({
            success: true,
            result: result
        });
    })
    .catch((error: Error) => {
        res.status(500).json({
            success: false,
            result: error.message
        });
    });
});

/* POST request for recovring transaction from raw transaction. */
router.post('/recoverTransaction', async function (req: Request, res: Response) {

    let rawTransaction: string = req.body.rawTransaction;

    let result: string = await accounts.recoverTransaction(rawTransaction);

    console.log(result);

    res.status(200).json({
        success: true,
        result: result
    });
});

/* POST request for hashing a message hash. */
router.post('/hashMessage', async function (req: Request, res: Response) {

    let message: string = req.body.message;

    let result: string = accounts.hashMessage(message)

    console.log(result);

    res.status(200).json({
        success: true,
        result: result
    });
});

/* POST request for signing some data. */
router.post('/sign', async function (req: Request, res: Response) {

    let data: string = req.body.data;
    let privateKey: string = req.body.privateKey

    let result: object = await accounts.sign(data, privateKey)

    console.log(result);

    res.status(200).json({
        success: true,
        result: result
    });
});

/* POST request for recovering the address. */
router.post('/recover', async function (req: Request, res: Response) {

    let messageHash: string = req.body.messageHash;
    let r: string = req.body.r;
    let s: string = req.body.s;
    let v: string = req.body.v;
    let preFixed: boolean = req.body.preFixed;

    let result: string = await accounts.sign(messageHash, v, r, s, preFixed);

    console.log(result);

    res.status(200).json({
        success: true,
        result: result
    });
});

/* POST request to encrypt the account in keystore format from private key. */
router.post('/encrypt', async function (req: Request, res: Response) {

    let privateKey: string = req.body.privateKey;
    let password: string = req.body.password;

    let result: object = await accounts.sign(privateKey, password);

    console.log(result);

    res.status(200).json({
        success: true,
        result: result
    });
});

/* POST request to decrypt the account using keystore file. */
router.post('/decrypt', async function (req: Request, res: Response) {

    let keystoreJsonV3: any = req.body.keystoreJsonV3;
    let password: string = req.body.password;

    let result: object = await accounts.sign(keystoreJsonV3, password);

    console.log(result);

    res.status(200).json({
        success: true,
        result: result
    });
});

/* GET request to get all in memory wallets. */
router.get('/wallet', async function (req: Request, res: Response) {

    let result: any = await accounts.wallet();

    console.log(result);

    res.status(200).json({
        success: true,
        result: result
    });
});

/* POST request for creating a wallet. */
router.post('/wallet/create', async function (req: Request, res: Response) {

    let numberOfAccounts: number = req.body.numberOfAccounts;
    let entropy: string = req.body.entropy;

    let result: any = await accounts.wallet.create(numberOfAccounts, entropy);

    console.log(result);

    res.status(200).json({
        success: true,
        result: result
    });
});

/* POST request for adding a wallet using private key. */
router.post('/wallet/add', async function (req: Request, res: Response) {

    let privateKey: string = req.body.privateKey;
    let stringObject: any = req.body.stringObject;

    if (req.body.privateKey){
        let result: any = await accounts.wallet.add(privateKey);

        console.log(result);

        res.status(200).json({
            success: true,
            result: result
        });
    }
    else{
        let result: any = await accounts.wallet.add(stringObject);

        console.log(result);

        res.status(200).json({
            success: true,
            result: result
        });
    }
});

/* POST request for removing a wallet. */
router.post('/wallet/remove', async function (req: Request, res: Response) {

    let address: string = req.body.address;
    let index: any = req.body.index;

    if (req.body.address){
        let result: any = await accounts.wallet.remove(address);

        console.log(result);

        res.status(200).json({
            success: true,
            result: result
        });
    }
    else{
        let result: any = await accounts.wallet.remove(index);

        console.log(result);

        res.status(200).json({
            success: true,
            result: result
        });
    }
});

/* GET request for clearing wallet. */
router.get('/wallet/clear', async function (req: Request, res: Response) {

    let result: object[] = await accounts.wallet.clear();

    console.log(result);

    res.status(200).json({
        success: true,
        result: result
    });
});

/* POST request for encrypting all wallet, which is inside keystore file. */
router.post('/wallet/encrypt', async function (req: Request, res: Response) {

    let password: string = req.body.password;

    let result: any = await accounts.wallet.encrypt(password);

    console.log(result);

    res.status(200).json({
        success: true,
        result: result
    });
});

/* POST request for decrypting a wallet, which is inside keystore file. */
router.post('/wallet/decrypt', async function (req: Request, res: Response) {

    let keystoreArray: [] = req.body.keystoreArray;
    let password: string = req.body.password;

    let result: object = await accounts.wallet.decrypt(keystoreArray, password);

    console.log(result);

    res.status(200).json({
        success: true,
        result: result
    });
});

/* POST request for storing a wallet in local storage. */
router.post('/wallet/save', async function (req: Request, res: Response) {

    let password: string = req.body.password;
    let keyName: string = req.body.string;

    let result: boolean = await accounts.wallet.save(password, keyName);

    console.log(result);

    res.status(200).json({
        success: true,
        result: result
    });
});

/* POST request for loading a wallet from local storage. */
router.post('/wallet/load', async function (req: Request, res: Response) {

    let password: string = req.body.password;
    let keyName: string = req.body.string;

    let result: any = await accounts.wallet.load(password, keyName);

    console.log(result);

    res.status(200).json({
        success: true,
        result: result
    });
});

module.exports = router;
