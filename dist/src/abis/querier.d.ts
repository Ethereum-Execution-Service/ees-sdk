export declare const querierAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_jobRegistry";
        readonly type: "address";
        readonly internalType: "contract JobRegistry";
    }, {
        readonly name: "_coordinator";
        readonly type: "address";
        readonly internalType: "contract Coordinator";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "getCommitData";
    readonly inputs: readonly [{
        readonly name: "_executors";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple[]";
        readonly internalType: "struct ICoordinator.CommitData[]";
        readonly components: readonly [{
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
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getCurrentEpochInfo";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint192";
        readonly internalType: "uint192";
    }, {
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }, {
        readonly name: "";
        readonly type: "uint40";
        readonly internalType: "uint40";
    }, {
        readonly name: "";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }, {
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getExecutors";
    readonly inputs: readonly [{
        readonly name: "_executors";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple[]";
        readonly internalType: "struct ICoordinator.Executor[]";
        readonly components: readonly [{
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
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "roundsCheckedInEpoch";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "lastCheckinRound";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "lastCheckinEpoch";
            readonly type: "uint96";
            readonly internalType: "uint96";
        }, {
            readonly name: "executionsInRoundsInEpoch";
            readonly type: "uint96";
            readonly internalType: "uint96";
        }, {
            readonly name: "lastRegistrationTimestamp";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "registeredModules";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getJobs";
    readonly inputs: readonly [{
        readonly name: "_indices";
        readonly type: "uint256[]";
        readonly internalType: "uint256[]";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple[]";
        readonly internalType: "struct IQuerier.JobData[]";
        readonly components: readonly [{
            readonly name: "index";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "active";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "ignoreAppRevert";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "sponsorFallbackToOwner";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "sponsorCanUpdateFeeModule";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "executionModule";
            readonly type: "bytes1";
            readonly internalType: "bytes1";
        }, {
            readonly name: "feeModule";
            readonly type: "bytes1";
            readonly internalType: "bytes1";
        }, {
            readonly name: "executionWindow";
            readonly type: "uint24";
            readonly internalType: "uint24";
        }, {
            readonly name: "zeroFeeWindow";
            readonly type: "uint24";
            readonly internalType: "uint24";
        }, {
            readonly name: "sponsor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "executionCounter";
            readonly type: "uint48";
            readonly internalType: "uint48";
        }, {
            readonly name: "maxExecutions";
            readonly type: "uint48";
            readonly internalType: "uint48";
        }, {
            readonly name: "application";
            readonly type: "address";
            readonly internalType: "contract IApplication";
        }, {
            readonly name: "creationTime";
            readonly type: "uint96";
            readonly internalType: "uint96";
        }, {
            readonly name: "executionModuleData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "feeModuleData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "jobIsExpired";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "jobInExecutionWindow";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
    }];
    readonly stateMutability: "view";
}];
