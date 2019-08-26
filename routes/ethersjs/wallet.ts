// Import modules
const express = require('express');
const router = express.Router();
const ethers = require('ethers');
import { Request, Response } from 'express';

router.get('/createRandomWallet', function (req: Request, res: Response) {
    let randomWallet = ethers.Wallet.createRandom();

    console.log(randomWallet);

    res.json({
        success: true,
        result: randomWallet
    });
});

module.exports = router;