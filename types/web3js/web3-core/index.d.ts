import BN = require('bn.js');

export interface SignedTransaction {
    messageHash?: string;
    r: string;
    s: string;
    v: string;
    rawTransaction?: string;
    transactionHash?: string;
}

export interface Transaction {
    hash: string;
    nonce: number;
    blockHash: string | null;
    blockNumber: number | null;
    transactionIndex: number | null;
    from: string;
    to: string | null;
    value: string;
    gasPrice: string;
    gas: number;
    input: string;
}

export interface TransactionConfig {
    from?: string | number;
    to?: string;
    value?: number | string | BN;
    gas?: number | string;
    gasPrice?: number | string | BN;
    data?: string;
    nonce?: number;
    chainId?: number;
}

export interface RLPEncodedTransaction {
    raw: string;
    tx: {
        nonce: string;
        gasPrice: string;
        gas: string;
        to: string;
        value: string;
        input: string;
        r: string;
        s: string;
        v: string;
        hash: string;
    }
}

export interface TransactionReceipt {
    status: boolean;
    transactionHash: string;
    transactionIndex: number;
    blockHash: string;
    blockNumber: number;
    from: string;
    to: string;
    contractAddress?: string;
    cumulativeGasUsed: number;
    gasUsed: number;
    logs: Log[];
    logsBloom: string;
    events?: {
        [eventName: string]: EventLog;
    };
}

export interface EventLog {
    event: string;
    address: string;
    returnValues: any;
    logIndex: number;
    transactionIndex: number;
    transactionHash: string;
    blockHash: string;
    blockNumber: number;
    raw?: { data: string; topics: any[] };
}

export interface Log {
    address: string;
    data: string;
    topics: Array<string | string[]>;
    logIndex: number;
    transactionIndex: number;
    transactionHash: string;
    blockHash: string;
    blockNumber: number;
}

export interface TxPoolContent {
    pending: TxPool;
    queued: TxPool;
}

export interface TxPoolInspect {
    pending: TxPool;
    queued: TxPool;
}

export interface TxPool {
    [address: string]: {
        [nonce: number]: string[] | Transaction[];
    };
}

export interface TxPoolStatus {
    pending: number;
    queued: number;
}

export interface NodeInfo {
    enode: string;
    id: string;
    ip: string;
    listenAddr: string;
    name: string;
    ports: {
        discovery: string | number;
        listener: string | number;
    };
    protocols: any // Any because it's not documented what each protocol (eth, shh etc.) is defining here
}

export interface PeerInfo {
    caps: string[];
    id: string;
    name: string;
    network: {
        localAddress: string;
        remoteAddress: string;
    };
    protocols: any; // Any because it's not documented what each protocol (eth, shh etc.) is defining here
}
