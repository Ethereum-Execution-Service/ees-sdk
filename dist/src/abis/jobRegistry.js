"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobRegistryAbi = void 0;
exports.jobRegistryAbi = [{ "type": "constructor", "inputs": [{ "name": "_coordinator", "type": "address", "internalType": "contract Coordinator" }, { "name": "_publicERC6492Validator", "type": "address", "internalType": "contract PublicERC6492Validator" }], "stateMutability": "nonpayable" }, { "type": "function", "name": "DOMAIN_SEPARATOR", "inputs": [], "outputs": [{ "name": "", "type": "bytes32", "internalType": "bytes32" }], "stateMutability": "view" }, { "type": "function", "name": "createJob", "inputs": [{ "name": "_specification", "type": "tuple", "internalType": "struct IJobRegistry.JobSpecification", "components": [{ "name": "owner", "type": "address", "internalType": "address" }, { "name": "nonce", "type": "uint256", "internalType": "uint256" }, { "name": "deadline", "type": "uint256", "internalType": "uint256" }, { "name": "reusableNonce", "type": "bool", "internalType": "bool" }, { "name": "sponsorFallbackToOwner", "type": "bool", "internalType": "bool" }, { "name": "sponsorCanUpdateFeeModule", "type": "bool", "internalType": "bool" }, { "name": "application", "type": "address", "internalType": "contract IApplication" }, { "name": "executionWindow", "type": "uint24", "internalType": "uint24" }, { "name": "zeroFeeWindow", "type": "uint24", "internalType": "uint24" }, { "name": "maxExecutions", "type": "uint48", "internalType": "uint48" }, { "name": "ignoreAppRevert", "type": "bool", "internalType": "bool" }, { "name": "executionModule", "type": "bytes1", "internalType": "bytes1" }, { "name": "feeModule", "type": "bytes1", "internalType": "bytes1" }, { "name": "executionModuleInput", "type": "bytes", "internalType": "bytes" }, { "name": "feeModuleInput", "type": "bytes", "internalType": "bytes" }, { "name": "applicationInput", "type": "bytes", "internalType": "bytes" }] }, { "name": "_sponsor", "type": "address", "internalType": "address" }, { "name": "_sponsorSignature", "type": "bytes", "internalType": "bytes" }, { "name": "_ownerSignature", "type": "bytes", "internalType": "bytes" }, { "name": "_index", "type": "uint256", "internalType": "uint256" }], "outputs": [{ "name": "index", "type": "uint256", "internalType": "uint256" }], "stateMutability": "nonpayable" }, { "type": "function", "name": "deactivateJob", "inputs": [{ "name": "_index", "type": "uint256", "internalType": "uint256" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "deleteJob", "inputs": [{ "name": "_index", "type": "uint256", "internalType": "uint256" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "execute", "inputs": [{ "name": "_index", "type": "uint256", "internalType": "uint256" }, { "name": "_feeRecipient", "type": "address", "internalType": "address" }], "outputs": [{ "name": "", "type": "uint96", "internalType": "uint96" }, { "name": "", "type": "uint256", "internalType": "uint256" }, { "name": "", "type": "address", "internalType": "address" }, { "name": "", "type": "uint8", "internalType": "uint8" }, { "name": "", "type": "uint8", "internalType": "uint8" }, { "name": "", "type": "bool", "internalType": "bool" }], "stateMutability": "nonpayable" }, { "type": "function", "name": "exportConfig", "inputs": [], "outputs": [{ "name": "", "type": "bytes", "internalType": "bytes" }], "stateMutability": "view" }, { "type": "function", "name": "getJobsArrayLength", "inputs": [], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "view" }, { "type": "function", "name": "invalidateUnorderedNonces", "inputs": [{ "name": "_wordPos", "type": "uint256", "internalType": "uint256" }, { "name": "_mask", "type": "uint256", "internalType": "uint256" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "jobs", "inputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "outputs": [{ "name": "owner", "type": "address", "internalType": "address" }, { "name": "active", "type": "bool", "internalType": "bool" }, { "name": "ignoreAppRevert", "type": "bool", "internalType": "bool" }, { "name": "sponsorFallbackToOwner", "type": "bool", "internalType": "bool" }, { "name": "sponsorCanUpdateFeeModule", "type": "bool", "internalType": "bool" }, { "name": "executionModule", "type": "bytes1", "internalType": "bytes1" }, { "name": "feeModule", "type": "bytes1", "internalType": "bytes1" }, { "name": "executionWindow", "type": "uint24", "internalType": "uint24" }, { "name": "zeroFeeWindow", "type": "uint24", "internalType": "uint24" }, { "name": "sponsor", "type": "address", "internalType": "address" }, { "name": "executionCounter", "type": "uint48", "internalType": "uint48" }, { "name": "maxExecutions", "type": "uint48", "internalType": "uint48" }, { "name": "application", "type": "address", "internalType": "contract IApplication" }, { "name": "creationTime", "type": "uint96", "internalType": "uint96" }], "stateMutability": "view" }, { "type": "function", "name": "nonceBitmap", "inputs": [{ "name": "", "type": "address", "internalType": "address" }, { "name": "", "type": "uint256", "internalType": "uint256" }], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "view" }, { "type": "function", "name": "publicERC6492Validator", "inputs": [], "outputs": [{ "name": "", "type": "address", "internalType": "contract PublicERC6492Validator" }], "stateMutability": "view" }, { "type": "function", "name": "revokeSponsorship", "inputs": [{ "name": "_index", "type": "uint256", "internalType": "uint256" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "updateFeeModule", "inputs": [{ "name": "_feeModuleInput", "type": "tuple", "internalType": "struct IJobRegistry.FeeModuleInput", "components": [{ "name": "nonce", "type": "uint256", "internalType": "uint256" }, { "name": "deadline", "type": "uint256", "internalType": "uint256" }, { "name": "reusableNonce", "type": "bool", "internalType": "bool" }, { "name": "index", "type": "uint256", "internalType": "uint256" }, { "name": "feeModule", "type": "bytes1", "internalType": "bytes1" }, { "name": "feeModuleInput", "type": "bytes", "internalType": "bytes" }] }, { "name": "_sponsor", "type": "address", "internalType": "address" }, { "name": "_sponsorSignature", "type": "bytes", "internalType": "bytes" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "event", "name": "FeeModuleUpdate", "inputs": [{ "name": "index", "type": "uint256", "indexed": true, "internalType": "uint256" }, { "name": "owner", "type": "address", "indexed": true, "internalType": "address" }, { "name": "sponsor", "type": "address", "indexed": true, "internalType": "address" }], "anonymous": false }, { "type": "event", "name": "JobCreated", "inputs": [{ "name": "index", "type": "uint256", "indexed": true, "internalType": "uint256" }, { "name": "owner", "type": "address", "indexed": true, "internalType": "address" }, { "name": "application", "type": "address", "indexed": true, "internalType": "address" }, { "name": "initialExecution", "type": "bool", "indexed": false, "internalType": "bool" }], "anonymous": false }, { "type": "event", "name": "JobDeactivated", "inputs": [{ "name": "index", "type": "uint256", "indexed": true, "internalType": "uint256" }, { "name": "owner", "type": "address", "indexed": true, "internalType": "address" }, { "name": "application", "type": "address", "indexed": true, "internalType": "address" }], "anonymous": false }, { "type": "event", "name": "JobDeleted", "inputs": [{ "name": "index", "type": "uint256", "indexed": true, "internalType": "uint256" }, { "name": "owner", "type": "address", "indexed": true, "internalType": "address" }, { "name": "application", "type": "address", "indexed": true, "internalType": "address" }, { "name": "applicationRevertedOnDelete", "type": "bool", "indexed": false, "internalType": "bool" }], "anonymous": false }, { "type": "event", "name": "JobExecuted", "inputs": [{ "name": "index", "type": "uint256", "indexed": true, "internalType": "uint256" }, { "name": "owner", "type": "address", "indexed": true, "internalType": "address" }, { "name": "application", "type": "address", "indexed": true, "internalType": "address" }, { "name": "success", "type": "bool", "indexed": false, "internalType": "bool" }, { "name": "executionNumber", "type": "uint48", "indexed": false, "internalType": "uint48" }, { "name": "executionFee", "type": "uint256", "indexed": false, "internalType": "uint256" }, { "name": "executionFeeToken", "type": "address", "indexed": false, "internalType": "address" }, { "name": "inZeroFeeWindow", "type": "bool", "indexed": false, "internalType": "bool" }], "anonymous": false }, { "type": "event", "name": "UnorderedNonceInvalidation", "inputs": [{ "name": "owner", "type": "address", "indexed": true, "internalType": "address" }, { "name": "word", "type": "uint256", "indexed": false, "internalType": "uint256" }, { "name": "mask", "type": "uint256", "indexed": false, "internalType": "uint256" }], "anonymous": false }, { "type": "error", "name": "InvalidModule", "inputs": [] }, { "type": "error", "name": "InvalidNonce", "inputs": [] }, { "type": "error", "name": "InvalidSignature", "inputs": [] }, { "type": "error", "name": "JobAlreadyExistsAtIndex", "inputs": [] }, { "type": "error", "name": "JobInExecutionMode", "inputs": [] }, { "type": "error", "name": "JobIsDeleted", "inputs": [] }, { "type": "error", "name": "JobNotActive", "inputs": [] }, { "type": "error", "name": "JobNotExpiredOrActive", "inputs": [] }, { "type": "error", "name": "MaxExecutionFeeExceeded", "inputs": [] }, { "type": "error", "name": "MaxExecutionsExceeded", "inputs": [] }, { "type": "error", "name": "NotExecutable", "inputs": [] }, { "type": "error", "name": "SignatureExpired", "inputs": [{ "name": "signatureDeadline", "type": "uint256", "internalType": "uint256" }] }, { "type": "error", "name": "TransferFailed", "inputs": [] }, { "type": "error", "name": "Unauthorized", "inputs": [] }, { "type": "error", "name": "UnsupportedExecutionModule", "inputs": [] }];
