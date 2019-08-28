.. _web3js_eth_api:

===============
Web3.js Eth API
===============

You can use this API to reproduce all the web3 Eth API. `Web3.js Eth Documentation <https://web3js.readthedocs.io/en/v1.2.1/web3-eth.html>`_

------------------------------------------------------------------------------

.. _isSyncing:

web3/eth/isSyncing
==================

---
GET
---

.. code-block:: javascript

    http://localhost:3000/web3/eth/isSyncing

Checks if the node is currently syncing and returns either a syncing object, or ``false``.
Also, returns the success as true if request succesful, otherwise return success as false.

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - result of `eth syncing <https://web3js.readthedocs.io/en/v1.2.1/web3-eth.html#eth-issyncing-return>`_

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/isSyncing

    > {
        success: true,
        result: {
            startingBlock: 100,
            currentBlock: 312,
            highestBlock: 512,
            knownStates: 234566,
            pulledStates: 123455
        }
    }

------------------------------------------------------------------------------

.. _getCoinbase:

web3/eth/getCoinbase
====================

---
GET
---

.. code-block:: javascript

    http://localhost:3000/web3/eth/getCoinbase

Returns the coinbase address to which mining rewards will go.
Also, returns the success as true if request succesful, otherwise return success as false.

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - coinbase address.

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/getCoinbase

    > {
        success: true,
        result: "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe"
    }

------------------------------------------------------------------------------

.. _isMining:

web3/eth/isMining
=================

---
GET
---

.. code-block:: javascript

    http://localhost:3000/web3/eth/isMining

Checks whether the node is mining or not.
Also, returns the success as true if request succesful, otherwise return success as false.

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - true if the node is mining, otherwise false.

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/isMining

    > {
        success: true,
        result: true
    }

------------------------------------------------------------------------------

.. _getHashRate:

web3/eth/getHashRate
====================

---
GET
---

.. code-block:: javascript

    http://localhost:3000/web3/eth/getHashRate

Returns the number of hashes per second that the node is mining with.
Also, returns the success as true if request succesful, otherwise return success as false.

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - Number of hashes per second.

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/getHashRate

    > {
        success: true,
        result: 493736
    }

------------------------------------------------------------------------------

.. _getGasPrice:

web3/eth/getGasPrice
====================

---
GET
---

.. code-block:: javascript

    http://localhost:3000/web3/eth/getGasPrice

Returns the current gas price oracle. The gas price is determined by the last few blocks median gas price.
Also, returns the success as true if request succesful, otherwise return success as false.

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - Number string of the current gas price in wei.

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/getGasPrice

    > {
        success: true,
        result: "20000000000"
    }

------------------------------------------------------------------------------

.. _getAccounts:

web3/eth/getAccounts
====================

---
GET
---

.. code-block:: javascript

    http://localhost:3000/web3/eth/getAccounts

Returns a list of accounts the node controls.
Also, returns the success as true if request succesful, otherwise return success as false.

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - An array of addresses controlled by node.

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/getAccounts

    > {
        success: true,
        result: [
            "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
            "0xDCc6960376d6C6dEa93647383FfB245CfCed97Cf"
        ]
    }

------------------------------------------------------------------------------

.. _getBlockNumber:

web3/eth/getBlockNumber
=======================

---
GET
---

.. code-block:: javascript

    http://localhost:3000/web3/eth/getBlockNumber

Returns the current block number.
Also, returns the success as true if request succesful, otherwise return success as false.

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - The number of the most recent block.

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/getBlockNumber

    > {
        success: true,
        result: 10
    }

------------------------------------------------------------------------------

.. _getBalance:

web3/eth/getBalance
===================

----
POST
----

.. code-block:: javascript

    http://localhost:3000/web3/eth/getBalance

Get the balance of an address at a given block.
Also, returns the success as true if request succesful, otherwise return success as false.


----------
Parameters
----------
1. ``address`` - The address to get the balance of.
2. ``defaultBlock`` - (optional) If you pass this parameter it will not use the default block set with web3.eth.defaultBlock.

-------
Returns
-------

1. ``success`` (string) - true if the request succeed, otherwise false.
2. ``result`` (string | number) - The current balance for the given address in wei.

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/getBalance

    > {
        success: true,
        result: "1000000000000"
    }

------------------------------------------------------------------------------

.. _getStorageAt:

web3/eth/getStorageAt
=====================

----
POST
----

.. code-block:: javascript

    http://localhost:3000/web3/eth/getStorageAt

Get the storage at a specific position of an address.
Also, returns the success as true if request succesful, otherwise return success as false.


----------
Parameters
----------
1. ``address`` (string) - The address to get the storage from.
2. ``position`` (number) - The index position of the storage.

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - The value in storage at the given position.

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/getStorageAt

    > {
        success: true,
        result: "0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234"
    }

------------------------------------------------------------------------------

.. _getCode:

web3/eth/getCode
================

----
POST
----

.. code-block:: javascript

    http://localhost:3000/web3/eth/getCode

Get the code at a specific address.
Also, returns the success as true if request succesful, otherwise return success as false.


----------
Parameters
----------
1. ``address`` (string) - The address to get the code from.
2. ``defaultBlock`` (number | string) - If you pass this parameter it will not use the default block set with web3.eth.defaultBlock.

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - The data at given address.

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/getCode

    > {
        success: true,
        result: "0x600160008035811a818181146012578301005b601b6001356025565b8060005260206000f25b600060078202905091905056"
    }

------------------------------------------------------------------------------

.. _getBlock:

web3/eth/getBlock
=================

----
POST
----

.. code-block:: javascript

    http://localhost:3000/web3/eth/getBlock

Returns a block matching the block number or block hash.
Also, returns the success as true if request succesful, otherwise return success as false.


----------
Parameters
----------
1. ``blockNumber | blockHash`` (string) - The block number or block hash. Or the string "genesis", "latest" or "pending" as in the default block parameter.

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - result of `web3.eth.getBlock <https://web3js.readthedocs.io/en/v1.2.1/web3-eth.html#id42>`_

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/getBlock

    > {
        success: true,
        result: {
            "number": 3,
            "hash": "0xef95f2f1ed3ca60b048b4bf67cde2195961e0bba6f70bcbea9a2c4e133e34b46",
            "parentHash": "0x2302e1c0b972d00932deb5dab9eb2982f570597d9d42504c05d9c2147eaf9c88",
            "nonce": "0xfb6e1a62d119228b",
            "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
            "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "transactionsRoot": "0x3a1b03875115b79539e5bd33fb00d8f7b7cd61929d5a3c574f507b8acf415bee",
            "stateRoot": "0xf1133199d44695dfa8fd1bcfe424d82854b5cebef75bddd7e40ea94cda515bcb",
            "miner": "0x8888f1f195afa192cfee860698584c030f4c9db1",
            "difficulty": '21345678965432',
            "totalDifficulty": '324567845321',
            "size": 616,
            "extraData": "0x",
            "gasLimit": 3141592,
            "gasUsed": 21662,
            "timestamp": 1429287689,
            "transactions": [
                "0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b"
            ],
            "uncles": []
        }
    }

------------------------------------------------------------------------------

.. _getBlockTransactionCount:

web3/eth/getBlockTransactionCount
=================================

----
POST
----

.. code-block:: javascript

    http://localhost:3000/web3/eth/getBlockTransactionCount

Returns a block matching the block number or block hash.
Also, returns the success as true if request succesful, otherwise return success as false.


----------
Parameters
----------
1. ``blockNumber | blockHash`` (string) - The block number or block hash. Or the string "genesis", "latest" or "pending" as in the default block parameter.

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - The number of transactions in the given block.

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/getBlockTransactionCount

    > {
        success: true,
        result: 4
    }

------------------------------------------------------------------------------

.. _getUncle:

web3/eth/getUncle
=================

----
POST
----

.. code-block:: javascript

    http://localhost:3000/web3/eth/getUncle

Returns a blocks uncle by a given uncle index position.
Also, returns the success as true if request succesful, otherwise return success as false.


----------
Parameters
----------
1. ``blockNumber | blockHash`` (string) - The block number or block hash. Or the string "genesis", "latest" or "pending" as in the default block parameter.
2. ``uncleIndex`` (number) -  The index position of the uncle.

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - the returned uncle. For a return value see web3.eth.getBlock().

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/getUncle

    > {
        success: true,
        result: {
            "number": 3,
            "hash": "0xef95f2f1ed3ca60b048b4bf67cde2195961e0bba6f70bcbea9a2c4e133e34b46",
            "parentHash": "0x2302e1c0b972d00932deb5dab9eb2982f570597d9d42504c05d9c2147eaf9c88",
            "nonce": "0xfb6e1a62d119228b",
            "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
            "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "transactionsRoot": "0x3a1b03875115b79539e5bd33fb00d8f7b7cd61929d5a3c574f507b8acf415bee",
            "stateRoot": "0xf1133199d44695dfa8fd1bcfe424d82854b5cebef75bddd7e40ea94cda515bcb",
            "miner": "0x8888f1f195afa192cfee860698584c030f4c9db1",
            "difficulty": '21345678965432',
            "totalDifficulty": '324567845321',
            "size": 616,
            "extraData": "0x",
            "gasLimit": 3141592,
            "gasUsed": 21662,
            "timestamp": 1429287689,
            "transactions": [
                "0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b"
            ],
            "uncles": []
        }
    }

------------------------------------------------------------------------------

.. _getTransaction:

web3/eth/getTransaction
=======================

----
POST
----

.. code-block:: javascript

    http://localhost:3000/web3/eth/getTransaction

Returns a transaction matching the given transaction hash.
Also, returns the success as true if request succesful, otherwise return success as false.


----------
Parameters
----------
1. ``transactionHash`` (string) - The transaction hash.

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - result of `web3.eth.getTransaction <https://web3js.readthedocs.io/en/v1.2.1/web3-eth.html#eth-gettransaction-return>`_

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/getTransaction

    > {
        success: true,
        result: {
            "hash": "0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b",
            "nonce": 2,
            "blockHash": "0xef95f2f1ed3ca60b048b4bf67cde2195961e0bba6f70bcbea9a2c4e133e34b46",
            "blockNumber": 3,
            "transactionIndex": 0,
            "from": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
            "to": "0x6295ee1b4f6dd65047762f924ecd367c17eabf8f",
            "value": '123450000000000000',
            "gas": 314159,
            "gasPrice": '2000000000000',
            "input": "0x57cb2fc4"
        }
    }

------------------------------------------------------------------------------

.. _getTransactionFromBlock:

web3/eth/getTransactionFromBlock
================================

----
POST
----

.. code-block:: javascript

    http://localhost:3000/web3/eth/getTransactionFromBlock

Returns a transaction based on a block hash or number and the transactions index position.
Also, returns the success as true if request succesful, otherwise return success as false.


----------
Parameters
----------
1. ``transactionHash`` (string) - The transaction hash.

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - result of `web3.eth.getTransactionFromBlock <https://web3js.readthedocs.io/en/v1.2.1/web3-eth.html#gettransactionfromblock>`_

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/getTransactionFromBlock

    > {
        success: true,
        result: {
            "hash": "0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b",
            "nonce": 2,
            "blockHash": "0xef95f2f1ed3ca60b048b4bf67cde2195961e0bba6f70bcbea9a2c4e133e34b46",
            "blockNumber": 3,
            "transactionIndex": 0,
            "from": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
            "to": "0x6295ee1b4f6dd65047762f924ecd367c17eabf8f",
            "value": '123450000000000000',
            "gas": 314159,
            "gasPrice": '2000000000000',
            "input": "0x57cb2fc4"
        }
    }

------------------------------------------------------------------------------

.. _getTransactionReceipt:

web3/eth/getTransactionReceipt
==============================

----
POST
----

.. code-block:: javascript

    http://localhost:3000/web3/eth/getTransactionReceipt

Returns the receipt of a transaction by transaction hash.
Also, returns the success as true if request succesful, otherwise return success as false.


----------
Parameters
----------
1. ``transactionHash`` (string) - The transaction hash.

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - result of `web3.eth.getTransactionReceipt <https://web3js.readthedocs.io/en/v1.2.1/web3-eth.html#eth-gettransactionreceipt-return>`_

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/getTransactionReceipt

    > {
        success: true,
        result: {
            "status": true,
            "transactionHash": "0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b",
            "transactionIndex": 0,
            "blockHash": "0xef95f2f1ed3ca60b048b4bf67cde2195961e0bba6f70bcbea9a2c4e133e34b46",
            "blockNumber": 3,
            "contractAddress": "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
            "cumulativeGasUsed": 314159,
            "gasUsed": 30234,
            "logs": [{
                    // logs as returned by getPastLogs, etc.
            }, ...]
        }
    }

------------------------------------------------------------------------------

.. _getTransactionCount:

web3/eth/getTransactionCount
============================

----
POST
----

.. code-block:: javascript

    http://localhost:3000/web3/eth/getTransactionCount

Get the numbers of transactions sent from this address.
Also, returns the success as true if request succesful, otherwise return success as false.


----------
Parameters
----------
1. ``address`` (string) - The address to get the numbers of transactions from.
2. ``defaultBlock (number | string)`` - (optional) If you pass this parameter it will not use the default block set with web3.eth.defaultBlock.

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - The number of transactions sent from the given address.

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/getTransactionCount

    > {
        success: true,
        result: 1
    }

------------------------------------------------------------------------------