export declare const chainlinkOracleAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_ethUsdPriceFeed";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "getPrice";
    readonly inputs: readonly [{
        readonly name: "_token";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_data";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}];
