// Import modules
const express = require('express');
const router = express.Router();
const Web3 = require('web3');
import { Request, Response } from 'express';
import { Transaction, TransactionReceipt, RLPEncodedTransaction, TransactionConfig, Log } from "../../types/web3js/web3-core";
import { Syncing, Block, PastLogsOptions } from '../../types/web3js/web3-eth';

// Web3 Options
const options = {
    "transactionConfirmationBlocks": 1
};

// Initializing Web3
const web3 = new Web3('http://127.0.0.1:8545', null, options);

/* POST request for setting provider. */
router.post('/setProvider', function (req: Request, res: Response) {

    let provider: any = req.body.provider;

    web3.eth.setProvider(provider).then((result: boolean) => {

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

/* GET request for fetching providers. */
router.get('/providers', function (req: Request, res: Response) {

    web3.eth.providers().then((result: any) => {

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

/* GET request for fetching given provider */
router.get('/givenProvider', function (req: Request, res: Response) {

    web3.eth.givenProvider().then((result: any) => {

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

/* GET request for fetching current provider */
router.get('/currentProvider', function (req: Request, res: Response) {

    web3.eth.currentProvider().then((result: any) => {

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

/* GET request for getting default account. */
router.get('/defaultAccount', function (req: Request, res: Response) {

    web3.eth.defaultAccount().then((result: string | null) => {

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

/* GET request for getting default block. */
router.get('/defaultBlock', function (req: Request, res: Response) {

    web3.eth.defaultBlock().then((result: string | null) => {

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

/* GET request for getting protocol version. */
router.get('/getProtocolVersion', function (req: Request, res: Response) {

    web3.eth.getProtocolVersion().then((result: string) => {

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

/* GET request for checking, is the blockchain is in syncing state. */
router.get('/isSyncing', function (req: Request, res: Response) {

    web3.eth.isSyncing().then((result: Syncing | boolean) => {

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

/* GET request for getting coinbase address. */
router.get('/getCoinbase', function (req: Request, res: Response) {

    web3.eth.getCoinbase().then((result: string) => {

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

/* GET request for checking, is the blockchain is in mining state. */
router.get('/isMining', function (req: Request, res: Response) {

    web3.eth.isMining().then((result: boolean) => {

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

/* GET request for getting current hash rate. */
router.get('/getHashrate', function (req: Request, res: Response) {

    web3.eth.getHashrate().then((result: number) => {

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

/* GET request for getting latest gas price. */
router.get('/getGasPrice', function (req: Request, res: Response) {

    web3.eth.getGasPrice().then((result: string) => {

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

/* GET request for getting all the account address. */
router.get('/getAccounts', function (req: Request, res: Response) {

    web3.eth.getAccounts().then((result: string[]) => {

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

/* GET request for getting current block number. */
router.get('/getBlockNumber', function (req: Request, res: Response) {

    web3.eth.getBlockNumber().then((result: number) => {

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

/* POST request for getting balance of particular wallet address. */
router.post('/getBalance', function (req: Request, res: Response) {

    let address: string = req.body.address;
    let defaultBlock : string | number = req.body.defaultBlock;

    web3.eth.getBalance(address, defaultBlock).then((result: string) => {

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

/* POST request for getting storage of a particular address. */
router.post('/getStorageAt', function (req: Request, res: Response) {

    let address: string = req.body.address;
    let position: number = req.body.position;

    web3.eth.getStorageAt(address, position).then((result: string) => {

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

/* POST request for getting code of a particular address. */
router.post('/getCode', function (req: Request, res: Response) {

    let address: string = req.body.address;
    let defaultBlock: number | string = req.body.defaultBlock;

    web3.eth.getCode(address, defaultBlock).then((result: string) => {

        console.log(result);

        res.status(200).json({
            success: true,
            result: result
        })
    })
    .catch((error: Error) => {
        res.status(500).json({
            success: false,
            result: error.message
        });
    });
});

/* POST request for getting block information using block number or block hash. */
router.post('/getBlock', function (req: Request, res: Response) {

    let blockNumber: number = req.body.blockNumber;
    let blockHash: string = req.body.blockHash;

    if (blockNumber != undefined) {
        web3.eth.getBlock(blockNumber).then((result: Block) => {

            console.log(result);

            res.status(200).json({
                success: true,
                result: result
            });
        })
        .catch((error: Error) => {
            res.status(200).json({
                success: false,
                result: error.message
            });
        });
    }

    if (blockHash != undefined) {
        web3.eth.getBlock(blockHash).then((result: Block) => {

            console.log(result);

            res.status(200).json({
                success: true,
                result: result
            });
        })
        .catch((error: Error) => {
            res.status(200).json({
                success: false,
                result: error.message
            });
        });
    }
});

/* POST request for getting transaction count in a block using block number or block hash. */
router.post('/getBlockTransactionCount', function (req: Request, res: Response) {

    let blockNumber: number = req.body.blockNumber;
    let blockHash: string = req.body.blockHash;

    if (blockNumber != undefined) {
        web3.eth.getBlockTransactionCount(blockNumber).then((result: number) => {

            console.log(result);

            res.status(200).json({
                success: true,
                result: result
            });
        })
        .catch((error: Error) => {
            res.status(200).json({
                success: false,
                result: error.message
            });
        });
    }

    if (blockHash != undefined) {
        web3.eth.getBlockTransactionCount(blockHash).then((result: number) => {

            console.log(result);

            res.status(200).json({
                success: true,
                result: result
            });
        })
        .catch((error: Error) => {
            res.status(200).json({
                success: false,
                result: error.message
            });
        });
    }
});

/* POST request for getting uncle block information using block number ot block hash. */
router.post('/getUncle', function (req: Request, res: Response) {

    let blockNumber: number = req.body.blockNumber;
    let blockHash: string = req.body.blockHash;
    let uncleIndex: number = req.body.uncleIndex;

    if (blockNumber != undefined) {
        web3.eth.getUncle(blockNumber, uncleIndex).then((result: Block) => {

            console.log(result);

            res.status(200).json({
                success: true,
                result: result
            });
        })
        .catch((error: Error) => {
            res.status(200).json({
                success: false,
                result: error.message
            });
        });
    }

    if (blockHash != undefined) {
        web3.eth.getUncle(blockHash, uncleIndex).then((result: Block) => {

            console.log(result);

            res.status(200).json({
                success: true,
                result: result
            });
        })
        .catch((error: Error) => {
            res.status(200).json({
                success: false,
                result: error.message
            });
        });
    }
});

/* POST request for getting transaction information using transaction hash. */
router.post('/getTransaction', function (req: Request, res: Response) {

    let transactionHash: string = req.body.transactionHash;

    web3.eth.getTransaction(transactionHash).then((result: Transaction) => {

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

/* POST request for getting transaction information using block number. */
router.post('/getTransactionFromBlock', function (req: Request, res: Response) {

    let blockNumber: string | number = req.body.blockNumber;
    let indexNumber: number = req.body.indexNumber;

    web3.eth.getTransactionFromBlock(blockNumber, indexNumber).then((result: Transaction) => {

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

/* POST request for getting transaction receipt using transaction hash. */
router.post('/getTransactionReceipt', function (req: Request, res: Response) {

    let transactionHash: string = req.body.transactionHash;

    web3.eth.getTransactionReceipt(transactionHash).then((result: TransactionReceipt) => {

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

/* POST request for getting transaction count of a particular address. */
router.post('/getTransactionCount', function (req: Request, res: Response) {

    let address: string = req.body.address;

    web3.eth.getTransactionCount(address).then((result: number) => {

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

/* POST request for sending a transaction. */
router.post('/sendTransaction', function (req: Request, res: Response) {

    let from = req.body.from;
    let to = req.body.to;
    let value = req.body.value;
    let gas = req.body.gas;
    let gasPrice = req.body.gasPrice;
    let data = req.body.data;
    let nonce = req.body.nonce;

    let transactionObject: TransactionConfig = {
        "from": from,
        "to": to,
        "value": value,
        "gas": gas,
        "gasPrice": gasPrice,
        "data": data,
        "nonce": nonce
    }

    web3.eth.sendTransaction(transactionObject).then((result: TransactionReceipt) => {

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

/* POST request for sending signed transaction. */
router.post('/sendSignedTransaction', function (req: Request, res: Response) {

    let signedTransactionData: string = req.body.signedTransactionData;

    web3.eth.sendSignedTransaction(signedTransactionData).then((result: TransactionReceipt) => {

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

/* POST request for signing any data. */
router.post('/sign', function (req: Request, res: Response) {

    let dataToSign: string = req.body.dataToSign;
    let address: string = req.body.address;

    web3.eth.sign(dataToSign, address).then((result: string) => {

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
    let address: string = req.body.address;

    let transactionObject: TransactionConfig = {
        "from": from,
        "to": to,
        "value": value,
        "gas": gas,
        "gasPrice": gasPrice,
        "data": data,
        "nonce": nonce
    }

    web3.eth.signTransaction(transactionObject, address).then((result: RLPEncodedTransaction) => {

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

/* POST request for executing a call. */
router.post('/call', function (req: Request, res: Response) {

    let from = req.body.from;
    let to = req.body.to;
    let value = req.body.value;
    let gas = req.body.gas;
    let gasPrice = req.body.gasPrice;
    let data = req.body.data;
    let nonce = req.body.nonce;
    let defaultBlock: number | string = req.body.defaultBlock;

    let transactionObject: TransactionConfig = {
        "from": from,
        "to": to,
        "value": value,
        "gas": gas,
        "gasPrice": gasPrice,
        "data": data,
        "nonce": nonce
    }

    web3.eth.call(transactionObject, defaultBlock).then((result: string) => {

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

/* POST request for estimating gas. */
router.post('/estimateGas', function (req: Request, res: Response) {

    let from = req.body.from;
    let to = req.body.to;
    let value = req.body.value;
    let gas = req.body.gas;
    let gasPrice = req.body.gasPrice;
    let data = req.body.data;
    let nonce = req.body.nonce;

    let transactionObject: TransactionConfig = {
        "from": from,
        "to": to,
        "value": value,
        "gas": gas,
        "gasPrice": gasPrice,
        "data": data,
        "nonce": nonce
    }

    web3.eth.estimateGas(transactionObject).then((result: number) => {

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

/* POST request for getting past logs, matching the given options. */
router.post('/getPastLogs', function (req: Request, res: Response) {

    let fromBlock = req.body.fromBlock;
    let toBlock = req.body.toBlock;
    let address = req.body.address;
    let topics = req.body.topics;

    let transactionObject: PastLogsOptions = {
        "fromBlock": fromBlock,
        "toBlock": toBlock,
        "address": address,
        "topics": topics
    }

    web3.eth.getPastLogs(transactionObject).then((result: Log[]) => {

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

/* POST request for getting work for miners to mine on. */
router.get('/getWork', function (req: Request, res: Response) {

    web3.eth.getWork().then((result: string[]) => {

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

/* POST request used for submitting a proof-of-work solution. */
router.get('/submitWork', function (req: Request, res: Response) {

    let nonce: string = req.body.nonce;
    let powHash: string = req.body.powHash;
    let digest: string = req.body.digest;

    let data = [nonce, powHash, digest];

    web3.eth.submitWork(data).then((result: boolean) => {

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