.. _web3js_eth_api:

===============
Web3.js Eth API
===============

You can use this API to reproduce all the web3 Eth API. `solidity documentation <https://web3js.readthedocs.io/en/v1.2.1/web3-eth.html>`_

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

-------
Returns
-------

``success`` - true if the request succeed.
``result`` - result of `eth syncing <https://web3js.readthedocs.io/en/v1.2.1/web3-eth.html#eth-issyncing-return>`_

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/isSyncing

    > {
        startingBlock: 100,
        currentBlock: 312,
        highestBlock: 512,
        knownStates: 234566,
        pulledStates: 123455
    }

------------------------------------------------------------------------------