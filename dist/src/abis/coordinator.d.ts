export declare const coordinatorAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_spec";
        readonly type: "tuple";
        readonly internalType: "struct ICoordinator.InitSpec";
        readonly components: readonly [{
            readonly name: "stakingToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "stakingAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "minimumStakingPeriod";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "stakingBalanceThreshold";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "inactiveSlashingAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "commitSlashingAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "roundDuration";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "roundsPerEpoch";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "roundBuffer";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "commitPhaseDuration";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "revealPhaseDuration";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "slashingDuration";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "executorTax";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "protocolTax";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly name: "_treasury";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "activeExecutors";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "commit";
    readonly inputs: readonly [{
        readonly name: "_commitment";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "commitmentMap";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "commitment";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }, {
        readonly name: "epoch";
        readonly type: "uint192";
        readonly internalType: "uint192";
    }, {
        readonly name: "revealed";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "epoch";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint192";
        readonly internalType: "uint192";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "epochEndTime";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "executeBatch";
    readonly inputs: readonly [{
        readonly name: "_indices";
        readonly type: "uint256[]";
        readonly internalType: "uint256[]";
    }, {
        readonly name: "_gasLimits";
        readonly type: "uint256[]";
        readonly internalType: "uint256[]";
    }, {
        readonly name: "_feeRecipient";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "failedIndices";
        readonly type: "uint256[]";
        readonly internalType: "uint256[]";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "executorInfo";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "balance";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "active";
        readonly type: "bool";
        readonly internalType: "bool";
    }, {
        readonly name: "initialized";
        readonly type: "bool";
        readonly internalType: "bool";
    }, {
        readonly name: "arrayIndex";
        readonly type: "uint40";
        readonly internalType: "uint40";
    }, {
        readonly name: "lastCheckinRound";
        readonly type: "uint8";
        readonly internalType: "uint8";
    }, {
        readonly name: "lastCheckinEpoch";
        readonly type: "uint192";
        readonly internalType: "uint192";
    }, {
        readonly name: "stakingTimestamp";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "exportConfig";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "initiateEpoch";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "numberOfActiveExecutors";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint40";
        readonly internalType: "uint40";
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
    readonly name: "reveal";
    readonly inputs: readonly [{
        readonly name: "_signature";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "seed";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "setJobRegistry";
    readonly inputs: readonly [{
        readonly name: "_jobRegistry";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "slashCommitter";
    readonly inputs: readonly [{
        readonly name: "_executor";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_recipient";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "slashInactiveExecutor";
    readonly inputs: readonly [{
        readonly name: "_executor";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_round";
        readonly type: "uint8";
        readonly internalType: "uint8";
    }, {
        readonly name: "_recipient";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "stake";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "topup";
    readonly inputs: readonly [{
        readonly name: "_amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
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
    readonly name: "unstake";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "updateExecutorTax";
    readonly inputs: readonly [{
        readonly name: "_executorTax";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "updateProtocolTax";
    readonly inputs: readonly [{
        readonly name: "_protocolTax";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "event";
    readonly name: "BatchExecution";
    readonly inputs: readonly [{
        readonly name: "failedIndices";
        readonly type: "uint256[]";
        readonly indexed: false;
        readonly internalType: "uint256[]";
    }, {
        readonly name: "totalProtocolTax";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "totalExecutorTax";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "taxPoolReward";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "CheckIn";
    readonly inputs: readonly [{
        readonly name: "executor";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "epoch";
        readonly type: "uint192";
        readonly indexed: true;
        readonly internalType: "uint192";
    }, {
        readonly name: "round";
        readonly type: "uint8";
        readonly indexed: false;
        readonly internalType: "uint8";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Commitment";
    readonly inputs: readonly [{
        readonly name: "executor";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "epoch";
        readonly type: "uint192";
        readonly indexed: true;
        readonly internalType: "uint192";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "EpochInitiated";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly type: "uint192";
        readonly indexed: false;
        readonly internalType: "uint192";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "ExecutorActivated";
    readonly inputs: readonly [{
        readonly name: "executor";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "ExecutorDeactivated";
    readonly inputs: readonly [{
        readonly name: "executor";
        readonly type: "address";
        readonly indexed: true;
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
    readonly name: "Reveal";
    readonly inputs: readonly [{
        readonly name: "executor";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "epoch";
        readonly type: "uint192";
        readonly indexed: true;
        readonly internalType: "uint192";
    }, {
        readonly name: "newSeed";
        readonly type: "bytes32";
        readonly indexed: false;
        readonly internalType: "bytes32";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "SlashCommitter";
    readonly inputs: readonly [{
        readonly name: "executor";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "slasher";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "epoch";
        readonly type: "uint192";
        readonly indexed: true;
        readonly internalType: "uint192";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "SlashInactiveExecutor";
    readonly inputs: readonly [{
        readonly name: "executor";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "slasher";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "epoch";
        readonly type: "uint192";
        readonly indexed: true;
        readonly internalType: "uint192";
    }, {
        readonly name: "round";
        readonly type: "uint8";
        readonly indexed: false;
        readonly internalType: "uint8";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "error";
    readonly name: "AlreadyCheckedIn";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "AlreadyStaked";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "CheckInOutsideRound";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "CommitmentRevealed";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ExecutorNotSelectedForRound";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidBlockTime";
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
    readonly name: "MinimumStakingPeriodNotOver";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotActiveExecutor";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "OldEpoch";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "RoundExceedingTotal";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "RoundExecuted";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "TaxUpdateTooLarge";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "TopupBelowMinimum";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "UpdateOnCooldown";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "WrongCommitment";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "WrongNumberOfRandomWords";
    readonly inputs: readonly [];
}];
