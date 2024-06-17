export declare const batchProcessorAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_sub2";
        readonly type: "address";
        readonly internalType: "contract Sub2";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "processBatch";
    readonly inputs: readonly [{
        readonly name: "_subscriptionIndices";
        readonly type: "uint256[]";
        readonly internalType: "uint256[]";
    }, {
        readonly name: "_feeRecipient";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple[]";
        readonly internalType: "struct IBatchProcessor.Receipt[]";
        readonly components: readonly [{
            readonly name: "subscriptionIndex";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "processingFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "processingFeeToken";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "sub2";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract Sub2";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "event";
    readonly name: "FailedExecution";
    readonly inputs: readonly [{
        readonly name: "subscriptionIndex";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "revertData";
        readonly type: "bytes";
        readonly indexed: false;
        readonly internalType: "bytes";
    }];
    readonly anonymous: false;
}];
