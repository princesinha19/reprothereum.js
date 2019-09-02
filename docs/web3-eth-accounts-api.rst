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

.. _sign:

web3/eth/accounts/sign
======================

----
POST
----

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/sign

Signs arbitrary data. This data is before UTF-8 HEX decoded and enveloped as follows: "\x19Ethereum Signed Message:\n" + message.length + message.
Also, returns the success as true if request succesful, otherwise return success as false.

----------
Parameters
----------

1. ``data`` (String) - The data to sign. If its a string it will be.
2. ``privateKey`` (String) - The data to sign. The private key to sign with.

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - return of `eth accounts sign <https://web3js.readthedocs.io/en/v1.2.1/web3-eth-accounts.html#id14>`_

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/sign

    > {
        success: true,
        result: {
            message: 'Some data',
            messageHash: '0x1da44b586eb0729ff70a73c326926f6ed5a25f5b056e7f47fbc6e58d86871655',
            v: '0x1c',
            r: '0xb91467e570a6466aa9e9876cbcd013baba02900b8979d43fe208a4a4f339f5fd',
            s: '0x6007e74cd82e037b800186422fc2da167c747ef045e5d18a5f5d4300f8e1a029',
            signature: '0xb91467e570a6466aa9e9876cbcd013baba02900b8979d43fe208a4a4f339f5fd6007e74cd82e037b800186422fc2da167c747ef045e5d18a5f5d4300f8e1a0291c'
        }
    }

------------------------------------------------------------------------------

.. _recover:

web3/eth/accounts/recover
=========================

----
POST
----

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/recover

Recovers the Ethereum address which was used to sign the given data.
Also, returns the success as true if request succesful, otherwise return success as false.

----------
Parameters
----------

1. ``messageHash`` (String) - The hash of the given message already prefixed with "\x19Ethereum Signed Message:\n" + message.length + message.
2. ``v`` (String) - Recovery value + 27
3. ``r`` (String) - First 32 bytes of the signature
4. ``s`` (String) - Next 32 bytes of the signature
5. ``preFixed`` (Boolean) - (Optional, default: false): If the last parameter is true, the given message will NOT automatically be prefixed with "\x19Ethereum Signed Message:\n" + message.length + message, and assumed to be already prefixed.

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - The Ethereum address used to sign this data.

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/recover

    > {
        success: true,
        result: "0x2c7536E3605D9C16a7a3D7b1898e529396a65c23"
    }

------------------------------------------------------------------------------

.. _encrypt:

web3/eth/accounts/encrypt
=========================

----
POST
----

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/encrypt

Encrypts a private key to the web3 keystore v3 standard.
Also, returns the success as true if request succesful, otherwise return success as false.

----------
Parameters
----------

1. ``privateKey`` (String) - The private key to encrypt.
2. ``password`` (String) - The password used for encryption.

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - The encrypted keystore v3 JSON.

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/encrypt

    > {
        success: true,
        result: {
            version: 3,
            id: '04e9bcbb-96fa-497b-94d1-14df4cd20af6',
            address: '2c7536e3605d9c16a7a3d7b1898e529396a65c23',
            crypto: {
                ciphertext: 'a1c25da3ecde4e6a24f3697251dd15d6208520efc84ad97397e906e6df24d251',
                cipherparams: { iv: '2885df2b63f7ef247d753c82fa20038a' },
                cipher: 'aes-128-ctr',
                kdf: 'scrypt',
                kdfparams: {
                    dklen: 32,
                    salt: '4531b3c174cc3ff32a6a7a85d6761b410db674807b2d216d022318ceee50be10',
                    n: 262144,
                    r: 8,
                    p: 1
                },
                mac: 'b8b010fff37f9ae5559a352a185e86f9b9c1d7f7a9f1bd4e82a5dd35468fc7f6'
            }
        }
    }

------------------------------------------------------------------------------

.. _decrypt:

web3/eth/accounts/decrypt
=========================

----
POST
----

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/decrypt

Decrypts a keystore v3 JSON, and creates the account.
Also, returns the success as true if request succesful, otherwise return success as false.

----------
Parameters
----------

1. ``encryptedPrivateKey`` (String) - The encrypted private key to decrypt.
2. ``password`` (String) - The password used for encryption.

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - The decrypted account.

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/decrypt

    > {
        success: true,
        result: {
            address: "0x2c7536E3605D9C16a7a3D7b1898e529396a65c23",
            privateKey: "0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318",
            signTransaction: function(tx){...},
            sign: function(data){...},
            encrypt: function(password){...}
        }
    }

------------------------------------------------------------------------------

.. _wallet:

web3/eth/accounts/wallet
========================

---
GET
---

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/wallet

Contains an in memory wallet with multiple accounts. These accounts can be used when using web3.eth.sendTransaction().
Also, returns the success as true if request succesful, otherwise return success as false.

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - wallets present.

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/decrypt

    > {
        success: true,
        result: Wallet {
            0: {...}, // account by index
            "0xF0109fC8DF283027b6285cc889F5aA624EaC1F55": {...},  // same account by address
            "0xf0109fc8df283027b6285cc889f5aa624eac1f55": {...},  // same account by address lowercase
            1: {...},
            "0xD0122fC8DF283027b6285cc889F5aA624EaC1d23": {...},
            "0xd0122fc8df283027b6285cc889f5aa624eac1d23": {...},

            add: function(){},
            remove: function(){},
            save: function(){},
            load: function(){},
            clear: function(){},

            length: 2,
        }
    }

------------------------------------------------------------------------------

.. _wallet-create:

web3/eth/accounts/wallet/create
===============================

----
POST
----

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/wallet/create

Generates one or more accounts in the wallet. If wallets already exist they will not be overridden.
Also, returns the success as true if request succesful, otherwise return success as false.

----------
Parameters
----------

1. ``numberOfAccounts`` (Number) - Number of accounts to create. Leave empty to create an empty wallet.
2. ``entropy`` (String) - (Optional): A string with random characters as additional entropy when generating accounts. If given it should be at least 32 characters.

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - The wallet object.

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/wallet/create

    > {
        success: true,
        result: Wallet {
            0: {...},
            "0xF0109fC8DF283027b6285cc889F5aA624EaC1F55": {...},
            "0xf0109fc8df283027b6285cc889f5aa624eac1f55": {...},
            ...
        }
    }

------------------------------------------------------------------------------

.. _wallet-add:

web3/eth/accounts/wallet/add
============================

----
POST
----

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/wallet/add

Adds an account using a private key or account object to the wallet.
Also, returns the success as true if request succesful, otherwise return success as false.

----------
Parameters
----------

1. ``privateKey`` (String) -  A private key or account object created with web3.eth.accounts.create().
2. ``address`` (String) - (Optional): A wallet address.

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - The wallet object.

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/wallet/add

    > {
        success: true,
        result: {
            index: 0,
            address: '0x2c7536E3605D9C16a7a3D7b1898e529396a65c23',
            privateKey: '0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318',
            signTransaction: function(tx){...},
            sign: function(data){...},
            encrypt: function(password){...}
        }
    }

------------------------------------------------------------------------------

.. _wallet-remove:

web3/eth/accounts/wallet/remove
===============================

----
POST
----

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/wallet/remove

Removes an account from the wallet.
Also, returns the success as true if request succesful, otherwise return success as false.

----------
Parameters
----------

1. ``account`` (String | Number) -  The account address, or index in the wallet.


-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - true if the wallet was removed. false if it couldn’t be found.

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/wallet/remove

    > {
        success: true,
        result: true
    }

------------------------------------------------------------------------------

.. _wallet-clear:

web3/eth/accounts/wallet/clear
==============================

---
GET
---

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/wallet/clear

Securely empties the wallet and removes all its accounts.
Also, returns the success as true if request succesful, otherwise return success as false.

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - The wallet object.

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/wallet/clear

    > {
        success: true,
        result: Wallet {
            add: function(){},
            remove: function(){},
            save: function(){},
            load: function(){},
            clear: function(){},

            length: 0
        }
    }

------------------------------------------------------------------------------

.. _wallet-encrypt:

web3/eth/accounts/wallet/encrypt
===============================

----
POST
----

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/wallet/encrypt

Encrypts all wallet accounts to an array of encrypted keystore v3 objects.
Also, returns the success as true if request succesful, otherwise return success as false.

----------
Parameters
----------

1. ``keystoreArray`` (Array) -  The password which will be used for encryption.

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - (Array) The encrypted keystore v3.

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/wallet/encrypt

    > {
        success: true,
        result: [
            {
                version: 3,
                id: 'dcf8ab05-a314-4e37-b972-bf9b86f91372',
                address: '06f702337909c06c82b09b7a22f0a2f0855d1f68',
                crypto:
                { ciphertext: '0de804dc63940820f6b3334e5a4bfc8214e27fb30bb7e9b7b74b25cd7eb5c604',
                cipherparams: [Object],
                cipher: 'aes-128-ctr',
                kdf: 'scrypt',
                kdfparams: [Object],
                mac: 'b2aac1485bd6ee1928665642bf8eae9ddfbc039c3a673658933d320bac6952e3' }
            },{
                version: 3,
                id: '9e1c7d24-b919-4428-b10e-0f3ef79f7cf0',
                address: 'b5d89661b59a9af0b34f58d19138baa2de48baaf',
                crypto:
                { ciphertext: 'd705ebed2a136d9e4db7e5ae70ed1f69d6a57370d5fbe06281eb07615f404410',
                cipherparams: [Object],
                cipher: 'aes-128-ctr',
                kdf: 'scrypt',
                kdfparams: [Object],
                mac: 'af9eca5eb01b0f70e909f824f0e7cdb90c350a802f04a9f6afe056602b92272b' }
            }
        ]
    }

------------------------------------------------------------------------------

.. _wallet-decrypt:

web3/eth/accounts/wallet/decrypt
================================

----
POST
----

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/wallet/decrypt

Decrypts keystore v3 objects.
Also, returns the success as true if request succesful, otherwise return success as false.

----------
Parameters
----------

1. ``keystoreArray`` (Array) -  The encrypted keystore v3 objects to decrypt.
2. ``password`` (String) -  The password which will be used for encryption.

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - (Object) The wallet object.

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/wallet/encrypt

    > {
        success: true,
        result: Wallet {
            0: {...},
            1: {...},
            "0xF0109fC8DF283027b6285cc889F5aA624EaC1F55": {...},
            "0xD0122fC8DF283027b6285cc889F5aA624EaC1d23": {...}
            ...
        }
    }

------------------------------------------------------------------------------

.. _wallet-save:

web3/eth/accounts/wallet/save
=============================

----
POST
----

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/wallet/save

Stores the wallet encrypted and as string in local storage.
Also, returns the success as true if request succesful, otherwise return success as false.

----------
Parameters
----------

1. ``password`` (String) - The password to encrypt the wallet.
2. ``keyName`` - (String): (optional) The key used for the local storage position, defaults to "web3js_wallet".

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - (Boolean) If succesful true, otherwise false.

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/wallet/encrypt

    > {
        success: true,
        result: true
    }

------------------------------------------------------------------------------

.. _wallet-load:

web3/eth/accounts/wallet/load
=============================

----
POST
----

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/wallet/load

Loads a wallet from local storage and decrypts it.
Also, returns the success as true if request succesful, otherwise return success as false.

----------
Parameters
----------

1. ``password`` (String) - The password to decrypt the wallet.
2. ``keyName`` - (String): (optional) The key used for the localstorage position, defaults to "web3js_wallet".

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - (Object) The wallet object.

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/web3/eth/accounts/wallet/load

    > {
        success: true,
        result: Wallet {
            0: {...},
            1: {...},
            "0xF0109fC8DF283027b6285cc889F5aA624EaC1F55": {...},
            "0xD0122fC8DF283027b6285cc889F5aA624EaC1d23": {...}
            ...
        }
    }

------------------------------------------------------------------------------