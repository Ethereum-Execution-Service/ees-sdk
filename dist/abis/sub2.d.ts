export declare const sub2Abi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_treasury";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_treasuryBasisPoints";
        readonly type: "uint16";
        readonly internalType: "uint16";
    }, {
        readonly name: "_owner";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "DOMAIN_SEPARATOR";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "FEE_BASE";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "calculateFee";
    readonly inputs: readonly [{
        readonly name: "_amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "_basisPoints";
        readonly type: "uint16";
        readonly internalType: "uint16";
    }];
    readonly outputs: readonly [{
        readonly name: "fee";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly name: "cancelExpiredSubscription";
    readonly inputs: readonly [{
        readonly name: "_subscriptionIndex";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "cancelSubscription";
    readonly inputs: readonly [{
        readonly name: "_subscriptionIndex";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "createSubscription";
    readonly inputs: readonly [{
        readonly name: "_recipient";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_amount";
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
    }, {
        readonly name: "_maxProcessingFee";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "_processingFeeToken";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_auctionDuration";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }, {
        readonly name: "_delay";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }, {
        readonly name: "_initialPayments";
        readonly type: "uint16";
        readonly internalType: "uint16";
    }, {
        readonly name: "_index";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "subscriptionIndex";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "createSubscriptionWithSponsor";
    readonly inputs: readonly [{
        readonly name: "_permit";
        readonly type: "tuple";
        readonly internalType: "struct ISub2.SponsorPermit";
        readonly components: readonly [{
            readonly name: "nonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
            readonly name: "cooldown";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "delay";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "auctionDuration";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "initialPayments";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "maxProcessingFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "processingFeeToken";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly name: "_sponsor";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_signature";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }, {
        readonly name: "_index";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "subscriptionIndex";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "getNumberOfSubscriptions";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "numberOfSubscriptions";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "invalidateUnorderedNonces";
    readonly inputs: readonly [{
        readonly name: "wordPos";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "mask";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "nonceBitmap";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "owner";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "processPayment";
    readonly inputs: readonly [{
        readonly name: "_subscriptionIndex";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "_feeRecipient";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "processingFee";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "processingToken";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "recipientSubscriptionNonce";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "recipientToSubscriptionIndex";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "revokeSponsorship";
    readonly inputs: readonly [{
        readonly name: "_subscriptionIndex";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setTreasury";
    readonly inputs: readonly [{
        readonly name: "_treasury";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setTreasuryFeeBasisPoints";
    readonly inputs: readonly [{
        readonly name: "_treasuryFeeBasisPoints";
        readonly type: "uint16";
        readonly internalType: "uint16";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "subscriptionHashToNonce";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "subscriptionHashToSubscriptionIndex";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }, {
        readonly name: "";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "subscriptions";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
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
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "transferOwnership";
    readonly inputs: readonly [{
        readonly name: "newOwner";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "treasuryFeeBasisPoints";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint16";
        readonly internalType: "uint16";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "updateMaxProcessingFee";
    readonly inputs: readonly [{
        readonly name: "_subscriptionIndex";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "_maxProcessingFee";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "_processingFeeToken";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "userSubscriptionNonce";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint16";
        readonly internalType: "uint16";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "userToSubscriptionIndex";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "";
        readonly type: "uint16";
        readonly internalType: "uint16";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "event";
    readonly name: "AuctionDurationUpdated";
    readonly inputs: readonly [{
        readonly name: "subscriptionIndex";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "auctionDuration";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "MaxProcessingFeeUpdated";
    readonly inputs: readonly [{
        readonly name: "subscriptionIndex";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "maxProcessingFee";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "processingFeeToken";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "OwnershipTransferred";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "newOwner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Payment";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "recipient";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "subscriptionIndex";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "sponsor";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "token";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "protocolFee";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "processingFee";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "processingFeeToken";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "terms";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "SponsorshipRevoked";
    readonly inputs: readonly [{
        readonly name: "subscriptionIndex";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "sender";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "SubscriptionCanceled";
    readonly inputs: readonly [{
        readonly name: "subscriptionIndex";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "recipient";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "SubscriptionCreated";
    readonly inputs: readonly [{
        readonly name: "subscriptionIndex";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "recipient";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "UnorderedNonceInvalidation";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "word";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "mask";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "error";
    readonly name: "AuctionDurationGreaterThanCooldown";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "AuctionExpired";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ExceedingMaxProcessingFee";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InFeeAuctionPeriod";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidAuthSignature";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidContractSignature";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidFeeBasisPoints";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidNonce";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidSignature";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidSignatureLength";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidSigner";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotEnoughTimePast";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotSenderOrRecipient";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotSponsorOfSubscription";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "SignatureExpired";
    readonly inputs: readonly [{
        readonly name: "signatureDeadline";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
}, {
    readonly type: "error";
    readonly name: "SubscriptionAlreadyExists";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "SubscriptionIsCanceled";
    readonly inputs: readonly [];
}];
