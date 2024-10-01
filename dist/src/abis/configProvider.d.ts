export declare const configProviderAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_jobRegistry";
        readonly type: "address";
        readonly internalType: "contract JobRegistry";
    }, {
        readonly name: "_executionManager";
        readonly type: "address";
        readonly internalType: "contract ExecutionManager";
    }, {
        readonly name: "_querier";
        readonly type: "address";
        readonly internalType: "contract Querier";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "executionManager";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract ExecutionManager";
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
