export declare const querierAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_sub2";
        readonly type: "address";
        readonly internalType: "contract Sub2";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "getSubscriptions";
    readonly inputs: readonly [{
        readonly name: "_subscriptionIndices";
        readonly type: "uint256[]";
        readonly internalType: "uint256[]";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple[]";
        readonly internalType: "struct ISub2.Subscription[]";
        readonly components: readonly [{
            readonly name: "sender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "recipient";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "maxProcessingFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "processingFeeToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "lastPayment";
            readonly type: "uint40";
            readonly internalType: "uint40";
        }, {
            readonly name: "sponsor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "cooldown";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "auctionDuration";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "paymentCounter";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getSubscriptionsRecipient";
    readonly inputs: readonly [{
        readonly name: "_recipient";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple[]";
        readonly internalType: "struct ISub2.IndexedSubscription[]";
        readonly components: readonly [{
            readonly name: "index";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "subscription";
            readonly type: "tuple";
            readonly internalType: "struct ISub2.Subscription";
            readonly components: readonly [{
                readonly name: "sender";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "recipient";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "amount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "token";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "maxProcessingFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "processingFeeToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "lastPayment";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "sponsor";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "cooldown";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "auctionDuration";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "paymentCounter";
                readonly type: "uint16";
                readonly internalType: "uint16";
            }];
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getSubscriptionsSender";
    readonly inputs: readonly [{
        readonly name: "_sender";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple[]";
        readonly internalType: "struct ISub2.IndexedSubscription[]";
        readonly components: readonly [{
            readonly name: "index";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "subscription";
            readonly type: "tuple";
            readonly internalType: "struct ISub2.Subscription";
            readonly components: readonly [{
                readonly name: "sender";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "recipient";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "amount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "token";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "maxProcessingFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "processingFeeToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "lastPayment";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "sponsor";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "cooldown";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "auctionDuration";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "paymentCounter";
                readonly type: "uint16";
                readonly internalType: "uint16";
            }];
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "isPayedSubscriber";
    readonly inputs: readonly [{
        readonly name: "_sender";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_recipient";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_minAmount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "_token";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_cooldown";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
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
}];
