const express = require('express');
const router = express.Router();
const exec = require('child_process').exec;
import { Request, Response } from 'express';

router.post('/setWeb3', function (req: Request, res: Response) {
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
            result: 'Succesfully Set Web3 Version to ' + web3Version + ' !!'
        });
    });
});

module.exports = router;