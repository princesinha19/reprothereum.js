import { Transaction } from '../web3-core'

export interface Methods {
    property?: string;
    methods: Method[];
}

export interface Method {
    name: string;
    call: string;
    params?: number;
    inputFormatter?: Array<(() => void) | null>;
    outputFormatter?: () => void;
}

export interface Syncing {
    StartingBlock: number;
    CurrentBlock: number;
    HighestBlock: number;
    KnownStates: number;
    PulledStates: number;
}

export interface BlockHeader {
    number: number
    hash: string
    parentHash: string
    nonce: string
    sha3Uncles: string
    logsBloom: string
    transactionRoot: string
    stateRoot: string
    receiptRoot: string
    miner: string
    extraData: string
    gasLimit: number
    gasUsed: number
    timestamp: number | string
}

export interface Block extends BlockHeader {
    transactions: Transaction[] | string[];
    size: number
    difficulty: number
    totalDifficulty: number
    uncles: string[];
}

export interface PastLogsOptions {
    fromBlock?: number | string;
    toBlock?: number | string;
    address?: string | string[];
    topics?: Array<string | string[]>;
}

export interface LogsOptions {
    fromBlock?: number | string;
    address?: string | string[];
    topics?: Array<string | string[]>
}

export interface Subscription<T> {
    id: string;
    options: {};

    subscribe(callback?: (error: Error, result: T) => void): Subscription<T>;

    unsubscribe(callback?: (error: Error, result: boolean) => void): Promise<undefined | boolean>;

    on(type: 'data', handler: (data: T) => void): Subscription<T>

    on(type: 'changed', handler: (data: T) => void): Subscription<T>

    on(type: 'error', handler: (data: Error) => void): Subscription<T>
}

export interface GetProof {
    jsonrpc: string;
    id: number;
    result: {
        address: string;
        accountProof: string[];
        balance: string;
        codeHash: string;
        nonce: string;
        storageHash: string;
        storageProof: StorageProof[];
    };
}

export interface StorageProof {
    key: string;
    value: string;
    proof: string[];
}
