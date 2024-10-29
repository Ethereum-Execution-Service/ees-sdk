export declare const batchSlasherAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_coordinator";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "batchSlash";
    readonly inputs: readonly [{
        readonly name: "_committerExecutors";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }, {
        readonly name: "_inactiveExecutors";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }, {
        readonly name: "_rounds";
        readonly type: "uint8[]";
        readonly internalType: "uint8[]";
    }, {
        readonly name: "_recipient";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "coordinator";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract ICoordinator";
    }];
    readonly stateMutability: "view";
}];
