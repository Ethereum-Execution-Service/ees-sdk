import { WalletClient } from 'viem';
export declare const publicClient: {
    account: {
        address: undefined;
        type: "json-rpc";
    };
    batch?: {
        multicall?: boolean | {
            batchSize?: number;
            wait?: number;
        };
    };
    cacheTime: number;
    ccipRead?: false | {
        request?: (parameters: import("viem").CcipRequestParameters) => Promise<`0x${string}`>;
    };
    chain: {
        blockExplorers: {
            readonly default: {
                readonly name: "Basescan";
                readonly url: "https://sepolia.basescan.org";
                readonly apiUrl: "https://api-sepolia.basescan.org/api";
            };
        };
        contracts: {
            readonly disputeGameFactory: {
                readonly 11155111: {
                    readonly address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1";
                };
            };
            readonly l2OutputOracle: {
                readonly 11155111: {
                    readonly address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254";
                };
            };
            readonly portal: {
                readonly 11155111: {
                    readonly address: "0x49f53e41452c74589e85ca1677426ba426459e85";
                    readonly blockCreated: 4446677;
                };
            };
            readonly l1StandardBridge: {
                readonly 11155111: {
                    readonly address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120";
                    readonly blockCreated: 4446677;
                };
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 1059647;
            };
            readonly gasPriceOracle: {
                readonly address: "0x420000000000000000000000000000000000000F";
            };
            readonly l1Block: {
                readonly address: "0x4200000000000000000000000000000000000015";
            };
            readonly l2CrossDomainMessenger: {
                readonly address: "0x4200000000000000000000000000000000000007";
            };
            readonly l2Erc721Bridge: {
                readonly address: "0x4200000000000000000000000000000000000014";
            };
            readonly l2StandardBridge: {
                readonly address: "0x4200000000000000000000000000000000000010";
            };
            readonly l2ToL1MessagePasser: {
                readonly address: "0x4200000000000000000000000000000000000016";
            };
        };
        id: 84532;
        name: "Base Sepolia";
        nativeCurrency: {
            readonly name: "Sepolia Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://sepolia.base.org"];
            };
        };
        sourceId: 11155111;
        testnet: true;
        custom?: Record<string, unknown>;
        fees?: import("viem").ChainFees<undefined>;
        formatters: {
            readonly block: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcBlock<import("viem").BlockTag, boolean>) => {
                    baseFeePerGas: bigint;
                    blobGasUsed: bigint;
                    difficulty: bigint;
                    excessBlobGas: bigint;
                    extraData: `0x${string}`;
                    gasLimit: bigint;
                    gasUsed: bigint;
                    hash: `0x${string}`;
                    logsBloom: `0x${string}`;
                    miner: `0x${string}`;
                    mixHash: `0x${string}`;
                    nonce: `0x${string}`;
                    number: bigint;
                    parentHash: `0x${string}`;
                    receiptsRoot: `0x${string}`;
                    sealFields: `0x${string}`[];
                    sha3Uncles: `0x${string}`;
                    size: bigint;
                    stateRoot: `0x${string}`;
                    timestamp: bigint;
                    totalDifficulty: bigint;
                    transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                    transactionsRoot: `0x${string}`;
                    uncles: `0x${string}`[];
                    withdrawals?: import("viem").Withdrawal[];
                    withdrawalsRoot?: `0x${string}`;
                };
                type: "block";
            };
            readonly transaction: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransaction<boolean>) => {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: boolean;
                    mint?: bigint;
                    sourceHash: `0x${string}`;
                    type: "deposit";
                } | {
                    r: `0x${string}`;
                    s: `0x${string}`;
                    v: bigint;
                    to: `0x${string}`;
                    from: `0x${string}`;
                    gas: bigint;
                    nonce: number;
                    value: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    accessList?: undefined;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId?: number;
                    yParity?: undefined;
                    type: "legacy";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip2930";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip1559";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes: readonly `0x${string}`[];
                    chainId: number;
                    type: "eip4844";
                    gasPrice?: undefined;
                    maxFeePerBlobGas: bigint;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList: import("viem/experimental").SignedAuthorizationList<number>;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip7702";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                };
                type: "transaction";
            };
            readonly transactionReceipt: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransactionReceipt) => {
                    blobGasPrice?: bigint;
                    blobGasUsed?: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    contractAddress: `0x${string}`;
                    cumulativeGasUsed: bigint;
                    effectiveGasPrice: bigint;
                    from: `0x${string}`;
                    gasUsed: bigint;
                    logs: {
                        address: `0x${string}`;
                        blockHash: `0x${string}`;
                        blockNumber: bigint;
                        data: `0x${string}`;
                        logIndex: number;
                        transactionHash: `0x${string}`;
                        transactionIndex: number;
                        removed: boolean;
                    }[];
                    logsBloom: `0x${string}`;
                    root?: `0x${string}`;
                    status: "success" | "reverted";
                    to: `0x${string}`;
                    transactionHash: `0x${string}`;
                    transactionIndex: number;
                    type: import("viem").TransactionType;
                    l1GasPrice: bigint;
                    l1GasUsed: bigint;
                    l1Fee: bigint;
                    l1FeeScalar: number;
                };
                type: "transactionReceipt";
            };
        };
        serializers: {
            readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
        };
        readonly network: "base-sepolia";
    };
    key: string;
    name: string;
    pollingInterval: number;
    request: import("viem").EIP1193RequestFn<[{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: `0x${string}`];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_blobBaseFee";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_call";
        Parameters: [transaction: import("viem").ExactPartial<import("viem").RpcTransactionRequest>] | [transaction: import("viem").ExactPartial<import("viem").RpcTransactionRequest>, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier] | [transaction: import("viem").ExactPartial<import("viem").RpcTransactionRequest>, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier, stateOverrideSet: import("viem").RpcStateOverride];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag, stateOverride: import("viem").RpcStateOverride];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: `0x${string}`, newestBlock: `0x${string}` | import("viem").BlockTag, rewardPercentiles: number[]];
        ReturnType: import("viem").RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: `0x${string}`, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getCode";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: `0x${string}`];
        ReturnType: `0x${string}`[] | {
            address: `0x${string}`;
            blockHash: `0x${string}`;
            blockNumber: `0x${string}`;
            data: `0x${string}`;
            logIndex: `0x${string}`;
            transactionHash: `0x${string}`;
            transactionIndex: `0x${string}`;
            removed: boolean;
        }[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: `0x${string}`];
        ReturnType: {
            address: `0x${string}`;
            blockHash: `0x${string}`;
            blockNumber: `0x${string}`;
            data: `0x${string}`;
            logIndex: `0x${string}`;
            transactionHash: `0x${string}`;
            transactionIndex: `0x${string}`;
            removed: boolean;
        }[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: `0x${string}` | `0x${string}`[];
            topics?: import("viem").LogTopic[];
        } & ({
            fromBlock?: `0x${string}` | import("viem").BlockTag;
            toBlock?: `0x${string}` | import("viem").BlockTag;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}`;
        })];
        ReturnType: {
            address: `0x${string}`;
            blockHash: `0x${string}`;
            blockNumber: `0x${string}`;
            data: `0x${string}`;
            logIndex: `0x${string}`;
            transactionHash: `0x${string}`;
            transactionIndex: `0x${string}`;
            removed: boolean;
        }[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: `0x${string}`, storageKeys: `0x${string}`[], block: `0x${string}` | import("viem").BlockTag];
        ReturnType: import("viem").RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransaction;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransactionReceipt;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: `0x${string}` | import("viem").BlockTag;
            toBlock?: `0x${string}` | import("viem").BlockTag;
            address?: `0x${string}` | `0x${string}`[];
            topics?: import("viem").LogTopic[];
        }];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: `0x${string}`];
        ReturnType: boolean;
    }, ...any[]]>;
    transport: import("viem").TransportConfig<"http", import("viem").EIP1193RequestFn> & {
        fetchOptions?: Omit<RequestInit, "body">;
        url?: string;
    };
    type: string;
    uid: string;
    call: (parameters: import("viem").CallParameters<{
        blockExplorers: {
            readonly default: {
                readonly name: "Basescan";
                readonly url: "https://sepolia.basescan.org";
                readonly apiUrl: "https://api-sepolia.basescan.org/api";
            };
        };
        contracts: {
            readonly disputeGameFactory: {
                readonly 11155111: {
                    readonly address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1";
                };
            };
            readonly l2OutputOracle: {
                readonly 11155111: {
                    readonly address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254";
                };
            };
            readonly portal: {
                readonly 11155111: {
                    readonly address: "0x49f53e41452c74589e85ca1677426ba426459e85";
                    readonly blockCreated: 4446677;
                };
            };
            readonly l1StandardBridge: {
                readonly 11155111: {
                    readonly address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120";
                    readonly blockCreated: 4446677;
                };
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 1059647;
            };
            readonly gasPriceOracle: {
                readonly address: "0x420000000000000000000000000000000000000F";
            };
            readonly l1Block: {
                readonly address: "0x4200000000000000000000000000000000000015";
            };
            readonly l2CrossDomainMessenger: {
                readonly address: "0x4200000000000000000000000000000000000007";
            };
            readonly l2Erc721Bridge: {
                readonly address: "0x4200000000000000000000000000000000000014";
            };
            readonly l2StandardBridge: {
                readonly address: "0x4200000000000000000000000000000000000010";
            };
            readonly l2ToL1MessagePasser: {
                readonly address: "0x4200000000000000000000000000000000000016";
            };
        };
        id: 84532;
        name: "Base Sepolia";
        nativeCurrency: {
            readonly name: "Sepolia Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://sepolia.base.org"];
            };
        };
        sourceId: 11155111;
        testnet: true;
        custom?: Record<string, unknown>;
        fees?: import("viem").ChainFees<undefined>;
        formatters: {
            readonly block: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcBlock<import("viem").BlockTag, boolean>) => {
                    baseFeePerGas: bigint;
                    blobGasUsed: bigint;
                    difficulty: bigint;
                    excessBlobGas: bigint;
                    extraData: `0x${string}`;
                    gasLimit: bigint;
                    gasUsed: bigint;
                    hash: `0x${string}`;
                    logsBloom: `0x${string}`;
                    miner: `0x${string}`;
                    mixHash: `0x${string}`;
                    nonce: `0x${string}`;
                    number: bigint;
                    parentHash: `0x${string}`;
                    receiptsRoot: `0x${string}`;
                    sealFields: `0x${string}`[];
                    sha3Uncles: `0x${string}`;
                    size: bigint;
                    stateRoot: `0x${string}`;
                    timestamp: bigint;
                    totalDifficulty: bigint;
                    transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                    transactionsRoot: `0x${string}`;
                    uncles: `0x${string}`[];
                    withdrawals?: import("viem").Withdrawal[];
                    withdrawalsRoot?: `0x${string}`;
                };
                type: "block";
            };
            readonly transaction: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransaction<boolean>) => {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: boolean;
                    mint?: bigint;
                    sourceHash: `0x${string}`;
                    type: "deposit";
                } | {
                    r: `0x${string}`;
                    s: `0x${string}`;
                    v: bigint;
                    to: `0x${string}`;
                    from: `0x${string}`;
                    gas: bigint;
                    nonce: number;
                    value: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    accessList?: undefined;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId?: number;
                    yParity?: undefined;
                    type: "legacy";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip2930";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip1559";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes: readonly `0x${string}`[];
                    chainId: number;
                    type: "eip4844";
                    gasPrice?: undefined;
                    maxFeePerBlobGas: bigint;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList: import("viem/experimental").SignedAuthorizationList<number>;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip7702";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                };
                type: "transaction";
            };
            readonly transactionReceipt: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransactionReceipt) => {
                    blobGasPrice?: bigint;
                    blobGasUsed?: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    contractAddress: `0x${string}`;
                    cumulativeGasUsed: bigint;
                    effectiveGasPrice: bigint;
                    from: `0x${string}`;
                    gasUsed: bigint;
                    logs: {
                        address: `0x${string}`;
                        blockHash: `0x${string}`;
                        blockNumber: bigint;
                        data: `0x${string}`;
                        logIndex: number;
                        transactionHash: `0x${string}`;
                        transactionIndex: number;
                        removed: boolean;
                    }[];
                    logsBloom: `0x${string}`;
                    root?: `0x${string}`;
                    status: "success" | "reverted";
                    to: `0x${string}`;
                    transactionHash: `0x${string}`;
                    transactionIndex: number;
                    type: import("viem").TransactionType;
                    l1GasPrice: bigint;
                    l1GasUsed: bigint;
                    l1Fee: bigint;
                    l1FeeScalar: number;
                };
                type: "transactionReceipt";
            };
        };
        serializers: {
            readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
        };
        readonly network: "base-sepolia";
    }>) => Promise<import("viem").CallReturnType>;
    createBlockFilter: () => Promise<{
        id: `0x${string}`;
        request: import("viem").EIP1193RequestFn<readonly [{
            Method: "eth_getFilterChanges";
            Parameters: [filterId: `0x${string}`];
            ReturnType: `0x${string}`[] | {
                address: `0x${string}`;
                blockHash: `0x${string}`;
                blockNumber: `0x${string}`;
                data: `0x${string}`;
                logIndex: `0x${string}`;
                transactionHash: `0x${string}`;
                transactionIndex: `0x${string}`;
                removed: boolean;
            }[];
        }, {
            Method: "eth_getFilterLogs";
            Parameters: [filterId: `0x${string}`];
            ReturnType: {
                address: `0x${string}`;
                blockHash: `0x${string}`;
                blockNumber: `0x${string}`;
                data: `0x${string}`;
                logIndex: `0x${string}`;
                transactionHash: `0x${string}`;
                transactionIndex: `0x${string}`;
                removed: boolean;
            }[];
        }, {
            Method: "eth_uninstallFilter";
            Parameters: [filterId: `0x${string}`];
            ReturnType: boolean;
        }]>;
        type: "block";
    }>;
    createContractEventFilter: <const abi extends import("viem").Abi | readonly unknown[], eventName extends import("viem").ContractEventName<abi>, args extends import("viem").MaybeExtractEventArgsFromAbi<abi, eventName>, strict extends boolean = undefined, fromBlock extends bigint | import("viem").BlockTag = undefined, toBlock extends bigint | import("viem").BlockTag = undefined>(args: import("viem").CreateContractEventFilterParameters<abi, eventName, args, strict, fromBlock, toBlock>) => Promise<import("viem").CreateContractEventFilterReturnType<abi, eventName, args, strict, fromBlock, toBlock>>;
    createEventFilter: <const abiEvent extends import("viem").AbiEvent = undefined, const abiEvents extends readonly unknown[] | readonly import("viem").AbiEvent[] = abiEvent extends import("viem").AbiEvent ? [abiEvent] : undefined, strict_1 extends boolean = undefined, fromBlock_1 extends bigint | import("viem").BlockTag = undefined, toBlock_1 extends bigint | import("viem").BlockTag = undefined, _EventName extends string = import("viem").MaybeAbiEventName<abiEvent>, _Args extends import("viem").MaybeExtractEventArgsFromAbi<abiEvents, _EventName> = undefined>(args?: import("viem").CreateEventFilterParameters<abiEvent, abiEvents, strict_1, fromBlock_1, toBlock_1, _EventName, _Args>) => Promise<import("viem").Filter<"event", abiEvents, _EventName, _Args, strict_1, fromBlock_1, toBlock_1> extends infer T ? { [K in keyof T]: import("viem").Filter<"event", abiEvents, _EventName, _Args, strict_1, fromBlock_1, toBlock_1>[K]; } : never>;
    createPendingTransactionFilter: () => Promise<{
        id: `0x${string}`;
        request: import("viem").EIP1193RequestFn<readonly [{
            Method: "eth_getFilterChanges";
            Parameters: [filterId: `0x${string}`];
            ReturnType: `0x${string}`[] | {
                address: `0x${string}`;
                blockHash: `0x${string}`;
                blockNumber: `0x${string}`;
                data: `0x${string}`;
                logIndex: `0x${string}`;
                transactionHash: `0x${string}`;
                transactionIndex: `0x${string}`;
                removed: boolean;
            }[];
        }, {
            Method: "eth_getFilterLogs";
            Parameters: [filterId: `0x${string}`];
            ReturnType: {
                address: `0x${string}`;
                blockHash: `0x${string}`;
                blockNumber: `0x${string}`;
                data: `0x${string}`;
                logIndex: `0x${string}`;
                transactionHash: `0x${string}`;
                transactionIndex: `0x${string}`;
                removed: boolean;
            }[];
        }, {
            Method: "eth_uninstallFilter";
            Parameters: [filterId: `0x${string}`];
            ReturnType: boolean;
        }]>;
        type: "transaction";
    }>;
    estimateContractGas: <chain extends import("viem").Chain, const abi_1 extends import("viem").Abi | readonly unknown[], functionName extends import("viem").ContractFunctionName<abi_1, "nonpayable" | "payable">, args_1 extends import("viem").ContractFunctionArgs<abi_1, "nonpayable" | "payable", functionName>>(args: import("viem").EstimateContractGasParameters<abi_1, functionName, args_1, chain>) => Promise<bigint>;
    estimateGas: (args: import("viem").EstimateGasParameters<{
        blockExplorers: {
            readonly default: {
                readonly name: "Basescan";
                readonly url: "https://sepolia.basescan.org";
                readonly apiUrl: "https://api-sepolia.basescan.org/api";
            };
        };
        contracts: {
            readonly disputeGameFactory: {
                readonly 11155111: {
                    readonly address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1";
                };
            };
            readonly l2OutputOracle: {
                readonly 11155111: {
                    readonly address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254";
                };
            };
            readonly portal: {
                readonly 11155111: {
                    readonly address: "0x49f53e41452c74589e85ca1677426ba426459e85";
                    readonly blockCreated: 4446677;
                };
            };
            readonly l1StandardBridge: {
                readonly 11155111: {
                    readonly address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120";
                    readonly blockCreated: 4446677;
                };
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 1059647;
            };
            readonly gasPriceOracle: {
                readonly address: "0x420000000000000000000000000000000000000F";
            };
            readonly l1Block: {
                readonly address: "0x4200000000000000000000000000000000000015";
            };
            readonly l2CrossDomainMessenger: {
                readonly address: "0x4200000000000000000000000000000000000007";
            };
            readonly l2Erc721Bridge: {
                readonly address: "0x4200000000000000000000000000000000000014";
            };
            readonly l2StandardBridge: {
                readonly address: "0x4200000000000000000000000000000000000010";
            };
            readonly l2ToL1MessagePasser: {
                readonly address: "0x4200000000000000000000000000000000000016";
            };
        };
        id: 84532;
        name: "Base Sepolia";
        nativeCurrency: {
            readonly name: "Sepolia Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://sepolia.base.org"];
            };
        };
        sourceId: 11155111;
        testnet: true;
        custom?: Record<string, unknown>;
        fees?: import("viem").ChainFees<undefined>;
        formatters: {
            readonly block: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcBlock<import("viem").BlockTag, boolean>) => {
                    baseFeePerGas: bigint;
                    blobGasUsed: bigint;
                    difficulty: bigint;
                    excessBlobGas: bigint;
                    extraData: `0x${string}`;
                    gasLimit: bigint;
                    gasUsed: bigint;
                    hash: `0x${string}`;
                    logsBloom: `0x${string}`;
                    miner: `0x${string}`;
                    mixHash: `0x${string}`;
                    nonce: `0x${string}`;
                    number: bigint;
                    parentHash: `0x${string}`;
                    receiptsRoot: `0x${string}`;
                    sealFields: `0x${string}`[];
                    sha3Uncles: `0x${string}`;
                    size: bigint;
                    stateRoot: `0x${string}`;
                    timestamp: bigint;
                    totalDifficulty: bigint;
                    transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                    transactionsRoot: `0x${string}`;
                    uncles: `0x${string}`[];
                    withdrawals?: import("viem").Withdrawal[];
                    withdrawalsRoot?: `0x${string}`;
                };
                type: "block";
            };
            readonly transaction: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransaction<boolean>) => {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: boolean;
                    mint?: bigint;
                    sourceHash: `0x${string}`;
                    type: "deposit";
                } | {
                    r: `0x${string}`;
                    s: `0x${string}`;
                    v: bigint;
                    to: `0x${string}`;
                    from: `0x${string}`;
                    gas: bigint;
                    nonce: number;
                    value: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    accessList?: undefined;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId?: number;
                    yParity?: undefined;
                    type: "legacy";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip2930";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip1559";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes: readonly `0x${string}`[];
                    chainId: number;
                    type: "eip4844";
                    gasPrice?: undefined;
                    maxFeePerBlobGas: bigint;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList: import("viem/experimental").SignedAuthorizationList<number>;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip7702";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                };
                type: "transaction";
            };
            readonly transactionReceipt: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransactionReceipt) => {
                    blobGasPrice?: bigint;
                    blobGasUsed?: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    contractAddress: `0x${string}`;
                    cumulativeGasUsed: bigint;
                    effectiveGasPrice: bigint;
                    from: `0x${string}`;
                    gasUsed: bigint;
                    logs: {
                        address: `0x${string}`;
                        blockHash: `0x${string}`;
                        blockNumber: bigint;
                        data: `0x${string}`;
                        logIndex: number;
                        transactionHash: `0x${string}`;
                        transactionIndex: number;
                        removed: boolean;
                    }[];
                    logsBloom: `0x${string}`;
                    root?: `0x${string}`;
                    status: "success" | "reverted";
                    to: `0x${string}`;
                    transactionHash: `0x${string}`;
                    transactionIndex: number;
                    type: import("viem").TransactionType;
                    l1GasPrice: bigint;
                    l1GasUsed: bigint;
                    l1Fee: bigint;
                    l1FeeScalar: number;
                };
                type: "transactionReceipt";
            };
        };
        serializers: {
            readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
        };
        readonly network: "base-sepolia";
    }>) => Promise<bigint>;
    getBalance: (args: import("viem").GetBalanceParameters) => Promise<bigint>;
    getBlobBaseFee: () => Promise<bigint>;
    getBlock: <includeTransactions extends boolean = false, blockTag extends import("viem").BlockTag = "latest">(args?: import("viem").GetBlockParameters<includeTransactions, blockTag>) => Promise<{
        number: blockTag extends "pending" ? null : bigint;
        nonce: blockTag extends "pending" ? null : `0x${string}`;
        hash: blockTag extends "pending" ? null : `0x${string}`;
        logsBloom: blockTag extends "pending" ? null : `0x${string}`;
        baseFeePerGas: bigint;
        blobGasUsed: bigint;
        difficulty: bigint;
        excessBlobGas: bigint;
        extraData: `0x${string}`;
        gasLimit: bigint;
        gasUsed: bigint;
        miner: `0x${string}`;
        mixHash: `0x${string}`;
        parentHash: `0x${string}`;
        receiptsRoot: `0x${string}`;
        sealFields: `0x${string}`[];
        sha3Uncles: `0x${string}`;
        size: bigint;
        stateRoot: `0x${string}`;
        timestamp: bigint;
        totalDifficulty: bigint;
        transactionsRoot: `0x${string}`;
        uncles: `0x${string}`[];
        withdrawals?: import("viem").Withdrawal[];
        withdrawalsRoot?: `0x${string}`;
        transactions: includeTransactions extends true ? ({
            to: `0x${string}`;
            from: `0x${string}`;
            gas: bigint;
            nonce: number;
            type: "deposit";
            value: bigint;
            maxFeePerBlobGas?: undefined;
            gasPrice?: undefined;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            yParity: number;
            hash: `0x${string}`;
            input: `0x${string}`;
            r: `0x${string}`;
            s: `0x${string}`;
            typeHex: `0x${string}`;
            v: bigint;
            isSystemTx?: boolean;
            mint?: bigint;
            sourceHash: `0x${string}`;
            blockHash: (blockTag extends "pending" ? true : false) extends infer T_1 ? T_1 extends (blockTag extends "pending" ? true : false) ? T_1 extends true ? null : `0x${string}` : never : never;
            blockNumber: (blockTag extends "pending" ? true : false) extends infer T_2 ? T_2 extends (blockTag extends "pending" ? true : false) ? T_2 extends true ? null : bigint : never : never;
            transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_3 ? T_3 extends (blockTag extends "pending" ? true : false) ? T_3 extends true ? null : number : never : never;
        } | {
            to: `0x${string}`;
            from: `0x${string}`;
            gas: bigint;
            nonce: number;
            type: "legacy";
            value: bigint;
            maxFeePerBlobGas?: undefined;
            gasPrice: bigint;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
            accessList?: undefined;
            blobVersionedHashes?: undefined;
            authorizationList?: undefined;
            yParity?: undefined;
            hash: `0x${string}`;
            input: `0x${string}`;
            r: `0x${string}`;
            s: `0x${string}`;
            typeHex: `0x${string}`;
            v: bigint;
            chainId?: number;
            isSystemTx?: undefined;
            mint?: undefined;
            sourceHash?: undefined;
            blockHash: (blockTag extends "pending" ? true : false) extends infer T_4 ? T_4 extends (blockTag extends "pending" ? true : false) ? T_4 extends true ? null : `0x${string}` : never : never;
            blockNumber: (blockTag extends "pending" ? true : false) extends infer T_5 ? T_5 extends (blockTag extends "pending" ? true : false) ? T_5 extends true ? null : bigint : never : never;
            transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_6 ? T_6 extends (blockTag extends "pending" ? true : false) ? T_6 extends true ? null : number : never : never;
        } | {
            to: `0x${string}`;
            from: `0x${string}`;
            gas: bigint;
            nonce: number;
            type: "eip2930";
            value: bigint;
            maxFeePerBlobGas?: undefined;
            gasPrice: bigint;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
            accessList: import("viem").AccessList;
            blobVersionedHashes?: undefined;
            authorizationList?: undefined;
            yParity: number;
            hash: `0x${string}`;
            input: `0x${string}`;
            r: `0x${string}`;
            s: `0x${string}`;
            typeHex: `0x${string}`;
            v: bigint;
            chainId: number;
            isSystemTx?: undefined;
            mint?: undefined;
            sourceHash?: undefined;
            blockHash: (blockTag extends "pending" ? true : false) extends infer T_7 ? T_7 extends (blockTag extends "pending" ? true : false) ? T_7 extends true ? null : `0x${string}` : never : never;
            blockNumber: (blockTag extends "pending" ? true : false) extends infer T_8 ? T_8 extends (blockTag extends "pending" ? true : false) ? T_8 extends true ? null : bigint : never : never;
            transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_9 ? T_9 extends (blockTag extends "pending" ? true : false) ? T_9 extends true ? null : number : never : never;
        } | {
            to: `0x${string}`;
            from: `0x${string}`;
            gas: bigint;
            nonce: number;
            type: "eip1559";
            value: bigint;
            maxFeePerBlobGas?: undefined;
            gasPrice?: undefined;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            accessList: import("viem").AccessList;
            blobVersionedHashes?: undefined;
            authorizationList?: undefined;
            yParity: number;
            hash: `0x${string}`;
            input: `0x${string}`;
            r: `0x${string}`;
            s: `0x${string}`;
            typeHex: `0x${string}`;
            v: bigint;
            chainId: number;
            isSystemTx?: undefined;
            mint?: undefined;
            sourceHash?: undefined;
            blockHash: (blockTag extends "pending" ? true : false) extends infer T_10 ? T_10 extends (blockTag extends "pending" ? true : false) ? T_10 extends true ? null : `0x${string}` : never : never;
            blockNumber: (blockTag extends "pending" ? true : false) extends infer T_11 ? T_11 extends (blockTag extends "pending" ? true : false) ? T_11 extends true ? null : bigint : never : never;
            transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_12 ? T_12 extends (blockTag extends "pending" ? true : false) ? T_12 extends true ? null : number : never : never;
        } | {
            to: `0x${string}`;
            from: `0x${string}`;
            gas: bigint;
            nonce: number;
            type: "eip4844";
            value: bigint;
            maxFeePerBlobGas: bigint;
            gasPrice?: undefined;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            accessList: import("viem").AccessList;
            blobVersionedHashes: readonly `0x${string}`[];
            authorizationList?: undefined;
            yParity: number;
            hash: `0x${string}`;
            input: `0x${string}`;
            r: `0x${string}`;
            s: `0x${string}`;
            typeHex: `0x${string}`;
            v: bigint;
            chainId: number;
            isSystemTx?: undefined;
            mint?: undefined;
            sourceHash?: undefined;
            blockHash: (blockTag extends "pending" ? true : false) extends infer T_13 ? T_13 extends (blockTag extends "pending" ? true : false) ? T_13 extends true ? null : `0x${string}` : never : never;
            blockNumber: (blockTag extends "pending" ? true : false) extends infer T_14 ? T_14 extends (blockTag extends "pending" ? true : false) ? T_14 extends true ? null : bigint : never : never;
            transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_15 ? T_15 extends (blockTag extends "pending" ? true : false) ? T_15 extends true ? null : number : never : never;
        } | {
            to: `0x${string}`;
            from: `0x${string}`;
            gas: bigint;
            nonce: number;
            type: "eip7702";
            value: bigint;
            maxFeePerBlobGas?: undefined;
            gasPrice?: undefined;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            accessList: import("viem").AccessList;
            blobVersionedHashes?: undefined;
            authorizationList: import("viem/experimental").SignedAuthorizationList<number>;
            yParity: number;
            hash: `0x${string}`;
            input: `0x${string}`;
            r: `0x${string}`;
            s: `0x${string}`;
            typeHex: `0x${string}`;
            v: bigint;
            chainId: number;
            isSystemTx?: undefined;
            mint?: undefined;
            sourceHash?: undefined;
            blockHash: (blockTag extends "pending" ? true : false) extends infer T_16 ? T_16 extends (blockTag extends "pending" ? true : false) ? T_16 extends true ? null : `0x${string}` : never : never;
            blockNumber: (blockTag extends "pending" ? true : false) extends infer T_17 ? T_17 extends (blockTag extends "pending" ? true : false) ? T_17 extends true ? null : bigint : never : never;
            transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_18 ? T_18 extends (blockTag extends "pending" ? true : false) ? T_18 extends true ? null : number : never : never;
        })[] : `0x${string}`[];
    }>;
    getBlockNumber: (args?: import("viem").GetBlockNumberParameters) => Promise<bigint>;
    getBlockTransactionCount: (args?: import("viem").GetBlockTransactionCountParameters) => Promise<number>;
    getBytecode: (args: import("viem").GetBytecodeParameters) => Promise<`0x${string}`>;
    getChainId: () => Promise<number>;
    getCode: (args: import("viem").GetBytecodeParameters) => Promise<`0x${string}`>;
    getContractEvents: <const abi_2 extends import("viem").Abi | readonly unknown[], eventName_1 extends import("viem").ContractEventName<abi_2> = undefined, strict_2 extends boolean = undefined, fromBlock_2 extends bigint | import("viem").BlockTag = undefined, toBlock_2 extends bigint | import("viem").BlockTag = undefined>(args: import("viem").GetContractEventsParameters<abi_2, eventName_1, strict_2, fromBlock_2, toBlock_2>) => Promise<import("viem").GetContractEventsReturnType<abi_2, eventName_1, strict_2, fromBlock_2, toBlock_2>>;
    getEip712Domain: (args: import("viem").GetEip712DomainParameters) => Promise<import("viem").GetEip712DomainReturnType>;
    getEnsAddress: (args: {
        blockNumber?: bigint;
        blockTag?: import("viem").BlockTag;
        coinType?: number;
        gatewayUrls?: string[];
        name: string;
        strict?: boolean;
        universalResolverAddress?: `0x${string}`;
    }) => Promise<`0x${string}`>;
    getEnsAvatar: (args: {
        name: string;
        blockNumber?: bigint;
        blockTag?: import("viem").BlockTag;
        gatewayUrls?: string[];
        strict?: boolean;
        universalResolverAddress?: `0x${string}`;
        assetGatewayUrls?: import("viem").AssetGatewayUrls;
    }) => Promise<string>;
    getEnsName: (args: {
        blockNumber?: bigint;
        blockTag?: import("viem").BlockTag;
        address: `0x${string}`;
        gatewayUrls?: string[];
        strict?: boolean;
        universalResolverAddress?: `0x${string}`;
    }) => Promise<string>;
    getEnsResolver: (args: {
        blockNumber?: bigint;
        blockTag?: import("viem").BlockTag;
        name: string;
        universalResolverAddress?: `0x${string}`;
    }) => Promise<`0x${string}`>;
    getEnsText: (args: {
        blockNumber?: bigint;
        blockTag?: import("viem").BlockTag;
        name: string;
        gatewayUrls?: string[];
        key: string;
        strict?: boolean;
        universalResolverAddress?: `0x${string}`;
    }) => Promise<string>;
    getFeeHistory: (args: import("viem").GetFeeHistoryParameters) => Promise<import("viem").GetFeeHistoryReturnType>;
    estimateFeesPerGas: <chainOverride extends import("viem").Chain = undefined, type extends import("viem").FeeValuesType = "eip1559">(args?: import("viem").EstimateFeesPerGasParameters<{
        blockExplorers: {
            readonly default: {
                readonly name: "Basescan";
                readonly url: "https://sepolia.basescan.org";
                readonly apiUrl: "https://api-sepolia.basescan.org/api";
            };
        };
        contracts: {
            readonly disputeGameFactory: {
                readonly 11155111: {
                    readonly address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1";
                };
            };
            readonly l2OutputOracle: {
                readonly 11155111: {
                    readonly address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254";
                };
            };
            readonly portal: {
                readonly 11155111: {
                    readonly address: "0x49f53e41452c74589e85ca1677426ba426459e85";
                    readonly blockCreated: 4446677;
                };
            };
            readonly l1StandardBridge: {
                readonly 11155111: {
                    readonly address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120";
                    readonly blockCreated: 4446677;
                };
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 1059647;
            };
            readonly gasPriceOracle: {
                readonly address: "0x420000000000000000000000000000000000000F";
            };
            readonly l1Block: {
                readonly address: "0x4200000000000000000000000000000000000015";
            };
            readonly l2CrossDomainMessenger: {
                readonly address: "0x4200000000000000000000000000000000000007";
            };
            readonly l2Erc721Bridge: {
                readonly address: "0x4200000000000000000000000000000000000014";
            };
            readonly l2StandardBridge: {
                readonly address: "0x4200000000000000000000000000000000000010";
            };
            readonly l2ToL1MessagePasser: {
                readonly address: "0x4200000000000000000000000000000000000016";
            };
        };
        id: 84532;
        name: "Base Sepolia";
        nativeCurrency: {
            readonly name: "Sepolia Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://sepolia.base.org"];
            };
        };
        sourceId: 11155111;
        testnet: true;
        custom?: Record<string, unknown>;
        fees?: import("viem").ChainFees<undefined>;
        formatters: {
            readonly block: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcBlock<import("viem").BlockTag, boolean>) => {
                    baseFeePerGas: bigint;
                    blobGasUsed: bigint;
                    difficulty: bigint;
                    excessBlobGas: bigint;
                    extraData: `0x${string}`;
                    gasLimit: bigint;
                    gasUsed: bigint;
                    hash: `0x${string}`;
                    logsBloom: `0x${string}`;
                    miner: `0x${string}`;
                    mixHash: `0x${string}`;
                    nonce: `0x${string}`;
                    number: bigint;
                    parentHash: `0x${string}`;
                    receiptsRoot: `0x${string}`;
                    sealFields: `0x${string}`[];
                    sha3Uncles: `0x${string}`;
                    size: bigint;
                    stateRoot: `0x${string}`;
                    timestamp: bigint;
                    totalDifficulty: bigint;
                    transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                    transactionsRoot: `0x${string}`;
                    uncles: `0x${string}`[];
                    withdrawals?: import("viem").Withdrawal[];
                    withdrawalsRoot?: `0x${string}`;
                };
                type: "block";
            };
            readonly transaction: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransaction<boolean>) => {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: boolean;
                    mint?: bigint;
                    sourceHash: `0x${string}`;
                    type: "deposit";
                } | {
                    r: `0x${string}`;
                    s: `0x${string}`;
                    v: bigint;
                    to: `0x${string}`;
                    from: `0x${string}`;
                    gas: bigint;
                    nonce: number;
                    value: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    accessList?: undefined;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId?: number;
                    yParity?: undefined;
                    type: "legacy";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip2930";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip1559";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes: readonly `0x${string}`[];
                    chainId: number;
                    type: "eip4844";
                    gasPrice?: undefined;
                    maxFeePerBlobGas: bigint;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList: import("viem/experimental").SignedAuthorizationList<number>;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip7702";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                };
                type: "transaction";
            };
            readonly transactionReceipt: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransactionReceipt) => {
                    blobGasPrice?: bigint;
                    blobGasUsed?: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    contractAddress: `0x${string}`;
                    cumulativeGasUsed: bigint;
                    effectiveGasPrice: bigint;
                    from: `0x${string}`;
                    gasUsed: bigint;
                    logs: {
                        address: `0x${string}`;
                        blockHash: `0x${string}`;
                        blockNumber: bigint;
                        data: `0x${string}`;
                        logIndex: number;
                        transactionHash: `0x${string}`;
                        transactionIndex: number;
                        removed: boolean;
                    }[];
                    logsBloom: `0x${string}`;
                    root?: `0x${string}`;
                    status: "success" | "reverted";
                    to: `0x${string}`;
                    transactionHash: `0x${string}`;
                    transactionIndex: number;
                    type: import("viem").TransactionType;
                    l1GasPrice: bigint;
                    l1GasUsed: bigint;
                    l1Fee: bigint;
                    l1FeeScalar: number;
                };
                type: "transactionReceipt";
            };
        };
        serializers: {
            readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
        };
        readonly network: "base-sepolia";
    }, chainOverride, type>) => Promise<import("viem").EstimateFeesPerGasReturnType<type>>;
    getFilterChanges: <filterType extends import("viem").FilterType, const abi_3 extends import("viem").Abi | readonly unknown[], eventName_2 extends string, strict_3 extends boolean = undefined, fromBlock_3 extends bigint | import("viem").BlockTag = undefined, toBlock_3 extends bigint | import("viem").BlockTag = undefined>(args: import("viem").GetFilterChangesParameters<filterType, abi_3, eventName_2, strict_3, fromBlock_3, toBlock_3>) => Promise<import("viem").GetFilterChangesReturnType<filterType, abi_3, eventName_2, strict_3, fromBlock_3, toBlock_3>>;
    getFilterLogs: <const abi_4 extends import("viem").Abi | readonly unknown[], eventName_3 extends string, strict_4 extends boolean = undefined, fromBlock_4 extends bigint | import("viem").BlockTag = undefined, toBlock_4 extends bigint | import("viem").BlockTag = undefined>(args: import("viem").GetFilterLogsParameters<abi_4, eventName_3, strict_4, fromBlock_4, toBlock_4>) => Promise<import("viem").GetFilterLogsReturnType<abi_4, eventName_3, strict_4, fromBlock_4, toBlock_4>>;
    getGasPrice: () => Promise<bigint>;
    getLogs: <const abiEvent_1 extends import("viem").AbiEvent = undefined, const abiEvents_1 extends readonly unknown[] | readonly import("viem").AbiEvent[] = abiEvent_1 extends import("viem").AbiEvent ? [abiEvent_1] : undefined, strict_5 extends boolean = undefined, fromBlock_5 extends bigint | import("viem").BlockTag = undefined, toBlock_5 extends bigint | import("viem").BlockTag = undefined>(args?: import("viem").GetLogsParameters<abiEvent_1, abiEvents_1, strict_5, fromBlock_5, toBlock_5>) => Promise<import("viem").GetLogsReturnType<abiEvent_1, abiEvents_1, strict_5, fromBlock_5, toBlock_5>>;
    getProof: (args: import("viem").GetProofParameters) => Promise<import("viem").GetProofReturnType>;
    estimateMaxPriorityFeePerGas: <chainOverride_1 extends import("viem").Chain = undefined>(args?: {
        chain: chainOverride_1;
    }) => Promise<bigint>;
    getStorageAt: (args: import("viem").GetStorageAtParameters) => Promise<`0x${string}`>;
    getTransaction: <blockTag_1 extends import("viem").BlockTag = "latest">(args: import("viem").GetTransactionParameters<blockTag_1>) => Promise<{
        to: `0x${string}`;
        from: `0x${string}`;
        gas: bigint;
        nonce: number;
        type: "deposit";
        value: bigint;
        maxFeePerBlobGas?: undefined;
        gasPrice?: undefined;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        yParity: number;
        hash: `0x${string}`;
        input: `0x${string}`;
        r: `0x${string}`;
        s: `0x${string}`;
        typeHex: `0x${string}`;
        v: bigint;
        isSystemTx?: boolean;
        mint?: bigint;
        sourceHash: `0x${string}`;
        blockHash: (blockTag_1 extends "pending" ? true : false) extends infer T_19 ? T_19 extends (blockTag_1 extends "pending" ? true : false) ? T_19 extends true ? null : `0x${string}` : never : never;
        blockNumber: (blockTag_1 extends "pending" ? true : false) extends infer T_20 ? T_20 extends (blockTag_1 extends "pending" ? true : false) ? T_20 extends true ? null : bigint : never : never;
        transactionIndex: (blockTag_1 extends "pending" ? true : false) extends infer T_21 ? T_21 extends (blockTag_1 extends "pending" ? true : false) ? T_21 extends true ? null : number : never : never;
    } | {
        to: `0x${string}`;
        from: `0x${string}`;
        gas: bigint;
        nonce: number;
        type: "legacy";
        value: bigint;
        maxFeePerBlobGas?: undefined;
        gasPrice: bigint;
        maxFeePerGas?: undefined;
        maxPriorityFeePerGas?: undefined;
        accessList?: undefined;
        blobVersionedHashes?: undefined;
        authorizationList?: undefined;
        yParity?: undefined;
        hash: `0x${string}`;
        input: `0x${string}`;
        r: `0x${string}`;
        s: `0x${string}`;
        typeHex: `0x${string}`;
        v: bigint;
        chainId?: number;
        isSystemTx?: undefined;
        mint?: undefined;
        sourceHash?: undefined;
        blockHash: (blockTag_1 extends "pending" ? true : false) extends infer T_22 ? T_22 extends (blockTag_1 extends "pending" ? true : false) ? T_22 extends true ? null : `0x${string}` : never : never;
        blockNumber: (blockTag_1 extends "pending" ? true : false) extends infer T_23 ? T_23 extends (blockTag_1 extends "pending" ? true : false) ? T_23 extends true ? null : bigint : never : never;
        transactionIndex: (blockTag_1 extends "pending" ? true : false) extends infer T_24 ? T_24 extends (blockTag_1 extends "pending" ? true : false) ? T_24 extends true ? null : number : never : never;
    } | {
        to: `0x${string}`;
        from: `0x${string}`;
        gas: bigint;
        nonce: number;
        type: "eip2930";
        value: bigint;
        maxFeePerBlobGas?: undefined;
        gasPrice: bigint;
        maxFeePerGas?: undefined;
        maxPriorityFeePerGas?: undefined;
        accessList: import("viem").AccessList;
        blobVersionedHashes?: undefined;
        authorizationList?: undefined;
        yParity: number;
        hash: `0x${string}`;
        input: `0x${string}`;
        r: `0x${string}`;
        s: `0x${string}`;
        typeHex: `0x${string}`;
        v: bigint;
        chainId: number;
        isSystemTx?: undefined;
        mint?: undefined;
        sourceHash?: undefined;
        blockHash: (blockTag_1 extends "pending" ? true : false) extends infer T_25 ? T_25 extends (blockTag_1 extends "pending" ? true : false) ? T_25 extends true ? null : `0x${string}` : never : never;
        blockNumber: (blockTag_1 extends "pending" ? true : false) extends infer T_26 ? T_26 extends (blockTag_1 extends "pending" ? true : false) ? T_26 extends true ? null : bigint : never : never;
        transactionIndex: (blockTag_1 extends "pending" ? true : false) extends infer T_27 ? T_27 extends (blockTag_1 extends "pending" ? true : false) ? T_27 extends true ? null : number : never : never;
    } | {
        to: `0x${string}`;
        from: `0x${string}`;
        gas: bigint;
        nonce: number;
        type: "eip1559";
        value: bigint;
        maxFeePerBlobGas?: undefined;
        gasPrice?: undefined;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        accessList: import("viem").AccessList;
        blobVersionedHashes?: undefined;
        authorizationList?: undefined;
        yParity: number;
        hash: `0x${string}`;
        input: `0x${string}`;
        r: `0x${string}`;
        s: `0x${string}`;
        typeHex: `0x${string}`;
        v: bigint;
        chainId: number;
        isSystemTx?: undefined;
        mint?: undefined;
        sourceHash?: undefined;
        blockHash: (blockTag_1 extends "pending" ? true : false) extends infer T_28 ? T_28 extends (blockTag_1 extends "pending" ? true : false) ? T_28 extends true ? null : `0x${string}` : never : never;
        blockNumber: (blockTag_1 extends "pending" ? true : false) extends infer T_29 ? T_29 extends (blockTag_1 extends "pending" ? true : false) ? T_29 extends true ? null : bigint : never : never;
        transactionIndex: (blockTag_1 extends "pending" ? true : false) extends infer T_30 ? T_30 extends (blockTag_1 extends "pending" ? true : false) ? T_30 extends true ? null : number : never : never;
    } | {
        to: `0x${string}`;
        from: `0x${string}`;
        gas: bigint;
        nonce: number;
        type: "eip4844";
        value: bigint;
        maxFeePerBlobGas: bigint;
        gasPrice?: undefined;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        accessList: import("viem").AccessList;
        blobVersionedHashes: readonly `0x${string}`[];
        authorizationList?: undefined;
        yParity: number;
        hash: `0x${string}`;
        input: `0x${string}`;
        r: `0x${string}`;
        s: `0x${string}`;
        typeHex: `0x${string}`;
        v: bigint;
        chainId: number;
        isSystemTx?: undefined;
        mint?: undefined;
        sourceHash?: undefined;
        blockHash: (blockTag_1 extends "pending" ? true : false) extends infer T_31 ? T_31 extends (blockTag_1 extends "pending" ? true : false) ? T_31 extends true ? null : `0x${string}` : never : never;
        blockNumber: (blockTag_1 extends "pending" ? true : false) extends infer T_32 ? T_32 extends (blockTag_1 extends "pending" ? true : false) ? T_32 extends true ? null : bigint : never : never;
        transactionIndex: (blockTag_1 extends "pending" ? true : false) extends infer T_33 ? T_33 extends (blockTag_1 extends "pending" ? true : false) ? T_33 extends true ? null : number : never : never;
    } | {
        to: `0x${string}`;
        from: `0x${string}`;
        gas: bigint;
        nonce: number;
        type: "eip7702";
        value: bigint;
        maxFeePerBlobGas?: undefined;
        gasPrice?: undefined;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        accessList: import("viem").AccessList;
        blobVersionedHashes?: undefined;
        authorizationList: import("viem/experimental").SignedAuthorizationList<number>;
        yParity: number;
        hash: `0x${string}`;
        input: `0x${string}`;
        r: `0x${string}`;
        s: `0x${string}`;
        typeHex: `0x${string}`;
        v: bigint;
        chainId: number;
        isSystemTx?: undefined;
        mint?: undefined;
        sourceHash?: undefined;
        blockHash: (blockTag_1 extends "pending" ? true : false) extends infer T_34 ? T_34 extends (blockTag_1 extends "pending" ? true : false) ? T_34 extends true ? null : `0x${string}` : never : never;
        blockNumber: (blockTag_1 extends "pending" ? true : false) extends infer T_35 ? T_35 extends (blockTag_1 extends "pending" ? true : false) ? T_35 extends true ? null : bigint : never : never;
        transactionIndex: (blockTag_1 extends "pending" ? true : false) extends infer T_36 ? T_36 extends (blockTag_1 extends "pending" ? true : false) ? T_36 extends true ? null : number : never : never;
    }>;
    getTransactionConfirmations: (args: import("viem").GetTransactionConfirmationsParameters<{
        blockExplorers: {
            readonly default: {
                readonly name: "Basescan";
                readonly url: "https://sepolia.basescan.org";
                readonly apiUrl: "https://api-sepolia.basescan.org/api";
            };
        };
        contracts: {
            readonly disputeGameFactory: {
                readonly 11155111: {
                    readonly address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1";
                };
            };
            readonly l2OutputOracle: {
                readonly 11155111: {
                    readonly address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254";
                };
            };
            readonly portal: {
                readonly 11155111: {
                    readonly address: "0x49f53e41452c74589e85ca1677426ba426459e85";
                    readonly blockCreated: 4446677;
                };
            };
            readonly l1StandardBridge: {
                readonly 11155111: {
                    readonly address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120";
                    readonly blockCreated: 4446677;
                };
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 1059647;
            };
            readonly gasPriceOracle: {
                readonly address: "0x420000000000000000000000000000000000000F";
            };
            readonly l1Block: {
                readonly address: "0x4200000000000000000000000000000000000015";
            };
            readonly l2CrossDomainMessenger: {
                readonly address: "0x4200000000000000000000000000000000000007";
            };
            readonly l2Erc721Bridge: {
                readonly address: "0x4200000000000000000000000000000000000014";
            };
            readonly l2StandardBridge: {
                readonly address: "0x4200000000000000000000000000000000000010";
            };
            readonly l2ToL1MessagePasser: {
                readonly address: "0x4200000000000000000000000000000000000016";
            };
        };
        id: 84532;
        name: "Base Sepolia";
        nativeCurrency: {
            readonly name: "Sepolia Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://sepolia.base.org"];
            };
        };
        sourceId: 11155111;
        testnet: true;
        custom?: Record<string, unknown>;
        fees?: import("viem").ChainFees<undefined>;
        formatters: {
            readonly block: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcBlock<import("viem").BlockTag, boolean>) => {
                    baseFeePerGas: bigint;
                    blobGasUsed: bigint;
                    difficulty: bigint;
                    excessBlobGas: bigint;
                    extraData: `0x${string}`;
                    gasLimit: bigint;
                    gasUsed: bigint;
                    hash: `0x${string}`;
                    logsBloom: `0x${string}`;
                    miner: `0x${string}`;
                    mixHash: `0x${string}`;
                    nonce: `0x${string}`;
                    number: bigint;
                    parentHash: `0x${string}`;
                    receiptsRoot: `0x${string}`;
                    sealFields: `0x${string}`[];
                    sha3Uncles: `0x${string}`;
                    size: bigint;
                    stateRoot: `0x${string}`;
                    timestamp: bigint;
                    totalDifficulty: bigint;
                    transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                    transactionsRoot: `0x${string}`;
                    uncles: `0x${string}`[];
                    withdrawals?: import("viem").Withdrawal[];
                    withdrawalsRoot?: `0x${string}`;
                };
                type: "block";
            };
            readonly transaction: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransaction<boolean>) => {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: boolean;
                    mint?: bigint;
                    sourceHash: `0x${string}`;
                    type: "deposit";
                } | {
                    r: `0x${string}`;
                    s: `0x${string}`;
                    v: bigint;
                    to: `0x${string}`;
                    from: `0x${string}`;
                    gas: bigint;
                    nonce: number;
                    value: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    accessList?: undefined;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId?: number;
                    yParity?: undefined;
                    type: "legacy";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip2930";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip1559";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes: readonly `0x${string}`[];
                    chainId: number;
                    type: "eip4844";
                    gasPrice?: undefined;
                    maxFeePerBlobGas: bigint;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList: import("viem/experimental").SignedAuthorizationList<number>;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip7702";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                };
                type: "transaction";
            };
            readonly transactionReceipt: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransactionReceipt) => {
                    blobGasPrice?: bigint;
                    blobGasUsed?: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    contractAddress: `0x${string}`;
                    cumulativeGasUsed: bigint;
                    effectiveGasPrice: bigint;
                    from: `0x${string}`;
                    gasUsed: bigint;
                    logs: {
                        address: `0x${string}`;
                        blockHash: `0x${string}`;
                        blockNumber: bigint;
                        data: `0x${string}`;
                        logIndex: number;
                        transactionHash: `0x${string}`;
                        transactionIndex: number;
                        removed: boolean;
                    }[];
                    logsBloom: `0x${string}`;
                    root?: `0x${string}`;
                    status: "success" | "reverted";
                    to: `0x${string}`;
                    transactionHash: `0x${string}`;
                    transactionIndex: number;
                    type: import("viem").TransactionType;
                    l1GasPrice: bigint;
                    l1GasUsed: bigint;
                    l1Fee: bigint;
                    l1FeeScalar: number;
                };
                type: "transactionReceipt";
            };
        };
        serializers: {
            readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
        };
        readonly network: "base-sepolia";
    }>) => Promise<bigint>;
    getTransactionCount: (args: import("viem").GetTransactionCountParameters) => Promise<number>;
    getTransactionReceipt: (args: import("viem").GetTransactionReceiptParameters) => Promise<{
        blobGasPrice?: bigint;
        blobGasUsed?: bigint;
        blockHash: `0x${string}`;
        blockNumber: bigint;
        contractAddress: `0x${string}`;
        cumulativeGasUsed: bigint;
        effectiveGasPrice: bigint;
        from: `0x${string}`;
        gasUsed: bigint;
        logs: {
            address: `0x${string}`;
            blockHash: `0x${string}`;
            blockNumber: bigint;
            data: `0x${string}`;
            logIndex: number;
            transactionHash: `0x${string}`;
            transactionIndex: number;
            removed: boolean;
        }[];
        logsBloom: `0x${string}`;
        root?: `0x${string}`;
        status: "success" | "reverted";
        to: `0x${string}`;
        transactionHash: `0x${string}`;
        transactionIndex: number;
        type: import("viem").TransactionType;
        l1GasPrice: bigint;
        l1GasUsed: bigint;
        l1Fee: bigint;
        l1FeeScalar: number;
    }>;
    multicall: <const contracts extends readonly unknown[], allowFailure extends boolean = true>(args: import("viem").MulticallParameters<contracts, allowFailure>) => Promise<import("viem").MulticallReturnType<contracts, allowFailure>>;
    prepareTransactionRequest: <const request extends import("viem").PrepareTransactionRequestRequest<{
        blockExplorers: {
            readonly default: {
                readonly name: "Basescan";
                readonly url: "https://sepolia.basescan.org";
                readonly apiUrl: "https://api-sepolia.basescan.org/api";
            };
        };
        contracts: {
            readonly disputeGameFactory: {
                readonly 11155111: {
                    readonly address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1";
                };
            };
            readonly l2OutputOracle: {
                readonly 11155111: {
                    readonly address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254";
                };
            };
            readonly portal: {
                readonly 11155111: {
                    readonly address: "0x49f53e41452c74589e85ca1677426ba426459e85";
                    readonly blockCreated: 4446677;
                };
            };
            readonly l1StandardBridge: {
                readonly 11155111: {
                    readonly address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120";
                    readonly blockCreated: 4446677;
                };
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 1059647;
            };
            readonly gasPriceOracle: {
                readonly address: "0x420000000000000000000000000000000000000F";
            };
            readonly l1Block: {
                readonly address: "0x4200000000000000000000000000000000000015";
            };
            readonly l2CrossDomainMessenger: {
                readonly address: "0x4200000000000000000000000000000000000007";
            };
            readonly l2Erc721Bridge: {
                readonly address: "0x4200000000000000000000000000000000000014";
            };
            readonly l2StandardBridge: {
                readonly address: "0x4200000000000000000000000000000000000010";
            };
            readonly l2ToL1MessagePasser: {
                readonly address: "0x4200000000000000000000000000000000000016";
            };
        };
        id: 84532;
        name: "Base Sepolia";
        nativeCurrency: {
            readonly name: "Sepolia Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://sepolia.base.org"];
            };
        };
        sourceId: 11155111;
        testnet: true;
        custom?: Record<string, unknown>;
        fees?: import("viem").ChainFees<undefined>;
        formatters: {
            readonly block: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcBlock<import("viem").BlockTag, boolean>) => {
                    baseFeePerGas: bigint;
                    blobGasUsed: bigint;
                    difficulty: bigint;
                    excessBlobGas: bigint;
                    extraData: `0x${string}`;
                    gasLimit: bigint;
                    gasUsed: bigint;
                    hash: `0x${string}`;
                    logsBloom: `0x${string}`;
                    miner: `0x${string}`;
                    mixHash: `0x${string}`;
                    nonce: `0x${string}`;
                    number: bigint;
                    parentHash: `0x${string}`;
                    receiptsRoot: `0x${string}`;
                    sealFields: `0x${string}`[];
                    sha3Uncles: `0x${string}`;
                    size: bigint;
                    stateRoot: `0x${string}`;
                    timestamp: bigint;
                    totalDifficulty: bigint;
                    transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                    transactionsRoot: `0x${string}`;
                    uncles: `0x${string}`[];
                    withdrawals?: import("viem").Withdrawal[];
                    withdrawalsRoot?: `0x${string}`;
                };
                type: "block";
            };
            readonly transaction: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransaction<boolean>) => {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: boolean;
                    mint?: bigint;
                    sourceHash: `0x${string}`;
                    type: "deposit";
                } | {
                    r: `0x${string}`;
                    s: `0x${string}`;
                    v: bigint;
                    to: `0x${string}`;
                    from: `0x${string}`;
                    gas: bigint;
                    nonce: number;
                    value: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    accessList?: undefined;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId?: number;
                    yParity?: undefined;
                    type: "legacy";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip2930";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip1559";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes: readonly `0x${string}`[];
                    chainId: number;
                    type: "eip4844";
                    gasPrice?: undefined;
                    maxFeePerBlobGas: bigint;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList: import("viem/experimental").SignedAuthorizationList<number>;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip7702";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                };
                type: "transaction";
            };
            readonly transactionReceipt: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransactionReceipt) => {
                    blobGasPrice?: bigint;
                    blobGasUsed?: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    contractAddress: `0x${string}`;
                    cumulativeGasUsed: bigint;
                    effectiveGasPrice: bigint;
                    from: `0x${string}`;
                    gasUsed: bigint;
                    logs: {
                        address: `0x${string}`;
                        blockHash: `0x${string}`;
                        blockNumber: bigint;
                        data: `0x${string}`;
                        logIndex: number;
                        transactionHash: `0x${string}`;
                        transactionIndex: number;
                        removed: boolean;
                    }[];
                    logsBloom: `0x${string}`;
                    root?: `0x${string}`;
                    status: "success" | "reverted";
                    to: `0x${string}`;
                    transactionHash: `0x${string}`;
                    transactionIndex: number;
                    type: import("viem").TransactionType;
                    l1GasPrice: bigint;
                    l1GasUsed: bigint;
                    l1Fee: bigint;
                    l1FeeScalar: number;
                };
                type: "transactionReceipt";
            };
        };
        serializers: {
            readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
        };
        readonly network: "base-sepolia";
    }, chainOverride_2>, chainOverride_2 extends import("viem").Chain = undefined, accountOverride extends `0x${string}` | import("viem").Account = undefined>(args: import("viem").PrepareTransactionRequestParameters<{
        blockExplorers: {
            readonly default: {
                readonly name: "Basescan";
                readonly url: "https://sepolia.basescan.org";
                readonly apiUrl: "https://api-sepolia.basescan.org/api";
            };
        };
        contracts: {
            readonly disputeGameFactory: {
                readonly 11155111: {
                    readonly address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1";
                };
            };
            readonly l2OutputOracle: {
                readonly 11155111: {
                    readonly address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254";
                };
            };
            readonly portal: {
                readonly 11155111: {
                    readonly address: "0x49f53e41452c74589e85ca1677426ba426459e85";
                    readonly blockCreated: 4446677;
                };
            };
            readonly l1StandardBridge: {
                readonly 11155111: {
                    readonly address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120";
                    readonly blockCreated: 4446677;
                };
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 1059647;
            };
            readonly gasPriceOracle: {
                readonly address: "0x420000000000000000000000000000000000000F";
            };
            readonly l1Block: {
                readonly address: "0x4200000000000000000000000000000000000015";
            };
            readonly l2CrossDomainMessenger: {
                readonly address: "0x4200000000000000000000000000000000000007";
            };
            readonly l2Erc721Bridge: {
                readonly address: "0x4200000000000000000000000000000000000014";
            };
            readonly l2StandardBridge: {
                readonly address: "0x4200000000000000000000000000000000000010";
            };
            readonly l2ToL1MessagePasser: {
                readonly address: "0x4200000000000000000000000000000000000016";
            };
        };
        id: 84532;
        name: "Base Sepolia";
        nativeCurrency: {
            readonly name: "Sepolia Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://sepolia.base.org"];
            };
        };
        sourceId: 11155111;
        testnet: true;
        custom?: Record<string, unknown>;
        fees?: import("viem").ChainFees<undefined>;
        formatters: {
            readonly block: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcBlock<import("viem").BlockTag, boolean>) => {
                    baseFeePerGas: bigint;
                    blobGasUsed: bigint;
                    difficulty: bigint;
                    excessBlobGas: bigint;
                    extraData: `0x${string}`;
                    gasLimit: bigint;
                    gasUsed: bigint;
                    hash: `0x${string}`;
                    logsBloom: `0x${string}`;
                    miner: `0x${string}`;
                    mixHash: `0x${string}`;
                    nonce: `0x${string}`;
                    number: bigint;
                    parentHash: `0x${string}`;
                    receiptsRoot: `0x${string}`;
                    sealFields: `0x${string}`[];
                    sha3Uncles: `0x${string}`;
                    size: bigint;
                    stateRoot: `0x${string}`;
                    timestamp: bigint;
                    totalDifficulty: bigint;
                    transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                    transactionsRoot: `0x${string}`;
                    uncles: `0x${string}`[];
                    withdrawals?: import("viem").Withdrawal[];
                    withdrawalsRoot?: `0x${string}`;
                };
                type: "block";
            };
            readonly transaction: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransaction<boolean>) => {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: boolean;
                    mint?: bigint;
                    sourceHash: `0x${string}`;
                    type: "deposit";
                } | {
                    r: `0x${string}`;
                    s: `0x${string}`;
                    v: bigint;
                    to: `0x${string}`;
                    from: `0x${string}`;
                    gas: bigint;
                    nonce: number;
                    value: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    accessList?: undefined;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId?: number;
                    yParity?: undefined;
                    type: "legacy";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip2930";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip1559";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes: readonly `0x${string}`[];
                    chainId: number;
                    type: "eip4844";
                    gasPrice?: undefined;
                    maxFeePerBlobGas: bigint;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList: import("viem/experimental").SignedAuthorizationList<number>;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip7702";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                };
                type: "transaction";
            };
            readonly transactionReceipt: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransactionReceipt) => {
                    blobGasPrice?: bigint;
                    blobGasUsed?: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    contractAddress: `0x${string}`;
                    cumulativeGasUsed: bigint;
                    effectiveGasPrice: bigint;
                    from: `0x${string}`;
                    gasUsed: bigint;
                    logs: {
                        address: `0x${string}`;
                        blockHash: `0x${string}`;
                        blockNumber: bigint;
                        data: `0x${string}`;
                        logIndex: number;
                        transactionHash: `0x${string}`;
                        transactionIndex: number;
                        removed: boolean;
                    }[];
                    logsBloom: `0x${string}`;
                    root?: `0x${string}`;
                    status: "success" | "reverted";
                    to: `0x${string}`;
                    transactionHash: `0x${string}`;
                    transactionIndex: number;
                    type: import("viem").TransactionType;
                    l1GasPrice: bigint;
                    l1GasUsed: bigint;
                    l1Fee: bigint;
                    l1FeeScalar: number;
                };
                type: "transactionReceipt";
            };
        };
        serializers: {
            readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
        };
        readonly network: "base-sepolia";
    }, import("viem").Account, chainOverride_2, accountOverride, request>) => Promise<import("viem").UnionRequiredBy<Extract<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "Basescan";
                readonly url: "https://sepolia.basescan.org";
                readonly apiUrl: "https://api-sepolia.basescan.org/api";
            };
        };
        contracts: {
            readonly disputeGameFactory: {
                readonly 11155111: {
                    readonly address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1";
                };
            };
            readonly l2OutputOracle: {
                readonly 11155111: {
                    readonly address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254";
                };
            };
            readonly portal: {
                readonly 11155111: {
                    readonly address: "0x49f53e41452c74589e85ca1677426ba426459e85";
                    readonly blockCreated: 4446677;
                };
            };
            readonly l1StandardBridge: {
                readonly 11155111: {
                    readonly address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120";
                    readonly blockCreated: 4446677;
                };
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 1059647;
            };
            readonly gasPriceOracle: {
                readonly address: "0x420000000000000000000000000000000000000F";
            };
            readonly l1Block: {
                readonly address: "0x4200000000000000000000000000000000000015";
            };
            readonly l2CrossDomainMessenger: {
                readonly address: "0x4200000000000000000000000000000000000007";
            };
            readonly l2Erc721Bridge: {
                readonly address: "0x4200000000000000000000000000000000000014";
            };
            readonly l2StandardBridge: {
                readonly address: "0x4200000000000000000000000000000000000010";
            };
            readonly l2ToL1MessagePasser: {
                readonly address: "0x4200000000000000000000000000000000000016";
            };
        };
        id: 84532;
        name: "Base Sepolia";
        nativeCurrency: {
            readonly name: "Sepolia Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://sepolia.base.org"];
            };
        };
        sourceId: 11155111;
        testnet: true;
        custom?: Record<string, unknown>;
        fees?: import("viem").ChainFees<undefined>;
        formatters: {
            readonly block: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcBlock<import("viem").BlockTag, boolean>) => {
                    baseFeePerGas: bigint;
                    blobGasUsed: bigint;
                    difficulty: bigint;
                    excessBlobGas: bigint;
                    extraData: `0x${string}`;
                    gasLimit: bigint;
                    gasUsed: bigint;
                    hash: `0x${string}`;
                    logsBloom: `0x${string}`;
                    miner: `0x${string}`;
                    mixHash: `0x${string}`;
                    nonce: `0x${string}`;
                    number: bigint;
                    parentHash: `0x${string}`;
                    receiptsRoot: `0x${string}`;
                    sealFields: `0x${string}`[];
                    sha3Uncles: `0x${string}`;
                    size: bigint;
                    stateRoot: `0x${string}`;
                    timestamp: bigint;
                    totalDifficulty: bigint;
                    transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                    transactionsRoot: `0x${string}`;
                    uncles: `0x${string}`[];
                    withdrawals?: import("viem").Withdrawal[];
                    withdrawalsRoot?: `0x${string}`;
                };
                type: "block";
            };
            readonly transaction: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransaction<boolean>) => {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: boolean;
                    mint?: bigint;
                    sourceHash: `0x${string}`;
                    type: "deposit";
                } | {
                    r: `0x${string}`;
                    s: `0x${string}`;
                    v: bigint;
                    to: `0x${string}`;
                    from: `0x${string}`;
                    gas: bigint;
                    nonce: number;
                    value: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    accessList?: undefined;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId?: number;
                    yParity?: undefined;
                    type: "legacy";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip2930";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip1559";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes: readonly `0x${string}`[];
                    chainId: number;
                    type: "eip4844";
                    gasPrice?: undefined;
                    maxFeePerBlobGas: bigint;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList: import("viem/experimental").SignedAuthorizationList<number>;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip7702";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                };
                type: "transaction";
            };
            readonly transactionReceipt: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransactionReceipt) => {
                    blobGasPrice?: bigint;
                    blobGasUsed?: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    contractAddress: `0x${string}`;
                    cumulativeGasUsed: bigint;
                    effectiveGasPrice: bigint;
                    from: `0x${string}`;
                    gasUsed: bigint;
                    logs: {
                        address: `0x${string}`;
                        blockHash: `0x${string}`;
                        blockNumber: bigint;
                        data: `0x${string}`;
                        logIndex: number;
                        transactionHash: `0x${string}`;
                        transactionIndex: number;
                        removed: boolean;
                    }[];
                    logsBloom: `0x${string}`;
                    root?: `0x${string}`;
                    status: "success" | "reverted";
                    to: `0x${string}`;
                    transactionHash: `0x${string}`;
                    transactionIndex: number;
                    type: import("viem").TransactionType;
                    l1GasPrice: bigint;
                    l1GasUsed: bigint;
                    l1Fee: bigint;
                    l1FeeScalar: number;
                };
                type: "transactionReceipt";
            };
        };
        serializers: {
            readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
        };
        readonly network: "base-sepolia";
    }, chainOverride_2>, "transactionRequest", import("viem").TransactionRequest>, "from"> & (import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "Basescan";
                readonly url: "https://sepolia.basescan.org";
                readonly apiUrl: "https://api-sepolia.basescan.org/api";
            };
        };
        contracts: {
            readonly disputeGameFactory: {
                readonly 11155111: {
                    readonly address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1";
                };
            };
            readonly l2OutputOracle: {
                readonly 11155111: {
                    readonly address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254";
                };
            };
            readonly portal: {
                readonly 11155111: {
                    readonly address: "0x49f53e41452c74589e85ca1677426ba426459e85";
                    readonly blockCreated: 4446677;
                };
            };
            readonly l1StandardBridge: {
                readonly 11155111: {
                    readonly address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120";
                    readonly blockCreated: 4446677;
                };
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 1059647;
            };
            readonly gasPriceOracle: {
                readonly address: "0x420000000000000000000000000000000000000F";
            };
            readonly l1Block: {
                readonly address: "0x4200000000000000000000000000000000000015";
            };
            readonly l2CrossDomainMessenger: {
                readonly address: "0x4200000000000000000000000000000000000007";
            };
            readonly l2Erc721Bridge: {
                readonly address: "0x4200000000000000000000000000000000000014";
            };
            readonly l2StandardBridge: {
                readonly address: "0x4200000000000000000000000000000000000010";
            };
            readonly l2ToL1MessagePasser: {
                readonly address: "0x4200000000000000000000000000000000000016";
            };
        };
        id: 84532;
        name: "Base Sepolia";
        nativeCurrency: {
            readonly name: "Sepolia Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://sepolia.base.org"];
            };
        };
        sourceId: 11155111;
        testnet: true;
        custom?: Record<string, unknown>;
        fees?: import("viem").ChainFees<undefined>;
        formatters: {
            readonly block: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcBlock<import("viem").BlockTag, boolean>) => {
                    baseFeePerGas: bigint;
                    blobGasUsed: bigint;
                    difficulty: bigint;
                    excessBlobGas: bigint;
                    extraData: `0x${string}`;
                    gasLimit: bigint;
                    gasUsed: bigint;
                    hash: `0x${string}`;
                    logsBloom: `0x${string}`;
                    miner: `0x${string}`;
                    mixHash: `0x${string}`;
                    nonce: `0x${string}`;
                    number: bigint;
                    parentHash: `0x${string}`;
                    receiptsRoot: `0x${string}`;
                    sealFields: `0x${string}`[];
                    sha3Uncles: `0x${string}`;
                    size: bigint;
                    stateRoot: `0x${string}`;
                    timestamp: bigint;
                    totalDifficulty: bigint;
                    transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                    transactionsRoot: `0x${string}`;
                    uncles: `0x${string}`[];
                    withdrawals?: import("viem").Withdrawal[];
                    withdrawalsRoot?: `0x${string}`;
                };
                type: "block";
            };
            readonly transaction: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransaction<boolean>) => {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: boolean;
                    mint?: bigint;
                    sourceHash: `0x${string}`;
                    type: "deposit";
                } | {
                    r: `0x${string}`;
                    s: `0x${string}`;
                    v: bigint;
                    to: `0x${string}`;
                    from: `0x${string}`;
                    gas: bigint;
                    nonce: number;
                    value: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    accessList?: undefined;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId?: number;
                    yParity?: undefined;
                    type: "legacy";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip2930";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip1559";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes: readonly `0x${string}`[];
                    chainId: number;
                    type: "eip4844";
                    gasPrice?: undefined;
                    maxFeePerBlobGas: bigint;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList: import("viem/experimental").SignedAuthorizationList<number>;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip7702";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                };
                type: "transaction";
            };
            readonly transactionReceipt: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransactionReceipt) => {
                    blobGasPrice?: bigint;
                    blobGasUsed?: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    contractAddress: `0x${string}`;
                    cumulativeGasUsed: bigint;
                    effectiveGasPrice: bigint;
                    from: `0x${string}`;
                    gasUsed: bigint;
                    logs: {
                        address: `0x${string}`;
                        blockHash: `0x${string}`;
                        blockNumber: bigint;
                        data: `0x${string}`;
                        logIndex: number;
                        transactionHash: `0x${string}`;
                        transactionIndex: number;
                        removed: boolean;
                    }[];
                    logsBloom: `0x${string}`;
                    root?: `0x${string}`;
                    status: "success" | "reverted";
                    to: `0x${string}`;
                    transactionHash: `0x${string}`;
                    transactionIndex: number;
                    type: import("viem").TransactionType;
                    l1GasPrice: bigint;
                    l1GasUsed: bigint;
                    l1Fee: bigint;
                    l1FeeScalar: number;
                };
                type: "transactionReceipt";
            };
        };
        serializers: {
            readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
        };
        readonly network: "base-sepolia";
    }, chainOverride_2> extends infer T_51 ? T_51 extends import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "Basescan";
                readonly url: "https://sepolia.basescan.org";
                readonly apiUrl: "https://api-sepolia.basescan.org/api";
            };
        };
        contracts: {
            readonly disputeGameFactory: {
                readonly 11155111: {
                    readonly address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1";
                };
            };
            readonly l2OutputOracle: {
                readonly 11155111: {
                    readonly address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254";
                };
            };
            readonly portal: {
                readonly 11155111: {
                    readonly address: "0x49f53e41452c74589e85ca1677426ba426459e85";
                    readonly blockCreated: 4446677;
                };
            };
            readonly l1StandardBridge: {
                readonly 11155111: {
                    readonly address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120";
                    readonly blockCreated: 4446677;
                };
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 1059647;
            };
            readonly gasPriceOracle: {
                readonly address: "0x420000000000000000000000000000000000000F";
            };
            readonly l1Block: {
                readonly address: "0x4200000000000000000000000000000000000015";
            };
            readonly l2CrossDomainMessenger: {
                readonly address: "0x4200000000000000000000000000000000000007";
            };
            readonly l2Erc721Bridge: {
                readonly address: "0x4200000000000000000000000000000000000014";
            };
            readonly l2StandardBridge: {
                readonly address: "0x4200000000000000000000000000000000000010";
            };
            readonly l2ToL1MessagePasser: {
                readonly address: "0x4200000000000000000000000000000000000016";
            };
        };
        id: 84532;
        name: "Base Sepolia";
        nativeCurrency: {
            readonly name: "Sepolia Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://sepolia.base.org"];
            };
        };
        sourceId: 11155111;
        testnet: true;
        custom?: Record<string, unknown>;
        fees?: import("viem").ChainFees<undefined>;
        formatters: {
            readonly block: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcBlock<import("viem").BlockTag, boolean>) => {
                    baseFeePerGas: bigint;
                    blobGasUsed: bigint;
                    difficulty: bigint;
                    excessBlobGas: bigint;
                    extraData: `0x${string}`;
                    gasLimit: bigint;
                    gasUsed: bigint;
                    hash: `0x${string}`;
                    logsBloom: `0x${string}`;
                    miner: `0x${string}`;
                    mixHash: `0x${string}`;
                    nonce: `0x${string}`;
                    number: bigint;
                    parentHash: `0x${string}`;
                    receiptsRoot: `0x${string}`;
                    sealFields: `0x${string}`[];
                    sha3Uncles: `0x${string}`;
                    size: bigint;
                    stateRoot: `0x${string}`;
                    timestamp: bigint;
                    totalDifficulty: bigint;
                    transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                    transactionsRoot: `0x${string}`;
                    uncles: `0x${string}`[];
                    withdrawals?: import("viem").Withdrawal[];
                    withdrawalsRoot?: `0x${string}`;
                };
                type: "block";
            };
            readonly transaction: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransaction<boolean>) => {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: boolean;
                    mint?: bigint;
                    sourceHash: `0x${string}`;
                    type: "deposit";
                } | {
                    r: `0x${string}`;
                    s: `0x${string}`;
                    v: bigint;
                    to: `0x${string}`;
                    from: `0x${string}`;
                    gas: bigint;
                    nonce: number;
                    value: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    accessList?: undefined;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId?: number;
                    yParity?: undefined;
                    type: "legacy";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip2930";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip1559";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes: readonly `0x${string}`[];
                    chainId: number;
                    type: "eip4844";
                    gasPrice?: undefined;
                    maxFeePerBlobGas: bigint;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList: import("viem/experimental").SignedAuthorizationList<number>;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip7702";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                };
                type: "transaction";
            };
            readonly transactionReceipt: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransactionReceipt) => {
                    blobGasPrice?: bigint;
                    blobGasUsed?: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    contractAddress: `0x${string}`;
                    cumulativeGasUsed: bigint;
                    effectiveGasPrice: bigint;
                    from: `0x${string}`;
                    gasUsed: bigint;
                    logs: {
                        address: `0x${string}`;
                        blockHash: `0x${string}`;
                        blockNumber: bigint;
                        data: `0x${string}`;
                        logIndex: number;
                        transactionHash: `0x${string}`;
                        transactionIndex: number;
                        removed: boolean;
                    }[];
                    logsBloom: `0x${string}`;
                    root?: `0x${string}`;
                    status: "success" | "reverted";
                    to: `0x${string}`;
                    transactionHash: `0x${string}`;
                    transactionIndex: number;
                    type: import("viem").TransactionType;
                    l1GasPrice: bigint;
                    l1GasUsed: bigint;
                    l1Fee: bigint;
                    l1FeeScalar: number;
                };
                type: "transactionReceipt";
            };
        };
        serializers: {
            readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
        };
        readonly network: "base-sepolia";
    }, chainOverride_2> ? T_51 extends import("viem").Chain ? {
        chain: T_51;
    } : {
        chain?: undefined;
    } : never : never) & (import("viem").DeriveAccount<import("viem").Account, accountOverride> extends infer T_52 ? T_52 extends import("viem").DeriveAccount<import("viem").Account, accountOverride> ? T_52 extends import("viem").Account ? {
        account: T_52;
        from: `0x${string}`;
    } : {
        account?: undefined;
        from?: undefined;
    } : never : never), import("viem").IsNever<((request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) extends infer T_53 ? T_53 extends (request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) ? T_53 extends "legacy" ? import("viem").TransactionRequestLegacy : never : never : never) | ((request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) extends infer T_54 ? T_54 extends (request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) ? T_54 extends "eip1559" ? import("viem").TransactionRequestEIP1559 : never : never : never) | ((request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) extends infer T_55 ? T_55 extends (request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) ? T_55 extends "eip2930" ? import("viem").TransactionRequestEIP2930 : never : never : never) | ((request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) extends infer T_56 ? T_56 extends (request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) ? T_56 extends "eip4844" ? import("viem").TransactionRequestEIP4844 : never : never : never) | ((request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) extends infer T_57 ? T_57 extends (request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) ? T_57 extends "eip7702" ? import("viem").TransactionRequestEIP7702 : never : never : never)> extends true ? unknown : import("viem").ExactPartial<((request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) extends infer T_58 ? T_58 extends (request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) ? T_58 extends "legacy" ? import("viem").TransactionRequestLegacy : never : never : never) | ((request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) extends infer T_59 ? T_59 extends (request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) ? T_59 extends "eip1559" ? import("viem").TransactionRequestEIP1559 : never : never : never) | ((request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) extends infer T_60 ? T_60 extends (request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) ? T_60 extends "eip2930" ? import("viem").TransactionRequestEIP2930 : never : never : never) | ((request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) extends infer T_61 ? T_61 extends (request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) ? T_61 extends "eip4844" ? import("viem").TransactionRequestEIP4844 : never : never : never) | ((request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) extends infer T_62 ? T_62 extends (request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) ? T_62 extends "eip7702" ? import("viem").TransactionRequestEIP7702 : never : never : never)>> & {
        chainId?: number;
    }, (request["parameters"] extends readonly import("viem").PrepareTransactionRequestParameterType[] ? request["parameters"][number] : "gas" | "nonce" | "type" | "blobVersionedHashes" | "fees" | "chainId") extends infer T_63 ? T_63 extends (request["parameters"] extends readonly import("viem").PrepareTransactionRequestParameterType[] ? request["parameters"][number] : "gas" | "nonce" | "type" | "blobVersionedHashes" | "fees" | "chainId") ? T_63 extends "fees" ? "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" : T_63 : never : never> & (unknown extends request["kzg"] ? {} : Pick<request, "kzg">) extends infer T_37 ? { [K_1 in keyof T_37]: (import("viem").UnionRequiredBy<Extract<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "Basescan";
                readonly url: "https://sepolia.basescan.org";
                readonly apiUrl: "https://api-sepolia.basescan.org/api";
            };
        };
        contracts: {
            readonly disputeGameFactory: {
                readonly 11155111: {
                    readonly address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1";
                };
            };
            readonly l2OutputOracle: {
                readonly 11155111: {
                    readonly address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254";
                };
            };
            readonly portal: {
                readonly 11155111: {
                    readonly address: "0x49f53e41452c74589e85ca1677426ba426459e85";
                    readonly blockCreated: 4446677;
                };
            };
            readonly l1StandardBridge: {
                readonly 11155111: {
                    readonly address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120";
                    readonly blockCreated: 4446677;
                };
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 1059647;
            };
            readonly gasPriceOracle: {
                readonly address: "0x420000000000000000000000000000000000000F";
            };
            readonly l1Block: {
                readonly address: "0x4200000000000000000000000000000000000015";
            };
            readonly l2CrossDomainMessenger: {
                readonly address: "0x4200000000000000000000000000000000000007";
            };
            readonly l2Erc721Bridge: {
                readonly address: "0x4200000000000000000000000000000000000014";
            };
            readonly l2StandardBridge: {
                readonly address: "0x4200000000000000000000000000000000000010";
            };
            readonly l2ToL1MessagePasser: {
                readonly address: "0x4200000000000000000000000000000000000016";
            };
        };
        id: 84532;
        name: "Base Sepolia";
        nativeCurrency: {
            readonly name: "Sepolia Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://sepolia.base.org"];
            };
        };
        sourceId: 11155111;
        testnet: true;
        custom?: Record<string, unknown>;
        fees?: import("viem").ChainFees<undefined>;
        formatters: {
            readonly block: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcBlock<import("viem").BlockTag, boolean>) => {
                    baseFeePerGas: bigint;
                    blobGasUsed: bigint;
                    difficulty: bigint;
                    excessBlobGas: bigint;
                    extraData: `0x${string}`;
                    gasLimit: bigint;
                    gasUsed: bigint;
                    hash: `0x${string}`;
                    logsBloom: `0x${string}`;
                    miner: `0x${string}`;
                    mixHash: `0x${string}`;
                    nonce: `0x${string}`;
                    number: bigint;
                    parentHash: `0x${string}`;
                    receiptsRoot: `0x${string}`;
                    sealFields: `0x${string}`[];
                    sha3Uncles: `0x${string}`;
                    size: bigint;
                    stateRoot: `0x${string}`;
                    timestamp: bigint;
                    totalDifficulty: bigint;
                    transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                    transactionsRoot: `0x${string}`;
                    uncles: `0x${string}`[];
                    withdrawals?: import("viem").Withdrawal[];
                    withdrawalsRoot?: `0x${string}`;
                };
                type: "block";
            };
            readonly transaction: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransaction<boolean>) => {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: boolean;
                    mint?: bigint;
                    sourceHash: `0x${string}`;
                    type: "deposit";
                } | {
                    r: `0x${string}`;
                    s: `0x${string}`;
                    v: bigint;
                    to: `0x${string}`;
                    from: `0x${string}`;
                    gas: bigint;
                    nonce: number;
                    value: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    accessList?: undefined;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId?: number;
                    yParity?: undefined;
                    type: "legacy";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip2930";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip1559";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes: readonly `0x${string}`[];
                    chainId: number;
                    type: "eip4844";
                    gasPrice?: undefined;
                    maxFeePerBlobGas: bigint;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList: import("viem/experimental").SignedAuthorizationList<number>;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip7702";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                };
                type: "transaction";
            };
            readonly transactionReceipt: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransactionReceipt) => {
                    blobGasPrice?: bigint;
                    blobGasUsed?: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    contractAddress: `0x${string}`;
                    cumulativeGasUsed: bigint;
                    effectiveGasPrice: bigint;
                    from: `0x${string}`;
                    gasUsed: bigint;
                    logs: {
                        address: `0x${string}`;
                        blockHash: `0x${string}`;
                        blockNumber: bigint;
                        data: `0x${string}`;
                        logIndex: number;
                        transactionHash: `0x${string}`;
                        transactionIndex: number;
                        removed: boolean;
                    }[];
                    logsBloom: `0x${string}`;
                    root?: `0x${string}`;
                    status: "success" | "reverted";
                    to: `0x${string}`;
                    transactionHash: `0x${string}`;
                    transactionIndex: number;
                    type: import("viem").TransactionType;
                    l1GasPrice: bigint;
                    l1GasUsed: bigint;
                    l1Fee: bigint;
                    l1FeeScalar: number;
                };
                type: "transactionReceipt";
            };
        };
        serializers: {
            readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
        };
        readonly network: "base-sepolia";
    }, chainOverride_2>, "transactionRequest", import("viem").TransactionRequest>, "from"> & (import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "Basescan";
                readonly url: "https://sepolia.basescan.org";
                readonly apiUrl: "https://api-sepolia.basescan.org/api";
            };
        };
        contracts: {
            readonly disputeGameFactory: {
                readonly 11155111: {
                    readonly address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1";
                };
            };
            readonly l2OutputOracle: {
                readonly 11155111: {
                    readonly address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254";
                };
            };
            readonly portal: {
                readonly 11155111: {
                    readonly address: "0x49f53e41452c74589e85ca1677426ba426459e85";
                    readonly blockCreated: 4446677;
                };
            };
            readonly l1StandardBridge: {
                readonly 11155111: {
                    readonly address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120";
                    readonly blockCreated: 4446677;
                };
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 1059647;
            };
            readonly gasPriceOracle: {
                readonly address: "0x420000000000000000000000000000000000000F";
            };
            readonly l1Block: {
                readonly address: "0x4200000000000000000000000000000000000015";
            };
            readonly l2CrossDomainMessenger: {
                readonly address: "0x4200000000000000000000000000000000000007";
            };
            readonly l2Erc721Bridge: {
                readonly address: "0x4200000000000000000000000000000000000014";
            };
            readonly l2StandardBridge: {
                readonly address: "0x4200000000000000000000000000000000000010";
            };
            readonly l2ToL1MessagePasser: {
                readonly address: "0x4200000000000000000000000000000000000016";
            };
        };
        id: 84532;
        name: "Base Sepolia";
        nativeCurrency: {
            readonly name: "Sepolia Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://sepolia.base.org"];
            };
        };
        sourceId: 11155111;
        testnet: true;
        custom?: Record<string, unknown>;
        fees?: import("viem").ChainFees<undefined>;
        formatters: {
            readonly block: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcBlock<import("viem").BlockTag, boolean>) => {
                    baseFeePerGas: bigint;
                    blobGasUsed: bigint;
                    difficulty: bigint;
                    excessBlobGas: bigint;
                    extraData: `0x${string}`;
                    gasLimit: bigint;
                    gasUsed: bigint;
                    hash: `0x${string}`;
                    logsBloom: `0x${string}`;
                    miner: `0x${string}`;
                    mixHash: `0x${string}`;
                    nonce: `0x${string}`;
                    number: bigint;
                    parentHash: `0x${string}`;
                    receiptsRoot: `0x${string}`;
                    sealFields: `0x${string}`[];
                    sha3Uncles: `0x${string}`;
                    size: bigint;
                    stateRoot: `0x${string}`;
                    timestamp: bigint;
                    totalDifficulty: bigint;
                    transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                    transactionsRoot: `0x${string}`;
                    uncles: `0x${string}`[];
                    withdrawals?: import("viem").Withdrawal[];
                    withdrawalsRoot?: `0x${string}`;
                };
                type: "block";
            };
            readonly transaction: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransaction<boolean>) => {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: boolean;
                    mint?: bigint;
                    sourceHash: `0x${string}`;
                    type: "deposit";
                } | {
                    r: `0x${string}`;
                    s: `0x${string}`;
                    v: bigint;
                    to: `0x${string}`;
                    from: `0x${string}`;
                    gas: bigint;
                    nonce: number;
                    value: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    accessList?: undefined;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId?: number;
                    yParity?: undefined;
                    type: "legacy";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip2930";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip1559";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes: readonly `0x${string}`[];
                    chainId: number;
                    type: "eip4844";
                    gasPrice?: undefined;
                    maxFeePerBlobGas: bigint;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList: import("viem/experimental").SignedAuthorizationList<number>;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip7702";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                };
                type: "transaction";
            };
            readonly transactionReceipt: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransactionReceipt) => {
                    blobGasPrice?: bigint;
                    blobGasUsed?: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    contractAddress: `0x${string}`;
                    cumulativeGasUsed: bigint;
                    effectiveGasPrice: bigint;
                    from: `0x${string}`;
                    gasUsed: bigint;
                    logs: {
                        address: `0x${string}`;
                        blockHash: `0x${string}`;
                        blockNumber: bigint;
                        data: `0x${string}`;
                        logIndex: number;
                        transactionHash: `0x${string}`;
                        transactionIndex: number;
                        removed: boolean;
                    }[];
                    logsBloom: `0x${string}`;
                    root?: `0x${string}`;
                    status: "success" | "reverted";
                    to: `0x${string}`;
                    transactionHash: `0x${string}`;
                    transactionIndex: number;
                    type: import("viem").TransactionType;
                    l1GasPrice: bigint;
                    l1GasUsed: bigint;
                    l1Fee: bigint;
                    l1FeeScalar: number;
                };
                type: "transactionReceipt";
            };
        };
        serializers: {
            readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
        };
        readonly network: "base-sepolia";
    }, chainOverride_2> extends infer T_38 ? T_38 extends import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "Basescan";
                readonly url: "https://sepolia.basescan.org";
                readonly apiUrl: "https://api-sepolia.basescan.org/api";
            };
        };
        contracts: {
            readonly disputeGameFactory: {
                readonly 11155111: {
                    readonly address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1";
                };
            };
            readonly l2OutputOracle: {
                readonly 11155111: {
                    readonly address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254";
                };
            };
            readonly portal: {
                readonly 11155111: {
                    readonly address: "0x49f53e41452c74589e85ca1677426ba426459e85";
                    readonly blockCreated: 4446677;
                };
            };
            readonly l1StandardBridge: {
                readonly 11155111: {
                    readonly address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120";
                    readonly blockCreated: 4446677;
                };
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 1059647;
            };
            readonly gasPriceOracle: {
                readonly address: "0x420000000000000000000000000000000000000F";
            };
            readonly l1Block: {
                readonly address: "0x4200000000000000000000000000000000000015";
            };
            readonly l2CrossDomainMessenger: {
                readonly address: "0x4200000000000000000000000000000000000007";
            };
            readonly l2Erc721Bridge: {
                readonly address: "0x4200000000000000000000000000000000000014";
            };
            readonly l2StandardBridge: {
                readonly address: "0x4200000000000000000000000000000000000010";
            };
            readonly l2ToL1MessagePasser: {
                readonly address: "0x4200000000000000000000000000000000000016";
            };
        };
        id: 84532;
        name: "Base Sepolia";
        nativeCurrency: {
            readonly name: "Sepolia Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://sepolia.base.org"];
            };
        };
        sourceId: 11155111;
        testnet: true;
        custom?: Record<string, unknown>;
        fees?: import("viem").ChainFees<undefined>;
        formatters: {
            readonly block: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcBlock<import("viem").BlockTag, boolean>) => {
                    baseFeePerGas: bigint;
                    blobGasUsed: bigint;
                    difficulty: bigint;
                    excessBlobGas: bigint;
                    extraData: `0x${string}`;
                    gasLimit: bigint;
                    gasUsed: bigint;
                    hash: `0x${string}`;
                    logsBloom: `0x${string}`;
                    miner: `0x${string}`;
                    mixHash: `0x${string}`;
                    nonce: `0x${string}`;
                    number: bigint;
                    parentHash: `0x${string}`;
                    receiptsRoot: `0x${string}`;
                    sealFields: `0x${string}`[];
                    sha3Uncles: `0x${string}`;
                    size: bigint;
                    stateRoot: `0x${string}`;
                    timestamp: bigint;
                    totalDifficulty: bigint;
                    transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                    transactionsRoot: `0x${string}`;
                    uncles: `0x${string}`[];
                    withdrawals?: import("viem").Withdrawal[];
                    withdrawalsRoot?: `0x${string}`;
                };
                type: "block";
            };
            readonly transaction: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransaction<boolean>) => {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: boolean;
                    mint?: bigint;
                    sourceHash: `0x${string}`;
                    type: "deposit";
                } | {
                    r: `0x${string}`;
                    s: `0x${string}`;
                    v: bigint;
                    to: `0x${string}`;
                    from: `0x${string}`;
                    gas: bigint;
                    nonce: number;
                    value: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    accessList?: undefined;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId?: number;
                    yParity?: undefined;
                    type: "legacy";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip2930";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip1559";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes: readonly `0x${string}`[];
                    chainId: number;
                    type: "eip4844";
                    gasPrice?: undefined;
                    maxFeePerBlobGas: bigint;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList: import("viem/experimental").SignedAuthorizationList<number>;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip7702";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                };
                type: "transaction";
            };
            readonly transactionReceipt: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransactionReceipt) => {
                    blobGasPrice?: bigint;
                    blobGasUsed?: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    contractAddress: `0x${string}`;
                    cumulativeGasUsed: bigint;
                    effectiveGasPrice: bigint;
                    from: `0x${string}`;
                    gasUsed: bigint;
                    logs: {
                        address: `0x${string}`;
                        blockHash: `0x${string}`;
                        blockNumber: bigint;
                        data: `0x${string}`;
                        logIndex: number;
                        transactionHash: `0x${string}`;
                        transactionIndex: number;
                        removed: boolean;
                    }[];
                    logsBloom: `0x${string}`;
                    root?: `0x${string}`;
                    status: "success" | "reverted";
                    to: `0x${string}`;
                    transactionHash: `0x${string}`;
                    transactionIndex: number;
                    type: import("viem").TransactionType;
                    l1GasPrice: bigint;
                    l1GasUsed: bigint;
                    l1Fee: bigint;
                    l1FeeScalar: number;
                };
                type: "transactionReceipt";
            };
        };
        serializers: {
            readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
        };
        readonly network: "base-sepolia";
    }, chainOverride_2> ? T_38 extends import("viem").Chain ? {
        chain: T_38;
    } : {
        chain?: undefined;
    } : never : never) & (import("viem").DeriveAccount<import("viem").Account, accountOverride> extends infer T_39 ? T_39 extends import("viem").DeriveAccount<import("viem").Account, accountOverride> ? T_39 extends import("viem").Account ? {
        account: T_39;
        from: `0x${string}`;
    } : {
        account?: undefined;
        from?: undefined;
    } : never : never), import("viem").IsNever<((request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) extends infer T_40 ? T_40 extends (request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) ? T_40 extends "legacy" ? import("viem").TransactionRequestLegacy : never : never : never) | ((request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) extends infer T_41 ? T_41 extends (request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) ? T_41 extends "eip1559" ? import("viem").TransactionRequestEIP1559 : never : never : never) | ((request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) extends infer T_42 ? T_42 extends (request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) ? T_42 extends "eip2930" ? import("viem").TransactionRequestEIP2930 : never : never : never) | ((request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) extends infer T_43 ? T_43 extends (request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) ? T_43 extends "eip4844" ? import("viem").TransactionRequestEIP4844 : never : never : never) | ((request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) extends infer T_44 ? T_44 extends (request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) ? T_44 extends "eip7702" ? import("viem").TransactionRequestEIP7702 : never : never : never)> extends true ? unknown : import("viem").ExactPartial<((request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) extends infer T_45 ? T_45 extends (request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) ? T_45 extends "legacy" ? import("viem").TransactionRequestLegacy : never : never : never) | ((request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) extends infer T_46 ? T_46 extends (request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) ? T_46 extends "eip1559" ? import("viem").TransactionRequestEIP1559 : never : never : never) | ((request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) extends infer T_47 ? T_47 extends (request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) ? T_47 extends "eip2930" ? import("viem").TransactionRequestEIP2930 : never : never : never) | ((request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) extends infer T_48 ? T_48 extends (request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) ? T_48 extends "eip4844" ? import("viem").TransactionRequestEIP4844 : never : never : never) | ((request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) extends infer T_49 ? T_49 extends (request["type"] extends string ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "yParity" | "r" | "s" | "v" | "chainId" ? K_2 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_3 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: bigint;
    } | {
        maxPriorityFeePerGas: bigint;
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").AccessList;
    })) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_4 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_5 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").AccessList;
    }) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_6 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_7 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[];
        maxFeePerBlobGas?: bigint;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
    } | {
        blobVersionedHashes: readonly `0x${string}`[];
    } | {
        sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" | "yParity" | "r" | "s" | "v" | "chainId" ? K_8 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "to" | "data" | "from" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "blobs" | "blobVersionedHashes" | "kzg" | "sidecars" ? K_9 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint;
        maxPriorityFeePerGas?: bigint;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem/experimental").SignedAuthorizationList;
    }) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "to" | "data" | "gas" | "nonce" | "type" | "value" | "maxFeePerBlobGas" | "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" | "accessList" | "authorizationList" | "yParity" | "r" | "s" | "v" | "chainId" ? K_10 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_11 in keyof request]: K_11 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_11 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string ? Extract<request["type"], string> : never)>) ? T_49 extends "eip7702" ? import("viem").TransactionRequestEIP7702 : never : never : never)>> & {
        chainId?: number;
    }, (request["parameters"] extends readonly import("viem").PrepareTransactionRequestParameterType[] ? request["parameters"][number] : "gas" | "nonce" | "type" | "blobVersionedHashes" | "fees" | "chainId") extends infer T_50 ? T_50 extends (request["parameters"] extends readonly import("viem").PrepareTransactionRequestParameterType[] ? request["parameters"][number] : "gas" | "nonce" | "type" | "blobVersionedHashes" | "fees" | "chainId") ? T_50 extends "fees" ? "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" : T_50 : never : never> & (unknown extends request["kzg"] ? {} : Pick<request, "kzg">))[K_1]; } : never>;
    readContract: <const abi_5 extends import("viem").Abi | readonly unknown[], functionName_1 extends import("viem").ContractFunctionName<abi_5, "pure" | "view">, args_2 extends import("viem").ContractFunctionArgs<abi_5, "pure" | "view", functionName_1>>(args: import("viem").ReadContractParameters<abi_5, functionName_1, args_2>) => Promise<import("viem").ReadContractReturnType<abi_5, functionName_1, args_2>>;
    sendRawTransaction: (args: import("viem").SendRawTransactionParameters) => Promise<`0x${string}`>;
    simulateContract: <const abi_6 extends import("viem").Abi | readonly unknown[], functionName_2 extends import("viem").ContractFunctionName<abi_6, "nonpayable" | "payable">, args_3 extends import("viem").ContractFunctionArgs<abi_6, "nonpayable" | "payable", functionName_2>, chainOverride_3 extends import("viem").Chain, accountOverride_1 extends `0x${string}` | import("viem").Account = undefined>(args: import("viem").SimulateContractParameters<abi_6, functionName_2, args_3, {
        blockExplorers: {
            readonly default: {
                readonly name: "Basescan";
                readonly url: "https://sepolia.basescan.org";
                readonly apiUrl: "https://api-sepolia.basescan.org/api";
            };
        };
        contracts: {
            readonly disputeGameFactory: {
                readonly 11155111: {
                    readonly address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1";
                };
            };
            readonly l2OutputOracle: {
                readonly 11155111: {
                    readonly address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254";
                };
            };
            readonly portal: {
                readonly 11155111: {
                    readonly address: "0x49f53e41452c74589e85ca1677426ba426459e85";
                    readonly blockCreated: 4446677;
                };
            };
            readonly l1StandardBridge: {
                readonly 11155111: {
                    readonly address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120";
                    readonly blockCreated: 4446677;
                };
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 1059647;
            };
            readonly gasPriceOracle: {
                readonly address: "0x420000000000000000000000000000000000000F";
            };
            readonly l1Block: {
                readonly address: "0x4200000000000000000000000000000000000015";
            };
            readonly l2CrossDomainMessenger: {
                readonly address: "0x4200000000000000000000000000000000000007";
            };
            readonly l2Erc721Bridge: {
                readonly address: "0x4200000000000000000000000000000000000014";
            };
            readonly l2StandardBridge: {
                readonly address: "0x4200000000000000000000000000000000000010";
            };
            readonly l2ToL1MessagePasser: {
                readonly address: "0x4200000000000000000000000000000000000016";
            };
        };
        id: 84532;
        name: "Base Sepolia";
        nativeCurrency: {
            readonly name: "Sepolia Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://sepolia.base.org"];
            };
        };
        sourceId: 11155111;
        testnet: true;
        custom?: Record<string, unknown>;
        fees?: import("viem").ChainFees<undefined>;
        formatters: {
            readonly block: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcBlock<import("viem").BlockTag, boolean>) => {
                    baseFeePerGas: bigint;
                    blobGasUsed: bigint;
                    difficulty: bigint;
                    excessBlobGas: bigint;
                    extraData: `0x${string}`;
                    gasLimit: bigint;
                    gasUsed: bigint;
                    hash: `0x${string}`;
                    logsBloom: `0x${string}`;
                    miner: `0x${string}`;
                    mixHash: `0x${string}`;
                    nonce: `0x${string}`;
                    number: bigint;
                    parentHash: `0x${string}`;
                    receiptsRoot: `0x${string}`;
                    sealFields: `0x${string}`[];
                    sha3Uncles: `0x${string}`;
                    size: bigint;
                    stateRoot: `0x${string}`;
                    timestamp: bigint;
                    totalDifficulty: bigint;
                    transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                    transactionsRoot: `0x${string}`;
                    uncles: `0x${string}`[];
                    withdrawals?: import("viem").Withdrawal[];
                    withdrawalsRoot?: `0x${string}`;
                };
                type: "block";
            };
            readonly transaction: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransaction<boolean>) => {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: boolean;
                    mint?: bigint;
                    sourceHash: `0x${string}`;
                    type: "deposit";
                } | {
                    r: `0x${string}`;
                    s: `0x${string}`;
                    v: bigint;
                    to: `0x${string}`;
                    from: `0x${string}`;
                    gas: bigint;
                    nonce: number;
                    value: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    accessList?: undefined;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId?: number;
                    yParity?: undefined;
                    type: "legacy";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip2930";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip1559";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes: readonly `0x${string}`[];
                    chainId: number;
                    type: "eip4844";
                    gasPrice?: undefined;
                    maxFeePerBlobGas: bigint;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList: import("viem/experimental").SignedAuthorizationList<number>;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip7702";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                };
                type: "transaction";
            };
            readonly transactionReceipt: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransactionReceipt) => {
                    blobGasPrice?: bigint;
                    blobGasUsed?: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    contractAddress: `0x${string}`;
                    cumulativeGasUsed: bigint;
                    effectiveGasPrice: bigint;
                    from: `0x${string}`;
                    gasUsed: bigint;
                    logs: {
                        address: `0x${string}`;
                        blockHash: `0x${string}`;
                        blockNumber: bigint;
                        data: `0x${string}`;
                        logIndex: number;
                        transactionHash: `0x${string}`;
                        transactionIndex: number;
                        removed: boolean;
                    }[];
                    logsBloom: `0x${string}`;
                    root?: `0x${string}`;
                    status: "success" | "reverted";
                    to: `0x${string}`;
                    transactionHash: `0x${string}`;
                    transactionIndex: number;
                    type: import("viem").TransactionType;
                    l1GasPrice: bigint;
                    l1GasUsed: bigint;
                    l1Fee: bigint;
                    l1FeeScalar: number;
                };
                type: "transactionReceipt";
            };
        };
        serializers: {
            readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
        };
        readonly network: "base-sepolia";
    }, chainOverride_3, accountOverride_1>) => Promise<import("viem").SimulateContractReturnType<abi_6, functionName_2, args_3, {
        blockExplorers: {
            readonly default: {
                readonly name: "Basescan";
                readonly url: "https://sepolia.basescan.org";
                readonly apiUrl: "https://api-sepolia.basescan.org/api";
            };
        };
        contracts: {
            readonly disputeGameFactory: {
                readonly 11155111: {
                    readonly address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1";
                };
            };
            readonly l2OutputOracle: {
                readonly 11155111: {
                    readonly address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254";
                };
            };
            readonly portal: {
                readonly 11155111: {
                    readonly address: "0x49f53e41452c74589e85ca1677426ba426459e85";
                    readonly blockCreated: 4446677;
                };
            };
            readonly l1StandardBridge: {
                readonly 11155111: {
                    readonly address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120";
                    readonly blockCreated: 4446677;
                };
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 1059647;
            };
            readonly gasPriceOracle: {
                readonly address: "0x420000000000000000000000000000000000000F";
            };
            readonly l1Block: {
                readonly address: "0x4200000000000000000000000000000000000015";
            };
            readonly l2CrossDomainMessenger: {
                readonly address: "0x4200000000000000000000000000000000000007";
            };
            readonly l2Erc721Bridge: {
                readonly address: "0x4200000000000000000000000000000000000014";
            };
            readonly l2StandardBridge: {
                readonly address: "0x4200000000000000000000000000000000000010";
            };
            readonly l2ToL1MessagePasser: {
                readonly address: "0x4200000000000000000000000000000000000016";
            };
        };
        id: 84532;
        name: "Base Sepolia";
        nativeCurrency: {
            readonly name: "Sepolia Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://sepolia.base.org"];
            };
        };
        sourceId: 11155111;
        testnet: true;
        custom?: Record<string, unknown>;
        fees?: import("viem").ChainFees<undefined>;
        formatters: {
            readonly block: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcBlock<import("viem").BlockTag, boolean>) => {
                    baseFeePerGas: bigint;
                    blobGasUsed: bigint;
                    difficulty: bigint;
                    excessBlobGas: bigint;
                    extraData: `0x${string}`;
                    gasLimit: bigint;
                    gasUsed: bigint;
                    hash: `0x${string}`;
                    logsBloom: `0x${string}`;
                    miner: `0x${string}`;
                    mixHash: `0x${string}`;
                    nonce: `0x${string}`;
                    number: bigint;
                    parentHash: `0x${string}`;
                    receiptsRoot: `0x${string}`;
                    sealFields: `0x${string}`[];
                    sha3Uncles: `0x${string}`;
                    size: bigint;
                    stateRoot: `0x${string}`;
                    timestamp: bigint;
                    totalDifficulty: bigint;
                    transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                    transactionsRoot: `0x${string}`;
                    uncles: `0x${string}`[];
                    withdrawals?: import("viem").Withdrawal[];
                    withdrawalsRoot?: `0x${string}`;
                };
                type: "block";
            };
            readonly transaction: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransaction<boolean>) => {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: boolean;
                    mint?: bigint;
                    sourceHash: `0x${string}`;
                    type: "deposit";
                } | {
                    r: `0x${string}`;
                    s: `0x${string}`;
                    v: bigint;
                    to: `0x${string}`;
                    from: `0x${string}`;
                    gas: bigint;
                    nonce: number;
                    value: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    accessList?: undefined;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId?: number;
                    yParity?: undefined;
                    type: "legacy";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip2930";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip1559";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes: readonly `0x${string}`[];
                    chainId: number;
                    type: "eip4844";
                    gasPrice?: undefined;
                    maxFeePerBlobGas: bigint;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList: import("viem/experimental").SignedAuthorizationList<number>;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip7702";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                };
                type: "transaction";
            };
            readonly transactionReceipt: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransactionReceipt) => {
                    blobGasPrice?: bigint;
                    blobGasUsed?: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    contractAddress: `0x${string}`;
                    cumulativeGasUsed: bigint;
                    effectiveGasPrice: bigint;
                    from: `0x${string}`;
                    gasUsed: bigint;
                    logs: {
                        address: `0x${string}`;
                        blockHash: `0x${string}`;
                        blockNumber: bigint;
                        data: `0x${string}`;
                        logIndex: number;
                        transactionHash: `0x${string}`;
                        transactionIndex: number;
                        removed: boolean;
                    }[];
                    logsBloom: `0x${string}`;
                    root?: `0x${string}`;
                    status: "success" | "reverted";
                    to: `0x${string}`;
                    transactionHash: `0x${string}`;
                    transactionIndex: number;
                    type: import("viem").TransactionType;
                    l1GasPrice: bigint;
                    l1GasUsed: bigint;
                    l1Fee: bigint;
                    l1FeeScalar: number;
                };
                type: "transactionReceipt";
            };
        };
        serializers: {
            readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
        };
        readonly network: "base-sepolia";
    }, import("viem").Account, chainOverride_3, accountOverride_1>>;
    verifyMessage: (args: {
        address: `0x${string}`;
        factory?: `0x${string}`;
        factoryData?: `0x${string}`;
        blockNumber?: bigint;
        blockTag?: import("viem").BlockTag;
        signature: `0x${string}` | Uint8Array | import("viem").Signature;
        message: import("viem").SignableMessage;
    }) => Promise<boolean>;
    verifySiweMessage: (args: {
        blockNumber?: bigint;
        blockTag?: import("viem").BlockTag;
        nonce?: string;
        address?: `0x${string}`;
        domain?: string;
        scheme?: string;
        time?: Date;
        message: string;
        signature: `0x${string}`;
    }) => Promise<boolean>;
    verifyTypedData: (args: import("viem").VerifyTypedDataActionParameters) => Promise<boolean>;
    uninstallFilter: (args: import("viem").UninstallFilterParameters) => Promise<boolean>;
    waitForTransactionReceipt: (args: import("viem").WaitForTransactionReceiptParameters<{
        blockExplorers: {
            readonly default: {
                readonly name: "Basescan";
                readonly url: "https://sepolia.basescan.org";
                readonly apiUrl: "https://api-sepolia.basescan.org/api";
            };
        };
        contracts: {
            readonly disputeGameFactory: {
                readonly 11155111: {
                    readonly address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1";
                };
            };
            readonly l2OutputOracle: {
                readonly 11155111: {
                    readonly address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254";
                };
            };
            readonly portal: {
                readonly 11155111: {
                    readonly address: "0x49f53e41452c74589e85ca1677426ba426459e85";
                    readonly blockCreated: 4446677;
                };
            };
            readonly l1StandardBridge: {
                readonly 11155111: {
                    readonly address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120";
                    readonly blockCreated: 4446677;
                };
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 1059647;
            };
            readonly gasPriceOracle: {
                readonly address: "0x420000000000000000000000000000000000000F";
            };
            readonly l1Block: {
                readonly address: "0x4200000000000000000000000000000000000015";
            };
            readonly l2CrossDomainMessenger: {
                readonly address: "0x4200000000000000000000000000000000000007";
            };
            readonly l2Erc721Bridge: {
                readonly address: "0x4200000000000000000000000000000000000014";
            };
            readonly l2StandardBridge: {
                readonly address: "0x4200000000000000000000000000000000000010";
            };
            readonly l2ToL1MessagePasser: {
                readonly address: "0x4200000000000000000000000000000000000016";
            };
        };
        id: 84532;
        name: "Base Sepolia";
        nativeCurrency: {
            readonly name: "Sepolia Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://sepolia.base.org"];
            };
        };
        sourceId: 11155111;
        testnet: true;
        custom?: Record<string, unknown>;
        fees?: import("viem").ChainFees<undefined>;
        formatters: {
            readonly block: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcBlock<import("viem").BlockTag, boolean>) => {
                    baseFeePerGas: bigint;
                    blobGasUsed: bigint;
                    difficulty: bigint;
                    excessBlobGas: bigint;
                    extraData: `0x${string}`;
                    gasLimit: bigint;
                    gasUsed: bigint;
                    hash: `0x${string}`;
                    logsBloom: `0x${string}`;
                    miner: `0x${string}`;
                    mixHash: `0x${string}`;
                    nonce: `0x${string}`;
                    number: bigint;
                    parentHash: `0x${string}`;
                    receiptsRoot: `0x${string}`;
                    sealFields: `0x${string}`[];
                    sha3Uncles: `0x${string}`;
                    size: bigint;
                    stateRoot: `0x${string}`;
                    timestamp: bigint;
                    totalDifficulty: bigint;
                    transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                    transactionsRoot: `0x${string}`;
                    uncles: `0x${string}`[];
                    withdrawals?: import("viem").Withdrawal[];
                    withdrawalsRoot?: `0x${string}`;
                };
                type: "block";
            };
            readonly transaction: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransaction<boolean>) => {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: boolean;
                    mint?: bigint;
                    sourceHash: `0x${string}`;
                    type: "deposit";
                } | {
                    r: `0x${string}`;
                    s: `0x${string}`;
                    v: bigint;
                    to: `0x${string}`;
                    from: `0x${string}`;
                    gas: bigint;
                    nonce: number;
                    value: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    accessList?: undefined;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId?: number;
                    yParity?: undefined;
                    type: "legacy";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip2930";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip1559";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes: readonly `0x${string}`[];
                    chainId: number;
                    type: "eip4844";
                    gasPrice?: undefined;
                    maxFeePerBlobGas: bigint;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList: import("viem/experimental").SignedAuthorizationList<number>;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip7702";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                };
                type: "transaction";
            };
            readonly transactionReceipt: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransactionReceipt) => {
                    blobGasPrice?: bigint;
                    blobGasUsed?: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    contractAddress: `0x${string}`;
                    cumulativeGasUsed: bigint;
                    effectiveGasPrice: bigint;
                    from: `0x${string}`;
                    gasUsed: bigint;
                    logs: {
                        address: `0x${string}`;
                        blockHash: `0x${string}`;
                        blockNumber: bigint;
                        data: `0x${string}`;
                        logIndex: number;
                        transactionHash: `0x${string}`;
                        transactionIndex: number;
                        removed: boolean;
                    }[];
                    logsBloom: `0x${string}`;
                    root?: `0x${string}`;
                    status: "success" | "reverted";
                    to: `0x${string}`;
                    transactionHash: `0x${string}`;
                    transactionIndex: number;
                    type: import("viem").TransactionType;
                    l1GasPrice: bigint;
                    l1GasUsed: bigint;
                    l1Fee: bigint;
                    l1FeeScalar: number;
                };
                type: "transactionReceipt";
            };
        };
        serializers: {
            readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
        };
        readonly network: "base-sepolia";
    }>) => Promise<{
        blobGasPrice?: bigint;
        blobGasUsed?: bigint;
        blockHash: `0x${string}`;
        blockNumber: bigint;
        contractAddress: `0x${string}`;
        cumulativeGasUsed: bigint;
        effectiveGasPrice: bigint;
        from: `0x${string}`;
        gasUsed: bigint;
        logs: {
            address: `0x${string}`;
            blockHash: `0x${string}`;
            blockNumber: bigint;
            data: `0x${string}`;
            logIndex: number;
            transactionHash: `0x${string}`;
            transactionIndex: number;
            removed: boolean;
        }[];
        logsBloom: `0x${string}`;
        root?: `0x${string}`;
        status: "success" | "reverted";
        to: `0x${string}`;
        transactionHash: `0x${string}`;
        transactionIndex: number;
        type: import("viem").TransactionType;
        l1GasPrice: bigint;
        l1GasUsed: bigint;
        l1Fee: bigint;
        l1FeeScalar: number;
    }>;
    watchBlockNumber: (args: import("viem").WatchBlockNumberParameters) => import("viem").WatchBlockNumberReturnType;
    watchBlocks: <includeTransactions_1 extends boolean = false, blockTag_2 extends import("viem").BlockTag = "latest">(args: import("viem").WatchBlocksParameters<import("viem").HttpTransport, {
        blockExplorers: {
            readonly default: {
                readonly name: "Basescan";
                readonly url: "https://sepolia.basescan.org";
                readonly apiUrl: "https://api-sepolia.basescan.org/api";
            };
        };
        contracts: {
            readonly disputeGameFactory: {
                readonly 11155111: {
                    readonly address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1";
                };
            };
            readonly l2OutputOracle: {
                readonly 11155111: {
                    readonly address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254";
                };
            };
            readonly portal: {
                readonly 11155111: {
                    readonly address: "0x49f53e41452c74589e85ca1677426ba426459e85";
                    readonly blockCreated: 4446677;
                };
            };
            readonly l1StandardBridge: {
                readonly 11155111: {
                    readonly address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120";
                    readonly blockCreated: 4446677;
                };
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 1059647;
            };
            readonly gasPriceOracle: {
                readonly address: "0x420000000000000000000000000000000000000F";
            };
            readonly l1Block: {
                readonly address: "0x4200000000000000000000000000000000000015";
            };
            readonly l2CrossDomainMessenger: {
                readonly address: "0x4200000000000000000000000000000000000007";
            };
            readonly l2Erc721Bridge: {
                readonly address: "0x4200000000000000000000000000000000000014";
            };
            readonly l2StandardBridge: {
                readonly address: "0x4200000000000000000000000000000000000010";
            };
            readonly l2ToL1MessagePasser: {
                readonly address: "0x4200000000000000000000000000000000000016";
            };
        };
        id: 84532;
        name: "Base Sepolia";
        nativeCurrency: {
            readonly name: "Sepolia Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://sepolia.base.org"];
            };
        };
        sourceId: 11155111;
        testnet: true;
        custom?: Record<string, unknown>;
        fees?: import("viem").ChainFees<undefined>;
        formatters: {
            readonly block: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcBlock<import("viem").BlockTag, boolean>) => {
                    baseFeePerGas: bigint;
                    blobGasUsed: bigint;
                    difficulty: bigint;
                    excessBlobGas: bigint;
                    extraData: `0x${string}`;
                    gasLimit: bigint;
                    gasUsed: bigint;
                    hash: `0x${string}`;
                    logsBloom: `0x${string}`;
                    miner: `0x${string}`;
                    mixHash: `0x${string}`;
                    nonce: `0x${string}`;
                    number: bigint;
                    parentHash: `0x${string}`;
                    receiptsRoot: `0x${string}`;
                    sealFields: `0x${string}`[];
                    sha3Uncles: `0x${string}`;
                    size: bigint;
                    stateRoot: `0x${string}`;
                    timestamp: bigint;
                    totalDifficulty: bigint;
                    transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                    transactionsRoot: `0x${string}`;
                    uncles: `0x${string}`[];
                    withdrawals?: import("viem").Withdrawal[];
                    withdrawalsRoot?: `0x${string}`;
                };
                type: "block";
            };
            readonly transaction: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransaction<boolean>) => {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: boolean;
                    mint?: bigint;
                    sourceHash: `0x${string}`;
                    type: "deposit";
                } | {
                    r: `0x${string}`;
                    s: `0x${string}`;
                    v: bigint;
                    to: `0x${string}`;
                    from: `0x${string}`;
                    gas: bigint;
                    nonce: number;
                    value: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    accessList?: undefined;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId?: number;
                    yParity?: undefined;
                    type: "legacy";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip2930";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip1559";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes: readonly `0x${string}`[];
                    chainId: number;
                    type: "eip4844";
                    gasPrice?: undefined;
                    maxFeePerBlobGas: bigint;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList: import("viem/experimental").SignedAuthorizationList<number>;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip7702";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                };
                type: "transaction";
            };
            readonly transactionReceipt: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransactionReceipt) => {
                    blobGasPrice?: bigint;
                    blobGasUsed?: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    contractAddress: `0x${string}`;
                    cumulativeGasUsed: bigint;
                    effectiveGasPrice: bigint;
                    from: `0x${string}`;
                    gasUsed: bigint;
                    logs: {
                        address: `0x${string}`;
                        blockHash: `0x${string}`;
                        blockNumber: bigint;
                        data: `0x${string}`;
                        logIndex: number;
                        transactionHash: `0x${string}`;
                        transactionIndex: number;
                        removed: boolean;
                    }[];
                    logsBloom: `0x${string}`;
                    root?: `0x${string}`;
                    status: "success" | "reverted";
                    to: `0x${string}`;
                    transactionHash: `0x${string}`;
                    transactionIndex: number;
                    type: import("viem").TransactionType;
                    l1GasPrice: bigint;
                    l1GasUsed: bigint;
                    l1Fee: bigint;
                    l1FeeScalar: number;
                };
                type: "transactionReceipt";
            };
        };
        serializers: {
            readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
        };
        readonly network: "base-sepolia";
    }, includeTransactions_1, blockTag_2>) => import("viem").WatchBlocksReturnType;
    watchContractEvent: <const abi_7 extends import("viem").Abi | readonly unknown[], eventName_4 extends import("viem").ContractEventName<abi_7>, strict_6 extends boolean = undefined>(args: import("viem").WatchContractEventParameters<abi_7, eventName_4, strict_6, import("viem").HttpTransport>) => import("viem").WatchContractEventReturnType;
    watchEvent: <const abiEvent_2 extends import("viem").AbiEvent = undefined, const abiEvents_2 extends readonly unknown[] | readonly import("viem").AbiEvent[] = abiEvent_2 extends import("viem").AbiEvent ? [abiEvent_2] : undefined, strict_7 extends boolean = undefined>(args: import("viem").WatchEventParameters<abiEvent_2, abiEvents_2, strict_7, import("viem").HttpTransport>) => import("viem").WatchEventReturnType;
    watchPendingTransactions: (args: import("viem").WatchPendingTransactionsParameters<import("viem").HttpTransport>) => import("viem").WatchPendingTransactionsReturnType;
    extend: <const client extends {
        [x: string]: unknown;
        account?: undefined;
        batch?: undefined;
        cacheTime?: undefined;
        ccipRead?: undefined;
        chain?: undefined;
        key?: undefined;
        name?: undefined;
        pollingInterval?: undefined;
        request?: undefined;
        transport?: undefined;
        type?: undefined;
        uid?: undefined;
    } & import("viem").ExactPartial<Pick<import("viem").PublicActions<import("viem").HttpTransport, {
        blockExplorers: {
            readonly default: {
                readonly name: "Basescan";
                readonly url: "https://sepolia.basescan.org";
                readonly apiUrl: "https://api-sepolia.basescan.org/api";
            };
        };
        contracts: {
            readonly disputeGameFactory: {
                readonly 11155111: {
                    readonly address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1";
                };
            };
            readonly l2OutputOracle: {
                readonly 11155111: {
                    readonly address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254";
                };
            };
            readonly portal: {
                readonly 11155111: {
                    readonly address: "0x49f53e41452c74589e85ca1677426ba426459e85";
                    readonly blockCreated: 4446677;
                };
            };
            readonly l1StandardBridge: {
                readonly 11155111: {
                    readonly address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120";
                    readonly blockCreated: 4446677;
                };
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 1059647;
            };
            readonly gasPriceOracle: {
                readonly address: "0x420000000000000000000000000000000000000F";
            };
            readonly l1Block: {
                readonly address: "0x4200000000000000000000000000000000000015";
            };
            readonly l2CrossDomainMessenger: {
                readonly address: "0x4200000000000000000000000000000000000007";
            };
            readonly l2Erc721Bridge: {
                readonly address: "0x4200000000000000000000000000000000000014";
            };
            readonly l2StandardBridge: {
                readonly address: "0x4200000000000000000000000000000000000010";
            };
            readonly l2ToL1MessagePasser: {
                readonly address: "0x4200000000000000000000000000000000000016";
            };
        };
        id: 84532;
        name: "Base Sepolia";
        nativeCurrency: {
            readonly name: "Sepolia Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://sepolia.base.org"];
            };
        };
        sourceId: 11155111;
        testnet: true;
        custom?: Record<string, unknown>;
        fees?: import("viem").ChainFees<undefined>;
        formatters: {
            readonly block: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcBlock<import("viem").BlockTag, boolean>) => {
                    baseFeePerGas: bigint;
                    blobGasUsed: bigint;
                    difficulty: bigint;
                    excessBlobGas: bigint;
                    extraData: `0x${string}`;
                    gasLimit: bigint;
                    gasUsed: bigint;
                    hash: `0x${string}`;
                    logsBloom: `0x${string}`;
                    miner: `0x${string}`;
                    mixHash: `0x${string}`;
                    nonce: `0x${string}`;
                    number: bigint;
                    parentHash: `0x${string}`;
                    receiptsRoot: `0x${string}`;
                    sealFields: `0x${string}`[];
                    sha3Uncles: `0x${string}`;
                    size: bigint;
                    stateRoot: `0x${string}`;
                    timestamp: bigint;
                    totalDifficulty: bigint;
                    transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                    transactionsRoot: `0x${string}`;
                    uncles: `0x${string}`[];
                    withdrawals?: import("viem").Withdrawal[];
                    withdrawalsRoot?: `0x${string}`;
                };
                type: "block";
            };
            readonly transaction: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransaction<boolean>) => {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: boolean;
                    mint?: bigint;
                    sourceHash: `0x${string}`;
                    type: "deposit";
                } | {
                    r: `0x${string}`;
                    s: `0x${string}`;
                    v: bigint;
                    to: `0x${string}`;
                    from: `0x${string}`;
                    gas: bigint;
                    nonce: number;
                    value: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    accessList?: undefined;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId?: number;
                    yParity?: undefined;
                    type: "legacy";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip2930";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip1559";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes: readonly `0x${string}`[];
                    chainId: number;
                    type: "eip4844";
                    gasPrice?: undefined;
                    maxFeePerBlobGas: bigint;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList: import("viem/experimental").SignedAuthorizationList<number>;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip7702";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                };
                type: "transaction";
            };
            readonly transactionReceipt: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransactionReceipt) => {
                    blobGasPrice?: bigint;
                    blobGasUsed?: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    contractAddress: `0x${string}`;
                    cumulativeGasUsed: bigint;
                    effectiveGasPrice: bigint;
                    from: `0x${string}`;
                    gasUsed: bigint;
                    logs: {
                        address: `0x${string}`;
                        blockHash: `0x${string}`;
                        blockNumber: bigint;
                        data: `0x${string}`;
                        logIndex: number;
                        transactionHash: `0x${string}`;
                        transactionIndex: number;
                        removed: boolean;
                    }[];
                    logsBloom: `0x${string}`;
                    root?: `0x${string}`;
                    status: "success" | "reverted";
                    to: `0x${string}`;
                    transactionHash: `0x${string}`;
                    transactionIndex: number;
                    type: import("viem").TransactionType;
                    l1GasPrice: bigint;
                    l1GasUsed: bigint;
                    l1Fee: bigint;
                    l1FeeScalar: number;
                };
                type: "transactionReceipt";
            };
        };
        serializers: {
            readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
        };
        readonly network: "base-sepolia";
    }, {
        address: undefined;
        type: "json-rpc";
    }>, "call" | "createContractEventFilter" | "createEventFilter" | "estimateContractGas" | "estimateGas" | "getBlock" | "getBlockNumber" | "getChainId" | "getContractEvents" | "getEnsText" | "getFilterChanges" | "getGasPrice" | "getLogs" | "getTransaction" | "getTransactionCount" | "getTransactionReceipt" | "prepareTransactionRequest" | "readContract" | "sendRawTransaction" | "simulateContract" | "uninstallFilter" | "watchBlockNumber" | "watchContractEvent"> & Pick<import("viem").WalletActions<{
        blockExplorers: {
            readonly default: {
                readonly name: "Basescan";
                readonly url: "https://sepolia.basescan.org";
                readonly apiUrl: "https://api-sepolia.basescan.org/api";
            };
        };
        contracts: {
            readonly disputeGameFactory: {
                readonly 11155111: {
                    readonly address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1";
                };
            };
            readonly l2OutputOracle: {
                readonly 11155111: {
                    readonly address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254";
                };
            };
            readonly portal: {
                readonly 11155111: {
                    readonly address: "0x49f53e41452c74589e85ca1677426ba426459e85";
                    readonly blockCreated: 4446677;
                };
            };
            readonly l1StandardBridge: {
                readonly 11155111: {
                    readonly address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120";
                    readonly blockCreated: 4446677;
                };
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 1059647;
            };
            readonly gasPriceOracle: {
                readonly address: "0x420000000000000000000000000000000000000F";
            };
            readonly l1Block: {
                readonly address: "0x4200000000000000000000000000000000000015";
            };
            readonly l2CrossDomainMessenger: {
                readonly address: "0x4200000000000000000000000000000000000007";
            };
            readonly l2Erc721Bridge: {
                readonly address: "0x4200000000000000000000000000000000000014";
            };
            readonly l2StandardBridge: {
                readonly address: "0x4200000000000000000000000000000000000010";
            };
            readonly l2ToL1MessagePasser: {
                readonly address: "0x4200000000000000000000000000000000000016";
            };
        };
        id: 84532;
        name: "Base Sepolia";
        nativeCurrency: {
            readonly name: "Sepolia Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://sepolia.base.org"];
            };
        };
        sourceId: 11155111;
        testnet: true;
        custom?: Record<string, unknown>;
        fees?: import("viem").ChainFees<undefined>;
        formatters: {
            readonly block: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcBlock<import("viem").BlockTag, boolean>) => {
                    baseFeePerGas: bigint;
                    blobGasUsed: bigint;
                    difficulty: bigint;
                    excessBlobGas: bigint;
                    extraData: `0x${string}`;
                    gasLimit: bigint;
                    gasUsed: bigint;
                    hash: `0x${string}`;
                    logsBloom: `0x${string}`;
                    miner: `0x${string}`;
                    mixHash: `0x${string}`;
                    nonce: `0x${string}`;
                    number: bigint;
                    parentHash: `0x${string}`;
                    receiptsRoot: `0x${string}`;
                    sealFields: `0x${string}`[];
                    sha3Uncles: `0x${string}`;
                    size: bigint;
                    stateRoot: `0x${string}`;
                    timestamp: bigint;
                    totalDifficulty: bigint;
                    transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                    transactionsRoot: `0x${string}`;
                    uncles: `0x${string}`[];
                    withdrawals?: import("viem").Withdrawal[];
                    withdrawalsRoot?: `0x${string}`;
                };
                type: "block";
            };
            readonly transaction: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransaction<boolean>) => {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: boolean;
                    mint?: bigint;
                    sourceHash: `0x${string}`;
                    type: "deposit";
                } | {
                    r: `0x${string}`;
                    s: `0x${string}`;
                    v: bigint;
                    to: `0x${string}`;
                    from: `0x${string}`;
                    gas: bigint;
                    nonce: number;
                    value: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    accessList?: undefined;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId?: number;
                    yParity?: undefined;
                    type: "legacy";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip2930";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip1559";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes: readonly `0x${string}`[];
                    chainId: number;
                    type: "eip4844";
                    gasPrice?: undefined;
                    maxFeePerBlobGas: bigint;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList: import("viem/experimental").SignedAuthorizationList<number>;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip7702";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                };
                type: "transaction";
            };
            readonly transactionReceipt: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransactionReceipt) => {
                    blobGasPrice?: bigint;
                    blobGasUsed?: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    contractAddress: `0x${string}`;
                    cumulativeGasUsed: bigint;
                    effectiveGasPrice: bigint;
                    from: `0x${string}`;
                    gasUsed: bigint;
                    logs: {
                        address: `0x${string}`;
                        blockHash: `0x${string}`;
                        blockNumber: bigint;
                        data: `0x${string}`;
                        logIndex: number;
                        transactionHash: `0x${string}`;
                        transactionIndex: number;
                        removed: boolean;
                    }[];
                    logsBloom: `0x${string}`;
                    root?: `0x${string}`;
                    status: "success" | "reverted";
                    to: `0x${string}`;
                    transactionHash: `0x${string}`;
                    transactionIndex: number;
                    type: import("viem").TransactionType;
                    l1GasPrice: bigint;
                    l1GasUsed: bigint;
                    l1Fee: bigint;
                    l1FeeScalar: number;
                };
                type: "transactionReceipt";
            };
        };
        serializers: {
            readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
        };
        readonly network: "base-sepolia";
    }, {
        address: undefined;
        type: "json-rpc";
    }>, "sendTransaction" | "writeContract">>>(fn: (client: import("viem").Client<import("viem").HttpTransport, {
        blockExplorers: {
            readonly default: {
                readonly name: "Basescan";
                readonly url: "https://sepolia.basescan.org";
                readonly apiUrl: "https://api-sepolia.basescan.org/api";
            };
        };
        contracts: {
            readonly disputeGameFactory: {
                readonly 11155111: {
                    readonly address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1";
                };
            };
            readonly l2OutputOracle: {
                readonly 11155111: {
                    readonly address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254";
                };
            };
            readonly portal: {
                readonly 11155111: {
                    readonly address: "0x49f53e41452c74589e85ca1677426ba426459e85";
                    readonly blockCreated: 4446677;
                };
            };
            readonly l1StandardBridge: {
                readonly 11155111: {
                    readonly address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120";
                    readonly blockCreated: 4446677;
                };
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 1059647;
            };
            readonly gasPriceOracle: {
                readonly address: "0x420000000000000000000000000000000000000F";
            };
            readonly l1Block: {
                readonly address: "0x4200000000000000000000000000000000000015";
            };
            readonly l2CrossDomainMessenger: {
                readonly address: "0x4200000000000000000000000000000000000007";
            };
            readonly l2Erc721Bridge: {
                readonly address: "0x4200000000000000000000000000000000000014";
            };
            readonly l2StandardBridge: {
                readonly address: "0x4200000000000000000000000000000000000010";
            };
            readonly l2ToL1MessagePasser: {
                readonly address: "0x4200000000000000000000000000000000000016";
            };
        };
        id: 84532;
        name: "Base Sepolia";
        nativeCurrency: {
            readonly name: "Sepolia Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://sepolia.base.org"];
            };
        };
        sourceId: 11155111;
        testnet: true;
        custom?: Record<string, unknown>;
        fees?: import("viem").ChainFees<undefined>;
        formatters: {
            readonly block: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcBlock<import("viem").BlockTag, boolean>) => {
                    baseFeePerGas: bigint;
                    blobGasUsed: bigint;
                    difficulty: bigint;
                    excessBlobGas: bigint;
                    extraData: `0x${string}`;
                    gasLimit: bigint;
                    gasUsed: bigint;
                    hash: `0x${string}`;
                    logsBloom: `0x${string}`;
                    miner: `0x${string}`;
                    mixHash: `0x${string}`;
                    nonce: `0x${string}`;
                    number: bigint;
                    parentHash: `0x${string}`;
                    receiptsRoot: `0x${string}`;
                    sealFields: `0x${string}`[];
                    sha3Uncles: `0x${string}`;
                    size: bigint;
                    stateRoot: `0x${string}`;
                    timestamp: bigint;
                    totalDifficulty: bigint;
                    transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                    transactionsRoot: `0x${string}`;
                    uncles: `0x${string}`[];
                    withdrawals?: import("viem").Withdrawal[];
                    withdrawalsRoot?: `0x${string}`;
                };
                type: "block";
            };
            readonly transaction: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransaction<boolean>) => {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: boolean;
                    mint?: bigint;
                    sourceHash: `0x${string}`;
                    type: "deposit";
                } | {
                    r: `0x${string}`;
                    s: `0x${string}`;
                    v: bigint;
                    to: `0x${string}`;
                    from: `0x${string}`;
                    gas: bigint;
                    nonce: number;
                    value: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    accessList?: undefined;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId?: number;
                    yParity?: undefined;
                    type: "legacy";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip2930";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip1559";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes: readonly `0x${string}`[];
                    chainId: number;
                    type: "eip4844";
                    gasPrice?: undefined;
                    maxFeePerBlobGas: bigint;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList: import("viem/experimental").SignedAuthorizationList<number>;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip7702";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                };
                type: "transaction";
            };
            readonly transactionReceipt: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransactionReceipt) => {
                    blobGasPrice?: bigint;
                    blobGasUsed?: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    contractAddress: `0x${string}`;
                    cumulativeGasUsed: bigint;
                    effectiveGasPrice: bigint;
                    from: `0x${string}`;
                    gasUsed: bigint;
                    logs: {
                        address: `0x${string}`;
                        blockHash: `0x${string}`;
                        blockNumber: bigint;
                        data: `0x${string}`;
                        logIndex: number;
                        transactionHash: `0x${string}`;
                        transactionIndex: number;
                        removed: boolean;
                    }[];
                    logsBloom: `0x${string}`;
                    root?: `0x${string}`;
                    status: "success" | "reverted";
                    to: `0x${string}`;
                    transactionHash: `0x${string}`;
                    transactionIndex: number;
                    type: import("viem").TransactionType;
                    l1GasPrice: bigint;
                    l1GasUsed: bigint;
                    l1Fee: bigint;
                    l1FeeScalar: number;
                };
                type: "transactionReceipt";
            };
        };
        serializers: {
            readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
        };
        readonly network: "base-sepolia";
    }, {
        address: undefined;
        type: "json-rpc";
    }, [{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: `0x${string}`];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_blobBaseFee";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_call";
        Parameters: [transaction: import("viem").ExactPartial<import("viem").RpcTransactionRequest>] | [transaction: import("viem").ExactPartial<import("viem").RpcTransactionRequest>, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier] | [transaction: import("viem").ExactPartial<import("viem").RpcTransactionRequest>, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier, stateOverrideSet: import("viem").RpcStateOverride];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag, stateOverride: import("viem").RpcStateOverride];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: `0x${string}`, newestBlock: `0x${string}` | import("viem").BlockTag, rewardPercentiles: number[]];
        ReturnType: import("viem").RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: `0x${string}`, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getCode";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: `0x${string}`];
        ReturnType: `0x${string}`[] | {
            address: `0x${string}`;
            blockHash: `0x${string}`;
            blockNumber: `0x${string}`;
            data: `0x${string}`;
            logIndex: `0x${string}`;
            transactionHash: `0x${string}`;
            transactionIndex: `0x${string}`;
            removed: boolean;
        }[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: `0x${string}`];
        ReturnType: {
            address: `0x${string}`;
            blockHash: `0x${string}`;
            blockNumber: `0x${string}`;
            data: `0x${string}`;
            logIndex: `0x${string}`;
            transactionHash: `0x${string}`;
            transactionIndex: `0x${string}`;
            removed: boolean;
        }[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: `0x${string}` | `0x${string}`[];
            topics?: import("viem").LogTopic[];
        } & ({
            fromBlock?: `0x${string}` | import("viem").BlockTag;
            toBlock?: `0x${string}` | import("viem").BlockTag;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}`;
        })];
        ReturnType: {
            address: `0x${string}`;
            blockHash: `0x${string}`;
            blockNumber: `0x${string}`;
            data: `0x${string}`;
            logIndex: `0x${string}`;
            transactionHash: `0x${string}`;
            transactionIndex: `0x${string}`;
            removed: boolean;
        }[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: `0x${string}`, storageKeys: `0x${string}`[], block: `0x${string}` | import("viem").BlockTag];
        ReturnType: import("viem").RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransaction;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransactionReceipt;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: `0x${string}` | import("viem").BlockTag;
            toBlock?: `0x${string}` | import("viem").BlockTag;
            address?: `0x${string}` | `0x${string}`[];
            topics?: import("viem").LogTopic[];
        }];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: `0x${string}`];
        ReturnType: boolean;
    }, ...any[]], import("viem").PublicActions<import("viem").HttpTransport, {
        blockExplorers: {
            readonly default: {
                readonly name: "Basescan";
                readonly url: "https://sepolia.basescan.org";
                readonly apiUrl: "https://api-sepolia.basescan.org/api";
            };
        };
        contracts: {
            readonly disputeGameFactory: {
                readonly 11155111: {
                    readonly address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1";
                };
            };
            readonly l2OutputOracle: {
                readonly 11155111: {
                    readonly address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254";
                };
            };
            readonly portal: {
                readonly 11155111: {
                    readonly address: "0x49f53e41452c74589e85ca1677426ba426459e85";
                    readonly blockCreated: 4446677;
                };
            };
            readonly l1StandardBridge: {
                readonly 11155111: {
                    readonly address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120";
                    readonly blockCreated: 4446677;
                };
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 1059647;
            };
            readonly gasPriceOracle: {
                readonly address: "0x420000000000000000000000000000000000000F";
            };
            readonly l1Block: {
                readonly address: "0x4200000000000000000000000000000000000015";
            };
            readonly l2CrossDomainMessenger: {
                readonly address: "0x4200000000000000000000000000000000000007";
            };
            readonly l2Erc721Bridge: {
                readonly address: "0x4200000000000000000000000000000000000014";
            };
            readonly l2StandardBridge: {
                readonly address: "0x4200000000000000000000000000000000000010";
            };
            readonly l2ToL1MessagePasser: {
                readonly address: "0x4200000000000000000000000000000000000016";
            };
        };
        id: 84532;
        name: "Base Sepolia";
        nativeCurrency: {
            readonly name: "Sepolia Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://sepolia.base.org"];
            };
        };
        sourceId: 11155111;
        testnet: true;
        custom?: Record<string, unknown>;
        fees?: import("viem").ChainFees<undefined>;
        formatters: {
            readonly block: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcBlock<import("viem").BlockTag, boolean>) => {
                    baseFeePerGas: bigint;
                    blobGasUsed: bigint;
                    difficulty: bigint;
                    excessBlobGas: bigint;
                    extraData: `0x${string}`;
                    gasLimit: bigint;
                    gasUsed: bigint;
                    hash: `0x${string}`;
                    logsBloom: `0x${string}`;
                    miner: `0x${string}`;
                    mixHash: `0x${string}`;
                    nonce: `0x${string}`;
                    number: bigint;
                    parentHash: `0x${string}`;
                    receiptsRoot: `0x${string}`;
                    sealFields: `0x${string}`[];
                    sha3Uncles: `0x${string}`;
                    size: bigint;
                    stateRoot: `0x${string}`;
                    timestamp: bigint;
                    totalDifficulty: bigint;
                    transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                    transactionsRoot: `0x${string}`;
                    uncles: `0x${string}`[];
                    withdrawals?: import("viem").Withdrawal[];
                    withdrawalsRoot?: `0x${string}`;
                };
                type: "block";
            };
            readonly transaction: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransaction<boolean>) => {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: boolean;
                    mint?: bigint;
                    sourceHash: `0x${string}`;
                    type: "deposit";
                } | {
                    r: `0x${string}`;
                    s: `0x${string}`;
                    v: bigint;
                    to: `0x${string}`;
                    from: `0x${string}`;
                    gas: bigint;
                    nonce: number;
                    value: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    accessList?: undefined;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId?: number;
                    yParity?: undefined;
                    type: "legacy";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip2930";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip1559";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes: readonly `0x${string}`[];
                    chainId: number;
                    type: "eip4844";
                    gasPrice?: undefined;
                    maxFeePerBlobGas: bigint;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList: import("viem/experimental").SignedAuthorizationList<number>;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip7702";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                };
                type: "transaction";
            };
            readonly transactionReceipt: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransactionReceipt) => {
                    blobGasPrice?: bigint;
                    blobGasUsed?: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    contractAddress: `0x${string}`;
                    cumulativeGasUsed: bigint;
                    effectiveGasPrice: bigint;
                    from: `0x${string}`;
                    gasUsed: bigint;
                    logs: {
                        address: `0x${string}`;
                        blockHash: `0x${string}`;
                        blockNumber: bigint;
                        data: `0x${string}`;
                        logIndex: number;
                        transactionHash: `0x${string}`;
                        transactionIndex: number;
                        removed: boolean;
                    }[];
                    logsBloom: `0x${string}`;
                    root?: `0x${string}`;
                    status: "success" | "reverted";
                    to: `0x${string}`;
                    transactionHash: `0x${string}`;
                    transactionIndex: number;
                    type: import("viem").TransactionType;
                    l1GasPrice: bigint;
                    l1GasUsed: bigint;
                    l1Fee: bigint;
                    l1FeeScalar: number;
                };
                type: "transactionReceipt";
            };
        };
        serializers: {
            readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
        };
        readonly network: "base-sepolia";
    }>>) => client) => import("viem").Client<import("viem").HttpTransport, {
        blockExplorers: {
            readonly default: {
                readonly name: "Basescan";
                readonly url: "https://sepolia.basescan.org";
                readonly apiUrl: "https://api-sepolia.basescan.org/api";
            };
        };
        contracts: {
            readonly disputeGameFactory: {
                readonly 11155111: {
                    readonly address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1";
                };
            };
            readonly l2OutputOracle: {
                readonly 11155111: {
                    readonly address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254";
                };
            };
            readonly portal: {
                readonly 11155111: {
                    readonly address: "0x49f53e41452c74589e85ca1677426ba426459e85";
                    readonly blockCreated: 4446677;
                };
            };
            readonly l1StandardBridge: {
                readonly 11155111: {
                    readonly address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120";
                    readonly blockCreated: 4446677;
                };
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 1059647;
            };
            readonly gasPriceOracle: {
                readonly address: "0x420000000000000000000000000000000000000F";
            };
            readonly l1Block: {
                readonly address: "0x4200000000000000000000000000000000000015";
            };
            readonly l2CrossDomainMessenger: {
                readonly address: "0x4200000000000000000000000000000000000007";
            };
            readonly l2Erc721Bridge: {
                readonly address: "0x4200000000000000000000000000000000000014";
            };
            readonly l2StandardBridge: {
                readonly address: "0x4200000000000000000000000000000000000010";
            };
            readonly l2ToL1MessagePasser: {
                readonly address: "0x4200000000000000000000000000000000000016";
            };
        };
        id: 84532;
        name: "Base Sepolia";
        nativeCurrency: {
            readonly name: "Sepolia Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://sepolia.base.org"];
            };
        };
        sourceId: 11155111;
        testnet: true;
        custom?: Record<string, unknown>;
        fees?: import("viem").ChainFees<undefined>;
        formatters: {
            readonly block: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcBlock<import("viem").BlockTag, boolean>) => {
                    baseFeePerGas: bigint;
                    blobGasUsed: bigint;
                    difficulty: bigint;
                    excessBlobGas: bigint;
                    extraData: `0x${string}`;
                    gasLimit: bigint;
                    gasUsed: bigint;
                    hash: `0x${string}`;
                    logsBloom: `0x${string}`;
                    miner: `0x${string}`;
                    mixHash: `0x${string}`;
                    nonce: `0x${string}`;
                    number: bigint;
                    parentHash: `0x${string}`;
                    receiptsRoot: `0x${string}`;
                    sealFields: `0x${string}`[];
                    sha3Uncles: `0x${string}`;
                    size: bigint;
                    stateRoot: `0x${string}`;
                    timestamp: bigint;
                    totalDifficulty: bigint;
                    transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                    transactionsRoot: `0x${string}`;
                    uncles: `0x${string}`[];
                    withdrawals?: import("viem").Withdrawal[];
                    withdrawalsRoot?: `0x${string}`;
                };
                type: "block";
            };
            readonly transaction: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransaction<boolean>) => {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: boolean;
                    mint?: bigint;
                    sourceHash: `0x${string}`;
                    type: "deposit";
                } | {
                    r: `0x${string}`;
                    s: `0x${string}`;
                    v: bigint;
                    to: `0x${string}`;
                    from: `0x${string}`;
                    gas: bigint;
                    nonce: number;
                    value: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    accessList?: undefined;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId?: number;
                    yParity?: undefined;
                    type: "legacy";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip2930";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip1559";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes: readonly `0x${string}`[];
                    chainId: number;
                    type: "eip4844";
                    gasPrice?: undefined;
                    maxFeePerBlobGas: bigint;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList: import("viem/experimental").SignedAuthorizationList<number>;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip7702";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                };
                type: "transaction";
            };
            readonly transactionReceipt: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransactionReceipt) => {
                    blobGasPrice?: bigint;
                    blobGasUsed?: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    contractAddress: `0x${string}`;
                    cumulativeGasUsed: bigint;
                    effectiveGasPrice: bigint;
                    from: `0x${string}`;
                    gasUsed: bigint;
                    logs: {
                        address: `0x${string}`;
                        blockHash: `0x${string}`;
                        blockNumber: bigint;
                        data: `0x${string}`;
                        logIndex: number;
                        transactionHash: `0x${string}`;
                        transactionIndex: number;
                        removed: boolean;
                    }[];
                    logsBloom: `0x${string}`;
                    root?: `0x${string}`;
                    status: "success" | "reverted";
                    to: `0x${string}`;
                    transactionHash: `0x${string}`;
                    transactionIndex: number;
                    type: import("viem").TransactionType;
                    l1GasPrice: bigint;
                    l1GasUsed: bigint;
                    l1Fee: bigint;
                    l1FeeScalar: number;
                };
                type: "transactionReceipt";
            };
        };
        serializers: {
            readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
        };
        readonly network: "base-sepolia";
    }, {
        address: undefined;
        type: "json-rpc";
    }, [{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: `0x${string}`];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_blobBaseFee";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_call";
        Parameters: [transaction: import("viem").ExactPartial<import("viem").RpcTransactionRequest>] | [transaction: import("viem").ExactPartial<import("viem").RpcTransactionRequest>, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier] | [transaction: import("viem").ExactPartial<import("viem").RpcTransactionRequest>, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier, stateOverrideSet: import("viem").RpcStateOverride];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag, stateOverride: import("viem").RpcStateOverride];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: `0x${string}`, newestBlock: `0x${string}` | import("viem").BlockTag, rewardPercentiles: number[]];
        ReturnType: import("viem").RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: `0x${string}`, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getCode";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: `0x${string}`];
        ReturnType: `0x${string}`[] | {
            address: `0x${string}`;
            blockHash: `0x${string}`;
            blockNumber: `0x${string}`;
            data: `0x${string}`;
            logIndex: `0x${string}`;
            transactionHash: `0x${string}`;
            transactionIndex: `0x${string}`;
            removed: boolean;
        }[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: `0x${string}`];
        ReturnType: {
            address: `0x${string}`;
            blockHash: `0x${string}`;
            blockNumber: `0x${string}`;
            data: `0x${string}`;
            logIndex: `0x${string}`;
            transactionHash: `0x${string}`;
            transactionIndex: `0x${string}`;
            removed: boolean;
        }[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: `0x${string}` | `0x${string}`[];
            topics?: import("viem").LogTopic[];
        } & ({
            fromBlock?: `0x${string}` | import("viem").BlockTag;
            toBlock?: `0x${string}` | import("viem").BlockTag;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}`;
        })];
        ReturnType: {
            address: `0x${string}`;
            blockHash: `0x${string}`;
            blockNumber: `0x${string}`;
            data: `0x${string}`;
            logIndex: `0x${string}`;
            transactionHash: `0x${string}`;
            transactionIndex: `0x${string}`;
            removed: boolean;
        }[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: `0x${string}`, storageKeys: `0x${string}`[], block: `0x${string}` | import("viem").BlockTag];
        ReturnType: import("viem").RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransaction;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransactionReceipt;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: `0x${string}` | import("viem").BlockTag;
            toBlock?: `0x${string}` | import("viem").BlockTag;
            address?: `0x${string}` | `0x${string}`[];
            topics?: import("viem").LogTopic[];
        }];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: `0x${string}`];
        ReturnType: boolean;
    }, ...any[]], { [K_12 in keyof client]: client[K_12]; } & import("viem").PublicActions<import("viem").HttpTransport, {
        blockExplorers: {
            readonly default: {
                readonly name: "Basescan";
                readonly url: "https://sepolia.basescan.org";
                readonly apiUrl: "https://api-sepolia.basescan.org/api";
            };
        };
        contracts: {
            readonly disputeGameFactory: {
                readonly 11155111: {
                    readonly address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1";
                };
            };
            readonly l2OutputOracle: {
                readonly 11155111: {
                    readonly address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254";
                };
            };
            readonly portal: {
                readonly 11155111: {
                    readonly address: "0x49f53e41452c74589e85ca1677426ba426459e85";
                    readonly blockCreated: 4446677;
                };
            };
            readonly l1StandardBridge: {
                readonly 11155111: {
                    readonly address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120";
                    readonly blockCreated: 4446677;
                };
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 1059647;
            };
            readonly gasPriceOracle: {
                readonly address: "0x420000000000000000000000000000000000000F";
            };
            readonly l1Block: {
                readonly address: "0x4200000000000000000000000000000000000015";
            };
            readonly l2CrossDomainMessenger: {
                readonly address: "0x4200000000000000000000000000000000000007";
            };
            readonly l2Erc721Bridge: {
                readonly address: "0x4200000000000000000000000000000000000014";
            };
            readonly l2StandardBridge: {
                readonly address: "0x4200000000000000000000000000000000000010";
            };
            readonly l2ToL1MessagePasser: {
                readonly address: "0x4200000000000000000000000000000000000016";
            };
        };
        id: 84532;
        name: "Base Sepolia";
        nativeCurrency: {
            readonly name: "Sepolia Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://sepolia.base.org"];
            };
        };
        sourceId: 11155111;
        testnet: true;
        custom?: Record<string, unknown>;
        fees?: import("viem").ChainFees<undefined>;
        formatters: {
            readonly block: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcBlock<import("viem").BlockTag, boolean>) => {
                    baseFeePerGas: bigint;
                    blobGasUsed: bigint;
                    difficulty: bigint;
                    excessBlobGas: bigint;
                    extraData: `0x${string}`;
                    gasLimit: bigint;
                    gasUsed: bigint;
                    hash: `0x${string}`;
                    logsBloom: `0x${string}`;
                    miner: `0x${string}`;
                    mixHash: `0x${string}`;
                    nonce: `0x${string}`;
                    number: bigint;
                    parentHash: `0x${string}`;
                    receiptsRoot: `0x${string}`;
                    sealFields: `0x${string}`[];
                    sha3Uncles: `0x${string}`;
                    size: bigint;
                    stateRoot: `0x${string}`;
                    timestamp: bigint;
                    totalDifficulty: bigint;
                    transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                    transactionsRoot: `0x${string}`;
                    uncles: `0x${string}`[];
                    withdrawals?: import("viem").Withdrawal[];
                    withdrawalsRoot?: `0x${string}`;
                };
                type: "block";
            };
            readonly transaction: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransaction<boolean>) => {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: boolean;
                    mint?: bigint;
                    sourceHash: `0x${string}`;
                    type: "deposit";
                } | {
                    r: `0x${string}`;
                    s: `0x${string}`;
                    v: bigint;
                    to: `0x${string}`;
                    from: `0x${string}`;
                    gas: bigint;
                    nonce: number;
                    value: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    accessList?: undefined;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId?: number;
                    yParity?: undefined;
                    type: "legacy";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip2930";
                    gasPrice: bigint;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas?: undefined;
                    maxPriorityFeePerGas?: undefined;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip1559";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList?: undefined;
                    blobVersionedHashes: readonly `0x${string}`[];
                    chainId: number;
                    type: "eip4844";
                    gasPrice?: undefined;
                    maxFeePerBlobGas: bigint;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                } | {
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    from: `0x${string}`;
                    gas: bigint;
                    hash: `0x${string}`;
                    input: `0x${string}`;
                    nonce: number;
                    r: `0x${string}`;
                    s: `0x${string}`;
                    to: `0x${string}`;
                    transactionIndex: number;
                    typeHex: `0x${string}`;
                    v: bigint;
                    value: bigint;
                    yParity: number;
                    accessList: import("viem").AccessList;
                    authorizationList: import("viem/experimental").SignedAuthorizationList<number>;
                    blobVersionedHashes?: undefined;
                    chainId: number;
                    type: "eip7702";
                    gasPrice?: undefined;
                    maxFeePerBlobGas?: undefined;
                    maxFeePerGas: bigint;
                    maxPriorityFeePerGas: bigint;
                    isSystemTx?: undefined;
                    mint?: undefined;
                    sourceHash?: undefined;
                };
                type: "transaction";
            };
            readonly transactionReceipt: {
                exclude: [];
                format: (args: import("viem/chains").OpStackRpcTransactionReceipt) => {
                    blobGasPrice?: bigint;
                    blobGasUsed?: bigint;
                    blockHash: `0x${string}`;
                    blockNumber: bigint;
                    contractAddress: `0x${string}`;
                    cumulativeGasUsed: bigint;
                    effectiveGasPrice: bigint;
                    from: `0x${string}`;
                    gasUsed: bigint;
                    logs: {
                        address: `0x${string}`;
                        blockHash: `0x${string}`;
                        blockNumber: bigint;
                        data: `0x${string}`;
                        logIndex: number;
                        transactionHash: `0x${string}`;
                        transactionIndex: number;
                        removed: boolean;
                    }[];
                    logsBloom: `0x${string}`;
                    root?: `0x${string}`;
                    status: "success" | "reverted";
                    to: `0x${string}`;
                    transactionHash: `0x${string}`;
                    transactionIndex: number;
                    type: import("viem").TransactionType;
                    l1GasPrice: bigint;
                    l1GasUsed: bigint;
                    l1Fee: bigint;
                    l1FeeScalar: number;
                };
                type: "transactionReceipt";
            };
        };
        serializers: {
            readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
        };
        readonly network: "base-sepolia";
    }>>;
};
export declare const walletClient: WalletClient;
