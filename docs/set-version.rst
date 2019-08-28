.. _ethersjs_eth_api:

==============
setVersion API
==============

------------------------------------------------------------------------------

.. _setWeb3Version:

/setWeb3Version
===============

----
POST
----

.. code-block:: javascript

    http://localhost:3000/setWeb3Version

It will set the web3 version as specified.
Also, returns the success as true if request succesful, otherwise return success as false.

----------
Parameters
----------
1. ``web3Version`` (string) - Version of web3.js to be set.

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - Succesful message, if succesfully set the web3.js version. Otherwise error message.

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/setWeb3Version

    > {
        success: true,
        result: "Succesfully set Web3 version to 1.2.0 !!"
    }

------------------------------------------------------------------------------

.. _setEthersVersion:

/setEthersVersion
=================

----
POST
----

.. code-block:: javascript

    http://localhost:3000/setEthersVersion

It will set the Ethers version as specified.
Also, returns the success as true if request succesful, otherwise return success as false.

----------
Parameters
----------
1. ``ethersVersion`` (string) - Version of ethers.js to be set.

-------
Returns
-------

1. ``success`` - true if the request succeed, otherwise false.
2. ``result`` - Succesful message, if succesfully set the ethers.js version. Otherwise error message.

-------
Example
-------

.. code-block:: javascript

    http://localhost:3000/setEthersVersion

    > {
        success: true,
        result: "'Succesfully set Ethers version to 3.4.0 !!"
    }

------------------------------------------------------------------------------