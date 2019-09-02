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
router.post('/create', function (req: Request, res: Response) {

    let entropy: string = req.body.entropy;

    accounts.create(entropy).then((result: any) => {

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

/* POST request for fetching account from private key. */
router.post('/privateKeyToAccount', function (req: Request, res: Response) {

    let privateKey: string = req.body.privateKey;

    accounts.privateKeyToAccount(privateKey).then((result: any) => {

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
router.post('/recoverTransaction', function (req: Request, res: Response) {

    let rawTransaction: string = req.body.rawTransaction;

    accounts.recoverTransaction(rawTransaction).then((result: string) => {

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

/* POST request for hashing a message hash. */
router.post('/hashMessage', function (req: Request, res: Response) {

    let message: string = req.body.message;

    accounts.hashMessage(message).then((result: string) => {

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

/* POST request for signing some data. */
router.post('/sign', function (req: Request, res: Response) {

    let data: string = req.body.data;
    let privateKey: string = req.body.privateKey

    accounts.sign(data, privateKey).then((result: any) => {

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

/* POST request for recovering the address. */
router.post('/recover', function (req: Request, res: Response) {

    let messageHash: string = req.body.messageHash;
    let r: string = req.body.r;
    let s: string = req.body.s;
    let v: string = req.body.v;
    let preFixed: boolean = req.body.preFixed;

    accounts.sign(messageHash, v, r, s, preFixed).then((result: string) => {

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

/* POST request to encrypt the account in keystore format from private key. */
router.post('/encrypt', function (req: Request, res: Response) {

    let privateKey: string = req.body.privateKey;
    let password: string = req.body.password;

    accounts.sign(privateKey, password).then((result: any) => {

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

/* POST request to decrypt the account using keystore file. */
router.post('/decrypt', function (req: Request, res: Response) {

    let keystoreJsonV3: any = req.body.keystoreJsonV3;
    let password: string = req.body.password;

    accounts.sign(keystoreJsonV3, password).then((result: any) => {

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

/* GET request to get all in memory wallets. */
router.get('/wallet', function (req: Request, res: Response) {

    accounts.wallet().then((result: any) => {

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

/* POST request for creating a wallet. */
router.post('/wallet/create', function (req: Request, res: Response) {

    let numberOfAccounts: number = req.body.numberOfAccounts;
    let entropy: string = req.body.entropy;

    accounts.wallet.create(numberOfAccounts, entropy).then((result: any) => {

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

/* POST request for adding a wallet using private key. */
router.post('/wallet/add', function (req: Request, res: Response) {

    let privateKey: string = req.body.privateKey;
    let stringObject: any = req.body.stringObject;

    if (req.body.privateKey){
        accounts.wallet.add(privateKey).then((result: any) => {

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
    }
    else{
        accounts.wallet.add(stringObject).then((result: any) => {

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
    }
});

/* POST request for removing a wallet. */
router.post('/wallet/remove', function (req: Request, res: Response) {

    let address: string = req.body.address;
    let index: any = req.body.index;

    if (req.body.address){
        accounts.wallet.remove(address).then((result: boolean) => {

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
    }
    else{
        accounts.wallet.remove(index).then((result: boolean) => {

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
    }
});

/* GET request for clearing wallet. */
router.get('/wallet/clear', function (req: Request, res: Response) {

    accounts.wallet.clear().then((result: any) => {

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

/* POST request for encrypting all wallet, which is inside keystore file. */
router.post('/wallet/encrypt', function (req: Request, res: Response) {

    let password: string = req.body.password;

    accounts.wallet.encrypt(password).then((result: any) => {

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

/* POST request for decrypting a wallet, which is inside keystore file. */
router.post('/wallet/decrypt', function (req: Request, res: Response) {

    let keystoreArray: [] = req.body.keystoreArray;
    let password: string = req.body.password;

    accounts.wallet.decrypt(keystoreArray, password).then((result: any) => {

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

/* POST request for storing a wallet in local storage. */
router.post('/wallet/save', function (req: Request, res: Response) {

    let password: string = req.body.password;
    let keyName: string = req.body.string;

    accounts.wallet.save(password, keyName).then((result: boolean) => {

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

/* POST request for loading a wallet from local storage. */
router.post('/wallet/load', function (req: Request, res: Response) {

    let password: string = req.body.password;
    let keyName: string = req.body.string;

    accounts.wallet.load(password, keyName).then((result: any) => {

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

module.exports = router;
