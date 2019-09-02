.. _web3js_eth_api:

========================
Web3.js Eth Accounts API
========================

You can use these API's to reproduce all the web3 eth accounts method. `Web3.js Eth Accounts Documentation <https://web3js.readthedocs.io/en/v1.2.1/web3-eth-accounts.html#web3-eth-accounts>`_

------------------------------------------------------------------------------

.. _create:

web3/eth/accounts/create
========================

----
POST
----

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/create

Generates an account object with private key and public key.
Also, returns the success as true if request succesful, otherwise return success as false.

----------
Parameters
----------

1. ``entropy`` (String) - (optional) A random string to increase entropy. If given it should be at least 32 characters. If none is given a random string will be generated using randomhex.
-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - return of `eth accounts create <https://web3js.readthedocs.io/en/v1.2.1/web3-eth-accounts.html#returns>`_

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/create

    > {
        success: true,
        result: {
            address: "0xb8CE9ab6943e0eCED004cDe8e3bBed6568B2Fa01",
            privateKey: "0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709",
            signTransaction: function(tx){...},
            sign: function(data){...},
            encrypt: function(password){...}
        }
    }

------------------------------------------------------------------------------

.. _privateKeyToAccount:

web3/eth/accounts/privateKeyToAccount
=====================================

----
POST
----

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/privateKeyToAccount

Creates an account object from a private key.
Also, returns the success as true if request succesful, otherwise return success as false.

----------
Parameters
----------

1. ``privateKey`` (String) - The private key to convert.

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - return of `eth accounts privateKeyToAccount <https://web3js.readthedocs.io/en/v1.2.1/web3-eth-accounts.html#eth-accounts-create-return>`_

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/privateKeyToAccount

    > {
        success: true,
        result: {
            address: "0xb8CE9ab6943e0eCED004cDe8e3bBed6568B2Fa01",
            privateKey: "0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709",
            signTransaction: function(tx){...},
            sign: function(data){...},
            encrypt: function(password){...}
        }
    }

------------------------------------------------------------------------------

.. _signTransaction:

web3/eth/accounts/signTransaction
=================================

----
POST
----

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/signTransaction

Signs an Ethereum transaction with a given private key.
Also, returns the success as true if request succesful, otherwise return success as false.

----------
Parameters
----------

1. ``nonce`` (string) - (Optional) The nonce to use when signing this transaction. Default will use web3.eth.getTransactionCount().
2. ``chainId`` (string) - (Optional) The chain id to use when signing this transaction. Default will use web3.eth.net.getId().
3. ``to`` (string) - (Optional) The recevier of the transaction, can be empty when deploying a contract.
4. ``data`` (string) - (Optional) The call data of the transaction, can be empty for simple value transfers.
5. ``value`` (string) - (Optional) The value of the transaction in wei.
6. ``gasPrice`` (string) - (Optional) The gas price set by this transaction, if empty, it will use web3.eth.gasPrice()
7. ``gas`` (string) - The gas provided by the transaction.
8. ``privateKey`` (string) - The private key to sign with.

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - return of `eth accounts signTransaction <https://web3js.readthedocs.io/en/v1.2.1/web3-eth-accounts.html#id5>`_

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/signTransaction

    > {
        success: true,
        result: {
            messageHash: '0x88cfbd7e51c7a40540b233cf68b62ad1df3e92462f1c6018d6d67eae0f3b08f5',
            v: '0x25',
            r: '0xc9cf86333bcb065d140032ecaab5d9281bde80f21b9687b3e94161de42d51895',
            s: '0x727a108a0b8d101465414033c3f705a9c7b826e596766046ee1183dbc8aeaa68',
            rawTransaction: '0xf869808504e3b29200831e848094f0109fc8df283027b6285cc889f5aa624eac1f55843b9aca008025a0c9cf86333bcb065d140032ecaab5d9281bde80f21b9687b3e94161de42d51895a0727a108a0b8d101465414033c3f705a9c7b826e596766046ee1183dbc8aeaa68'
        }
    }

------------------------------------------------------------------------------

.. _recoverTransaction:

web3/eth/accounts/recoverTransaction
=====================================

----
POST
----

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/recoverTransaction

Recovers the Ethereum address which was used to sign the given RLP encoded transaction.
Also, returns the success as true if request succesful, otherwise return success as false.

----------
Parameters
----------

1. ``signature`` (String) - The RLP encoded transaction.

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - The Ethereum address used to sign this transaction.

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/recoverTransaction

    > {
        success: true,
        result: "0xF0109fC8DF283027b6285cc889F5aA624EaC1F55"
    }

------------------------------------------------------------------------------

.. _hashMessage:

web3/eth/accounts/hashMessage
=============================

----
POST
----

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/hashMessage

Hashes the given message to be passed web3.eth.accounts.recover() function. The data will be UTF-8 HEX decoded and enveloped as follows: "\x19Ethereum Signed Message:\n" + message.length + message and hashed using keccak256.
Also, returns the success as true if request succesful, otherwise return success as false.

----------
Parameters
----------

1. ``message`` (String) - A message to hash, if its HEX it will be UTF8 decoded before.

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - The hashed message.

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/hashMessage

    > {
        success: true,
        result: "0xa1de988600a42c4b4ab089b619297c17d53cffae5d5120d82d8a92d0bb3b78f2"
    }

------------------------------------------------------------------------------