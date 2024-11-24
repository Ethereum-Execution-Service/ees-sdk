export declare const jobRegistryAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_coordinator";
        readonly type: "address";
        readonly internalType: "contract Coordinator";
    }, {
        readonly name: "_publicERC6492Validator";
        readonly type: "address";
        readonly internalType: "contract PublicERC6492Validator";
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
    readonly name: "createJob";
    readonly inputs: readonly [{
        readonly name: "_specification";
        readonly type: "tuple";
        readonly internalType: "struct IJobRegistry.JobSpecification";
        readonly components: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "nonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "reusableNonce";
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
            readonly name: "application";
            readonly type: "address";
            readonly internalType: "contract IApplication";
        }, {
            readonly name: "executionWindow";
            readonly type: "uint24";
            readonly internalType: "uint24";
        }, {
            readonly name: "zeroFeeWindow";
            readonly type: "uint24";
            readonly internalType: "uint24";
        }, {
            readonly name: "maxExecutions";
            readonly type: "uint48";
            readonly internalType: "uint48";
        }, {
            readonly name: "ignoreAppRevert";
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
            readonly name: "executionModuleInput";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "feeModuleInput";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "applicationInput";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "_sponsor";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_sponsorSignature";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }, {
        readonly name: "_ownerSignature";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }, {
        readonly name: "_index";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "index";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "deactivateJob";
    readonly inputs: readonly [{
        readonly name: "_index";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "deleteJob";
    readonly inputs: readonly [{
        readonly name: "_index";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "execute";
    readonly inputs: readonly [{
        readonly name: "_index";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "_feeRecipient";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint96";
        readonly internalType: "uint96";
    }, {
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "";
        readonly type: "uint8";
        readonly internalType: "uint8";
    }, {
        readonly name: "";
        readonly type: "uint8";
        readonly internalType: "uint8";
    }, {
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "nonpayable";
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
    readonly name: "getJobsArrayLength";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "invalidateUnorderedNonces";
    readonly inputs: readonly [{
        readonly name: "_wordPos";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "_mask";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "jobs";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
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
    }];
    readonly stateMutability: "view";
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
    readonly name: "publicERC6492Validator";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract PublicERC6492Validator";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "revokeSponsorship";
    readonly inputs: readonly [{
        readonly name: "_index";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "updateFeeModule";
    readonly inputs: readonly [{
        readonly name: "_feeModuleInput";
        readonly type: "tuple";
        readonly internalType: "struct IJobRegistry.FeeModuleInput";
        readonly components: readonly [{
            readonly name: "nonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "reusableNonce";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "index";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "feeModule";
            readonly type: "bytes1";
            readonly internalType: "bytes1";
        }, {
            readonly name: "feeModuleInput";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "_sponsor";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_sponsorSignature";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "event";
    readonly name: "FeeModuleUpdate";
    readonly inputs: readonly [{
        readonly name: "index";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "owner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "sponsor";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "JobCreated";
    readonly inputs: readonly [{
        readonly name: "index";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "owner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "application";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "initialExecution";
        readonly type: "bool";
        readonly indexed: false;
        readonly internalType: "bool";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "JobDeactivated";
    readonly inputs: readonly [{
        readonly name: "index";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "owner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "application";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "JobDeleted";
    readonly inputs: readonly [{
        readonly name: "index";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "owner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "application";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "applicationRevertedOnDelete";
        readonly type: "bool";
        readonly indexed: false;
        readonly internalType: "bool";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "JobExecuted";
    readonly inputs: readonly [{
        readonly name: "index";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "owner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "application";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "success";
        readonly type: "bool";
        readonly indexed: false;
        readonly internalType: "bool";
    }, {
        readonly name: "executionNumber";
        readonly type: "uint48";
        readonly indexed: false;
        readonly internalType: "uint48";
    }, {
        readonly name: "executionFee";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "executionFeeToken";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "inZeroFeeWindow";
        readonly type: "bool";
        readonly indexed: false;
        readonly internalType: "bool";
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
    readonly name: "InvalidModule";
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
    readonly name: "JobAlreadyExistsAtIndex";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "JobInExecutionMode";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "JobIsDeleted";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "JobNotActive";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "JobNotExpiredOrActive";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "MaxExecutionFeeExceeded";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "MaxExecutionsExceeded";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotExecutable";
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
    readonly name: "TransferFailed";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "Unauthorized";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "UnsupportedExecutionModule";
    readonly inputs: readonly [];
}];
