// Import modules
const express = require('express');
const router = express.Router();
const ethers = require('ethers');
import { Request, Response } from 'express';
import { TransactionResponse, TransactionRequest } from 'ethers/providers/abstract-provider';

/* POST request for setting provider. */
router.post('/setProvider', function (req: Request, res: Response) {

    let privateKey: string = req.body.provider;
    let to = req.body.to;
    let value = req.body.value;
    let gasPrice = req.body.gasPrice;
    let gasLimit = req.body.gasLimit;
    let data = req.body.data;
    let nonce = req.body.nonce;
    let wallet = new ethers.Wallet(privateKey);

    let transaction: TransactionRequest = {
        nonce: nonce,
        gasLimit: gasLimit,
        gasPrice: ethers.utils.bigNumberify(gasPrice),
        to: to,
        value: ethers.utils.parseEther(value),
        data: data,
        chainId: ethers.utils.getNetwork('homestead').chainId
    }

    let signPromise = wallet.sign(transaction);

    signPromise.then((signedTransaction: string) => {
        console.log(signedTransaction);

        let provider = ethers.getDefaultProvider()
        provider.sendTransaction(signedTransaction).then((tx: TransactionResponse) => {
            console.log(tx);
        });
    });
});

module.exports = router;