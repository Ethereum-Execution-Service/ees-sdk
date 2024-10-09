export declare const configProviderAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_jobRegistry";
        readonly type: "address";
        readonly internalType: "contract JobRegistry";
    }, {
        readonly name: "_coordinator";
        readonly type: "address";
        readonly internalType: "contract Coordinator";
    }, {
        readonly name: "_querier";
        readonly type: "address";
        readonly internalType: "contract Querier";
    }, {
        readonly name: "_batchSlasher";
        readonly type: "address";
        readonly internalType: "contract BatchSlasher";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "batchSlasher";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract BatchSlasher";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "coordinator";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract Coordinator";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getConfig";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }, {
        readonly name: "";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }, {
        readonly name: "";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "jobRegistry";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract JobRegistry";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "querier";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract Querier";
    }];
    readonly stateMutability: "view";
}];
