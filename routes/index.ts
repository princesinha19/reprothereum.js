/*
    This file is a part of reprothereum.js.
    ....
    ....
    ....
    All route will follow prefix "/".
*/
/**
 * @file index.ts
 * @author Prince Sinha <sinhaprince013@gmail.com>
 * @date August, 2019
 */

const express = require('express');
const router = express.Router();
const exec = require('child_process').exec;
import { Request, Response } from 'express';

router.post('/setWeb3Version', function (req: Request, res: Response) {
    var web3Version = req.body.web3Version;

    // Command to install web3
    var command = 'npm install web3@' + web3Version;

    // Execute cmd command
    exec(command, async (err: Error, stdout: any, stderr: any) => {
        if (err) {
            console.log(err)
            console.log("node couldn't execute the command");
            return;
        }

        // the *entire* stdout and stderr (buffered)
        console.log(stdout);

        if (stderr) {
            console.log("stderr", stderr);
        }

        res.json({
            success: true,
            result: 'Succesfully set Web3 version to ' + web3Version + ' !!'
        });
    });
});

router.post('/setEthersVersion', function (req: Request, res: Response) {
    var ethersVersion = req.body.ethersVersion;

    // Command to install ethers
    var command = 'npm install ethers@' + ethersVersion;

    // Execute cmd command
    exec(command, async (err: Error, stdout: any, stderr: any) => {
        if (err) {
            console.log(err)
            console.log("node couldn't execute the command");
            return;
        }

        // the *entire* stdout and stderr (buffered)
        console.log(stdout);

        if (stderr) {
            console.log("stderr", stderr);
        }

        res.json({
            success: true,
            result: 'Succesfully set Ethers version to ' + ethersVersion + ' !!'
        });
    });
});

module.exports = router;