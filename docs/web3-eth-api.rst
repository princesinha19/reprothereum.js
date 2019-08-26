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

Checks if the node is currently syncing and returns either a syncing object, or ``false`` with the status.

-------
Returns
-------

``success`` - true if the request succeed, otherwise false.
``result`` - result of `eth syncing <https://web3js.readthedocs.io/en/v1.2.1/web3-eth.html#eth-issyncing-return>`_

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
==================

---
GET
---

.. code-block:: javascript

    http://localhost:3000/web3/eth/getCoinbase

Returns the coinbase address to which mining rewards will go with status.

-------
Returns
-------

``success`` - true if the request succeed, otherwise false.
``result`` - result of `eth syncing <https://web3js.readthedocs.io/en/v1.2.1/web3-eth.html#id20>`_

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