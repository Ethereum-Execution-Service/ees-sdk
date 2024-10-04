"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executionManagerAbi = void 0;
exports.executionManagerAbi = [{ "type": "constructor", "inputs": [{ "name": "_spec", "type": "tuple", "internalType": "struct IExecutionManager.InitSpec", "components": [{ "name": "stakingToken", "type": "address", "internalType": "address" }, { "name": "stakingAmount", "type": "uint256", "internalType": "uint256" }, { "name": "minimumStakingPeriod", "type": "uint256", "internalType": "uint256" }, { "name": "stakingBalanceThreshold", "type": "uint256", "internalType": "uint256" }, { "name": "inactiveSlashingAmount", "type": "uint256", "internalType": "uint256" }, { "name": "commitSlashingAmount", "type": "uint256", "internalType": "uint256" }, { "name": "roundDuration", "type": "uint8", "internalType": "uint8" }, { "name": "roundsPerEpoch", "type": "uint8", "internalType": "uint8" }, { "name": "roundBuffer", "type": "uint8", "internalType": "uint8" }, { "name": "commitPhaseDuration", "type": "uint8", "internalType": "uint8" }, { "name": "revealPhaseDuration", "type": "uint8", "internalType": "uint8" }, { "name": "slashingDuration", "type": "uint8", "internalType": "uint8" }, { "name": "executorTax", "type": "uint256", "internalType": "uint256" }, { "name": "protocolTax", "type": "uint256", "internalType": "uint256" }] }, { "name": "_treasury", "type": "address", "internalType": "address" }], "stateMutability": "nonpayable" }, { "type": "function", "name": "activeExecutors", "inputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "outputs": [{ "name": "", "type": "address", "internalType": "address" }], "stateMutability": "view" }, { "type": "function", "name": "commit", "inputs": [{ "name": "_commitment", "type": "bytes32", "internalType": "bytes32" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "commitmentMap", "inputs": [{ "name": "", "type": "address", "internalType": "address" }], "outputs": [{ "name": "commitment", "type": "bytes32", "internalType": "bytes32" }, { "name": "epoch", "type": "uint192", "internalType": "uint192" }, { "name": "revealed", "type": "bool", "internalType": "bool" }], "stateMutability": "view" }, { "type": "function", "name": "epoch", "inputs": [], "outputs": [{ "name": "", "type": "uint192", "internalType": "uint192" }], "stateMutability": "view" }, { "type": "function", "name": "epochEndTime", "inputs": [], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "view" }, { "type": "function", "name": "executeBatch", "inputs": [{ "name": "_indices", "type": "uint256[]", "internalType": "uint256[]" }, { "name": "_gasLimits", "type": "uint256[]", "internalType": "uint256[]" }, { "name": "_feeRecipient", "type": "address", "internalType": "address" }, { "name": "_checkIn", "type": "bool", "internalType": "bool" }], "outputs": [{ "name": "failedIndices", "type": "uint256[]", "internalType": "uint256[]" }], "stateMutability": "nonpayable" }, { "type": "function", "name": "executorInfo", "inputs": [{ "name": "", "type": "address", "internalType": "address" }], "outputs": [{ "name": "balance", "type": "uint256", "internalType": "uint256" }, { "name": "active", "type": "bool", "internalType": "bool" }, { "name": "initialized", "type": "bool", "internalType": "bool" }, { "name": "arrayIndex", "type": "uint40", "internalType": "uint40" }, { "name": "lastCheckinRound", "type": "uint8", "internalType": "uint8" }, { "name": "lastCheckinEpoch", "type": "uint192", "internalType": "uint192" }, { "name": "stakingTimestamp", "type": "uint256", "internalType": "uint256" }], "stateMutability": "view" }, { "type": "function", "name": "exportConfig", "inputs": [], "outputs": [{ "name": "", "type": "bytes", "internalType": "bytes" }], "stateMutability": "view" }, { "type": "function", "name": "initiateEpoch", "inputs": [], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "numberOfActiveExecutors", "inputs": [], "outputs": [{ "name": "", "type": "uint40", "internalType": "uint40" }], "stateMutability": "view" }, { "type": "function", "name": "owner", "inputs": [], "outputs": [{ "name": "", "type": "address", "internalType": "address" }], "stateMutability": "view" }, { "type": "function", "name": "reveal", "inputs": [{ "name": "_signature", "type": "bytes", "internalType": "bytes" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "seed", "inputs": [], "outputs": [{ "name": "", "type": "bytes32", "internalType": "bytes32" }], "stateMutability": "view" }, { "type": "function", "name": "setJobRegistry", "inputs": [{ "name": "_jobRegistry", "type": "address", "internalType": "address" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "slashCommitter", "inputs": [{ "name": "_executor", "type": "address", "internalType": "address" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "slashInactiveExecutor", "inputs": [{ "name": "_executor", "type": "address", "internalType": "address" }, { "name": "_round", "type": "uint8", "internalType": "uint8" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "stake", "inputs": [], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "topup", "inputs": [{ "name": "_amount", "type": "uint256", "internalType": "uint256" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "transferOwnership", "inputs": [{ "name": "newOwner", "type": "address", "internalType": "address" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "unstake", "inputs": [], "outputs": [], "stateMutability": "nonpayable" }, { "type": "event", "name": "EpochInitiated", "inputs": [{ "name": "epoch", "type": "uint192", "indexed": false, "internalType": "uint192" }], "anonymous": false }, { "type": "event", "name": "OwnershipTransferred", "inputs": [{ "name": "user", "type": "address", "indexed": true, "internalType": "address" }, { "name": "newOwner", "type": "address", "indexed": true, "internalType": "address" }], "anonymous": false }, { "type": "error", "name": "AlreadyCheckedIn", "inputs": [] }, { "type": "error", "name": "AlreadyStaked", "inputs": [] }, { "type": "error", "name": "CheckInOutsideRound", "inputs": [] }, { "type": "error", "name": "CommitmentRevealed", "inputs": [] }, { "type": "error", "name": "ExecutorNotSelectedForRound", "inputs": [] }, { "type": "error", "name": "InvalidBlockTime", "inputs": [] }, { "type": "error", "name": "InvalidSignature", "inputs": [] }, { "type": "error", "name": "InvalidSignatureLength", "inputs": [] }, { "type": "error", "name": "MinimumStakingPeriodNotOver", "inputs": [] }, { "type": "error", "name": "NotActiveExecutor", "inputs": [] }, { "type": "error", "name": "OldEpoch", "inputs": [] }, { "type": "error", "name": "RoundExceedingTotal", "inputs": [] }, { "type": "error", "name": "RoundExecuted", "inputs": [] }, { "type": "error", "name": "TopupBelowMinimum", "inputs": [] }, { "type": "error", "name": "WrongCommitment", "inputs": [] }, { "type": "error", "name": "WrongNumberOfRandomWords", "inputs": [] }];
