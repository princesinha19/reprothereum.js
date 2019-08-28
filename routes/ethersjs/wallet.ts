/*
    This file is a part of reprothereum.js.
    ....
    ....
    ....
    All route will follow prefix "/ethers/wallet/".
*/
/**
 * @file wallet.ts
 * @author Prince Sinha <sinhaprince013@gmail.com>
 * @date August, 2019
 */

// Import modules
const express = require('express');
const router = express.Router();
const ethers = require('ethers');
import { Request, Response } from 'express';

/* GET request for creating random wallet. */
router.get('/createRandomWallet', function (req: Request, res: Response) {
    let randomWallet = ethers.Wallet.createRandom();

    console.log(randomWallet);

    res.json({
        success: true,
        result: randomWallet
    });
});

module.exports = router;