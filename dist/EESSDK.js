"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EESSDK = void 0;
var viem_1 = require("viem");
var executionManager_1 = require("./abis/executionManager");
var jobRegistry_1 = require("./abis/jobRegistry");
var querier_1 = require("./abis/querier");
var configProvider_1 = require("./abis/configProvider");
var chainlinkOracle_1 = require("./abis/chainlinkOracle");
var EESSDK = /** @class */ (function () {
    function EESSDK(publicClient, walletClient, simulateBeforeWrite) {
        if (simulateBeforeWrite === void 0) { simulateBeforeWrite = true; }
        this.publicClient = publicClient;
        this.walletClient = walletClient;
        this.simulateBeforeWrite = simulateBeforeWrite;
    }
    EESSDK.init = function (configProviderAddress_1, publicClient_1, walletClient_1) {
        return __awaiter(this, arguments, void 0, function (configProviderAddress, publicClient, walletClient, simulateBeforeWrite) {
            var instance;
            var _a, _b;
            if (simulateBeforeWrite === void 0) { simulateBeforeWrite = true; }
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (walletClient && ((_a = walletClient.chain) === null || _a === void 0 ? void 0 : _a.id) !== ((_b = publicClient.chain) === null || _b === void 0 ? void 0 : _b.id))
                            throw new Error('Chain ID mismatch between public client and wallet client.');
                        instance = new EESSDK(publicClient, walletClient, simulateBeforeWrite);
                        return [4 /*yield*/, instance.fetchAndSetConfig(configProviderAddress)];
                    case 1:
                        _c.sent();
                        return [2 /*return*/, instance];
                }
            });
        });
    };
    EESSDK.prototype.fetchAndSetConfig = function (configProviderAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var config, decodedAddresses, decodedJobRegistryConfig, decodedExecutionManagerConfig;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.publicClient.readContract({
                            address: configProviderAddress,
                            abi: configProvider_1.configProviderAbi,
                            functionName: 'getConfig',
                        })];
                    case 1:
                        config = _a.sent();
                        if (!config)
                            throw new Error('Failed to fetch protocol config.');
                        decodedAddresses = (0, viem_1.decodeAbiParameters)([
                            { name: 'jobRegistry', type: 'address' },
                            { name: 'executionManager', type: 'address' },
                            { name: 'querier', type: 'address' }
                        ], config[0]);
                        decodedJobRegistryConfig = (0, viem_1.decodeAbiParameters)([
                            { name: 'executionGasOverhead', type: 'uint256' },
                            { name: 'executionModulesLength', type: 'uint256' },
                            { name: 'feeModulesLength', type: 'uint256' }
                        ], config[1]);
                        decodedExecutionManagerConfig = (0, viem_1.decodeAbiParameters)([
                            { name: 'stakingToken', type: 'address' },
                            { name: 'stakingAmount', type: 'uint256' },
                            { name: 'minimumStakingPeriod', type: 'uint256' },
                            { name: 'stakingBalanceThreshold', type: 'uint256' },
                            { name: 'inactiveSlashingAmount', type: 'uint256' },
                            { name: 'commitSlashingAmount', type: 'uint256' },
                            { name: 'roundsPerEpoch', type: 'uint8' },
                            { name: 'executorTax', type: 'uint256' },
                            { name: 'protocolTax', type: 'uint256' },
                            { name: 'roundDuration', type: 'uint8' },
                            { name: 'roundBuffer', type: 'uint8' },
                            { name: 'slashingDuration', type: 'uint8' },
                            { name: 'commitPhaseDuration', type: 'uint8' },
                            { name: 'revealPhaseDuration', type: 'uint8' }
                        ], config[2]);
                        this.protocolConfig = {
                            jobRegistry: decodedAddresses[0],
                            executionManager: decodedAddresses[1],
                            querier: decodedAddresses[2],
                            executionGasOverhead: decodedJobRegistryConfig[0],
                            executionModulesLength: decodedJobRegistryConfig[1],
                            feeModulesLength: decodedJobRegistryConfig[2],
                            stakingToken: decodedExecutionManagerConfig[0],
                            stakingAmount: decodedExecutionManagerConfig[1],
                            minimumStakingPeriod: decodedExecutionManagerConfig[2],
                            stakingBalanceThreshold: decodedExecutionManagerConfig[3],
                            inactiveSlashingAmount: decodedExecutionManagerConfig[4],
                            commitSlashingAmount: decodedExecutionManagerConfig[5],
                            roundsPerEpoch: decodedExecutionManagerConfig[6],
                            executorTax: decodedExecutionManagerConfig[7],
                            protocolTax: decodedExecutionManagerConfig[8],
                            roundDuration: decodedExecutionManagerConfig[9],
                            roundBuffer: decodedExecutionManagerConfig[10],
                            slashingDuration: decodedExecutionManagerConfig[11],
                            commitPhaseDuration: decodedExecutionManagerConfig[12],
                            revealPhaseDuration: decodedExecutionManagerConfig[13],
                            selectionPhaseDuration: decodedExecutionManagerConfig[12] + decodedExecutionManagerConfig[13],
                            totalRoundDuration: decodedExecutionManagerConfig[9] + decodedExecutionManagerConfig[10],
                            epochDuration: (decodedExecutionManagerConfig[12] + decodedExecutionManagerConfig[13]) + (decodedExecutionManagerConfig[9] + decodedExecutionManagerConfig[10]) * decodedExecutionManagerConfig[6]
                        };
                        return [2 /*return*/];
                }
            });
        });
    };
    EESSDK.prototype.getAllowance = function (token, allower, spender) {
        return __awaiter(this, void 0, void 0, function () {
            var allowance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkProtocolConfig();
                        return [4 /*yield*/, this.publicClient.readContract({
                                address: token,
                                abi: viem_1.erc20Abi,
                                functionName: 'allowance',
                                args: [allower, spender]
                            })];
                    case 1:
                        allowance = _a.sent();
                        return [2 /*return*/, allowance];
                }
            });
        });
    };
    EESSDK.prototype.getBalance = function (token, account) {
        return __awaiter(this, void 0, void 0, function () {
            var balance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkProtocolConfig();
                        return [4 /*yield*/, this.publicClient.readContract({
                                address: token,
                                abi: viem_1.erc20Abi,
                                functionName: 'balanceOf',
                                args: [account]
                            })];
                    case 1:
                        balance = _a.sent();
                        return [2 /*return*/, balance];
                }
            });
        });
    };
    EESSDK.prototype.getProtocolConfig = function () {
        this.checkProtocolConfig();
        return this.protocolConfig;
    };
    EESSDK.prototype.checkProtocolConfig = function () {
        if (!this.protocolConfig) {
            throw new Error('Protocol config not initialized. Make sure to call init() first.');
        }
    };
    EESSDK.prototype.getTokenPrice = function (oracleAddress, token, auxData) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkProtocolConfig();
                        return [4 /*yield*/, this.publicClient.readContract({
                                address: oracleAddress,
                                abi: chainlinkOracle_1.chainlinkOracleAbi,
                                functionName: 'getPrice',
                                args: [token, auxData]
                            })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    EESSDK.prototype.getJobs = function (indices) {
        return __awaiter(this, void 0, void 0, function () {
            var data, jobs, i, job;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkProtocolConfig();
                        return [4 /*yield*/, this.publicClient.readContract({
                                address: this.protocolConfig.querier,
                                abi: querier_1.querierAbi,
                                functionName: 'getJobs',
                                args: [indices]
                            })];
                    case 1:
                        data = _a.sent();
                        jobs = [];
                        for (i = 0; i < data.length; i++) {
                            job = this.formatJobData(indices[i], data[i]);
                            jobs.push(job);
                        }
                        return [2 /*return*/, jobs];
                }
            });
        });
    };
    EESSDK.prototype.executeTransaction = function (contractCall, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, request, result, txHash, transactionReceipt, result, transactionReceipt;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.walletClient)
                            throw new Error('Wallet client not provided.');
                        if (!this.simulateBeforeWrite) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.publicClient.simulateContract(__assign(__assign(__assign({}, contractCall), { chain: this.walletClient.chain, account: this.walletClient.account }), options))];
                    case 1:
                        _a = _b.sent(), request = _a.request, result = _a.result;
                        if (!request)
                            throw new Error("Failed to ".concat(contractCall.functionName, "."));
                        return [4 /*yield*/, this.walletClient.writeContract(request)];
                    case 2:
                        txHash = _b.sent();
                        return [4 /*yield*/, this.publicClient.waitForTransactionReceipt({ hash: txHash })];
                    case 3:
                        transactionReceipt = _b.sent();
                        return [2 /*return*/, { transactionReceipt: transactionReceipt, result: result }];
                    case 4: return [4 /*yield*/, this.walletClient.writeContract(__assign(__assign(__assign({}, contractCall), { chain: this.walletClient.chain, account: this.walletClient.account }), options))];
                    case 5:
                        result = _b.sent();
                        return [4 /*yield*/, this.publicClient.waitForTransactionReceipt({ hash: result })];
                    case 6:
                        transactionReceipt = _b.sent();
                        return [2 /*return*/, { transactionReceipt: transactionReceipt, result: result }];
                }
            });
        });
    };
    EESSDK.prototype.createJob = function (jobSpecification, sponsor, sponsorSignature, hasSponsorship, index, options) {
        return __awaiter(this, void 0, void 0, function () {
            var transactionReceipt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkProtocolConfig();
                        return [4 /*yield*/, this.executeTransaction({
                                address: this.protocolConfig.jobRegistry,
                                abi: jobRegistry_1.jobRegistryAbi,
                                functionName: 'createJob',
                                args: [jobSpecification, sponsor, sponsorSignature, hasSponsorship, index],
                            }, options)];
                    case 1:
                        transactionReceipt = (_a.sent()).transactionReceipt;
                        return [2 /*return*/, transactionReceipt];
                }
            });
        });
    };
    EESSDK.prototype.deleteJob = function (index, options) {
        return __awaiter(this, void 0, void 0, function () {
            var transactionReceipt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkProtocolConfig();
                        return [4 /*yield*/, this.executeTransaction({
                                address: this.protocolConfig.jobRegistry,
                                abi: jobRegistry_1.jobRegistryAbi,
                                functionName: 'deleteJob',
                                args: [index],
                            }, options)];
                    case 1:
                        transactionReceipt = (_a.sent()).transactionReceipt;
                        return [2 /*return*/, transactionReceipt];
                }
            });
        });
    };
    EESSDK.prototype.watchCreatedJobs = function (application, onCreatedJob) {
        this.checkProtocolConfig();
        var unwatch = this.publicClient.watchEvent({
            address: this.protocolConfig.jobRegistry,
            event: (0, viem_1.parseAbiItem)('event JobCreated(uint256 indexed index, address indexed owner, address indexed application)'),
            args: {
                application: application
            },
            onLogs: function (logs) {
                for (var _i = 0, logs_1 = logs; _i < logs_1.length; _i++) {
                    var log = logs_1[_i];
                    onCreatedJob(log.args.index);
                }
            }
        });
        return unwatch;
    };
    EESSDK.prototype.watchExecutedJobs = function (application, onExecutedJob) {
        this.checkProtocolConfig();
        var unwatch = this.publicClient.watchEvent({
            address: this.protocolConfig.jobRegistry,
            event: (0, viem_1.parseAbiItem)('event JobExecuted(uint256 indexed index,address indexed owner,address indexed application,uint256 executionFee,address executionFeeToken)'),
            args: {
                application: application
            },
            onLogs: function (logs) {
                for (var _i = 0, logs_2 = logs; _i < logs_2.length; _i++) {
                    var log = logs_2[_i];
                    onExecutedJob(log.args.index);
                }
            }
        });
        return unwatch;
    };
    EESSDK.prototype.watchDeletedJobs = function (application, onDeletedJob) {
        this.checkProtocolConfig();
        var unwatch = this.publicClient.watchEvent({
            address: this.protocolConfig.jobRegistry,
            event: (0, viem_1.parseAbiItem)('event JobDeleted(uint256 indexed index, address indexed owner, address indexed application)'),
            args: {
                application: application
            },
            onLogs: function (logs) {
                for (var _i = 0, logs_3 = logs; _i < logs_3.length; _i++) {
                    var log = logs_3[_i];
                    onDeletedJob(log.args.index);
                }
            }
        });
        return unwatch;
    };
    EESSDK.prototype.signJobSpecification = function (jobSpecification) {
        return __awaiter(this, void 0, void 0, function () {
            var signature;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkProtocolConfig();
                        if (!this.walletClient)
                            throw new Error('Wallet client not provided.');
                        return [4 /*yield*/, this.walletClient.signTypedData({
                                account: this.walletClient.account,
                                domain: {
                                    name: "JobRegistry",
                                    chainId: this.walletClient.chain.id,
                                    verifyingContract: this.protocolConfig.jobRegistry,
                                },
                                types: {
                                    JobSpecification: [
                                        { name: 'nonce', type: 'uint256' },
                                        { name: 'deadline', type: 'uint256' },
                                        { name: 'application', type: 'address' },
                                        { name: 'executionWindow', type: 'uint32' },
                                        { name: 'executionModule', type: 'bytes1' },
                                        { name: 'feeModule', type: 'bytes1' },
                                        { name: 'executionModuleInputHash', type: 'bytes32' },
                                        { name: 'feeModuleInputHash', type: 'bytes32' },
                                        { name: 'applicationInputHash', type: 'bytes32' }
                                    ],
                                },
                                primaryType: 'JobSpecification',
                                message: {
                                    nonce: jobSpecification.nonce,
                                    deadline: jobSpecification.deadline,
                                    application: jobSpecification.application,
                                    executionWindow: jobSpecification.executionWindow,
                                    executionModule: jobSpecification.executionModule,
                                    feeModule: jobSpecification.feeModule,
                                    executionModuleInputHash: (0, viem_1.keccak256)(jobSpecification.executionModuleInput),
                                    feeModuleInputHash: (0, viem_1.keccak256)(jobSpecification.feeModuleInput),
                                    applicationInputHash: (0, viem_1.keccak256)(jobSpecification.applicationInput)
                                },
                            })];
                    case 1:
                        signature = _a.sent();
                        return [2 /*return*/, signature];
                }
            });
        });
    };
    EESSDK.prototype.signFeeModuleInput = function (feeModuleInput) {
        return __awaiter(this, void 0, void 0, function () {
            var signature;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkProtocolConfig();
                        if (!this.walletClient)
                            throw new Error('Wallet client not provided.');
                        return [4 /*yield*/, this.walletClient.signTypedData({
                                account: this.walletClient.account,
                                domain: {
                                    name: "JobRegistry",
                                    chainId: this.walletClient.chain.id,
                                    verifyingContract: this.protocolConfig.jobRegistry,
                                },
                                types: {
                                    FeeModuleInput: [
                                        { name: 'nonce', type: 'uint256' },
                                        { name: 'deadline', type: 'uint256' },
                                        { name: 'index', type: 'uint256' },
                                        { name: 'feeModule', type: 'bytes1' },
                                        { name: 'feeModuleInputHash', type: 'bytes32' },
                                    ],
                                },
                                primaryType: 'FeeModuleInput',
                                message: {
                                    nonce: feeModuleInput.nonce,
                                    deadline: feeModuleInput.deadline,
                                    index: feeModuleInput.index,
                                    feeModule: feeModuleInput.feeModule,
                                    feeModuleInputHash: (0, viem_1.keccak256)(feeModuleInput.feeModuleInput)
                                },
                            })];
                    case 1:
                        signature = _a.sent();
                        return [2 /*return*/, signature];
                }
            });
        });
    };
    EESSDK.prototype.executeBatch = function (indices, gasLimits, feeRecipient, checkIn, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, transactionReceipt, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.checkProtocolConfig();
                        return [4 /*yield*/, this.executeTransaction({
                                address: this.protocolConfig.executionManager,
                                abi: executionManager_1.executionManagerAbi,
                                functionName: 'executeBatch',
                                args: [indices, gasLimits, feeRecipient, checkIn],
                            }, options)];
                    case 1:
                        _a = _b.sent(), transactionReceipt = _a.transactionReceipt, result = _a.result;
                        return [2 /*return*/, { transactionReceipt: transactionReceipt, numberOfExecutions: result }];
                }
            });
        });
    };
    EESSDK.prototype.revokeSponsorship = function (index, options) {
        return __awaiter(this, void 0, void 0, function () {
            var transactionReceipt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkProtocolConfig();
                        return [4 /*yield*/, this.executeTransaction({
                                address: this.protocolConfig.jobRegistry,
                                abi: jobRegistry_1.jobRegistryAbi,
                                functionName: 'revokeSponsorship',
                                args: [index],
                            }, options)];
                    case 1:
                        transactionReceipt = (_a.sent()).transactionReceipt;
                        return [2 /*return*/, transactionReceipt];
                }
            });
        });
    };
    EESSDK.prototype.approveFeeToken = function (token, amount, options) {
        return __awaiter(this, void 0, void 0, function () {
            var transactionReceipt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkProtocolConfig();
                        return [4 /*yield*/, this.executeTransaction({
                                address: token,
                                abi: viem_1.erc20Abi,
                                functionName: 'approve',
                                args: [this.protocolConfig.jobRegistry, amount],
                            }, options)];
                    case 1:
                        transactionReceipt = (_a.sent()).transactionReceipt;
                        return [2 /*return*/, transactionReceipt];
                }
            });
        });
    };
    EESSDK.prototype.approveStakingToken = function (amount, options) {
        return __awaiter(this, void 0, void 0, function () {
            var transactionReceipt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkProtocolConfig();
                        return [4 /*yield*/, this.executeTransaction({
                                address: this.protocolConfig.stakingToken,
                                abi: viem_1.erc20Abi,
                                functionName: 'approve',
                                args: [this.protocolConfig.executionManager, amount],
                            }, options)];
                    case 1:
                        transactionReceipt = (_a.sent()).transactionReceipt;
                        return [2 /*return*/, transactionReceipt];
                }
            });
        });
    };
    EESSDK.prototype.calculateCurrentFee = function (job) {
        return __awaiter(this, void 0, void 0, function () {
            var currentTime, timeSinceNextExecution, feeDiff, fee;
            return __generator(this, function (_a) {
                currentTime = BigInt(Math.floor(Date.now() / 1000));
                if (currentTime >= job.nextExecution) {
                    timeSinceNextExecution = currentTime - job.nextExecution;
                    if (timeSinceNextExecution < job.executionWindow) {
                        if (job.feeModuleCode === "0x00") {
                            feeDiff = job.feeModule.maxExecutionFee - job.feeModule.minExecutionFee;
                            fee = ((feeDiff * timeSinceNextExecution) / (BigInt(job.executionWindow) - 1n)) + job.feeModule.minExecutionFee;
                            return [2 /*return*/, { fee: fee, token: job.feeModule.executionFeeToken }];
                        }
                    }
                }
                return [2 /*return*/, null];
            });
        });
    };
    EESSDK.prototype.initiateEpoch = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var transactionReceipt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkProtocolConfig();
                        return [4 /*yield*/, this.executeTransaction({
                                address: this.protocolConfig.executionManager,
                                abi: executionManager_1.executionManagerAbi,
                                functionName: 'initiateEpoch',
                            }, options)];
                    case 1:
                        transactionReceipt = (_a.sent()).transactionReceipt;
                        return [2 /*return*/, transactionReceipt];
                }
            });
        });
    };
    EESSDK.prototype.stake = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var transactionReceipt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkProtocolConfig();
                        return [4 /*yield*/, this.executeTransaction({
                                address: this.protocolConfig.executionManager,
                                abi: executionManager_1.executionManagerAbi,
                                functionName: 'stake',
                            }, options)];
                    case 1:
                        transactionReceipt = (_a.sent()).transactionReceipt;
                        return [2 /*return*/, transactionReceipt];
                }
            });
        });
    };
    EESSDK.prototype.unstake = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var transactionReceipt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkProtocolConfig();
                        return [4 /*yield*/, this.executeTransaction({
                                address: this.protocolConfig.executionManager,
                                abi: executionManager_1.executionManagerAbi,
                                functionName: 'unstake',
                            }, options)];
                    case 1:
                        transactionReceipt = (_a.sent()).transactionReceipt;
                        return [2 /*return*/, transactionReceipt];
                }
            });
        });
    };
    EESSDK.prototype.topup = function (amount, options) {
        return __awaiter(this, void 0, void 0, function () {
            var transactionReceipt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkProtocolConfig();
                        return [4 /*yield*/, this.executeTransaction({
                                address: this.protocolConfig.executionManager,
                                abi: executionManager_1.executionManagerAbi,
                                functionName: 'topup',
                                args: [amount],
                            }, options)];
                    case 1:
                        transactionReceipt = (_a.sent()).transactionReceipt;
                        return [2 /*return*/, transactionReceipt];
                }
            });
        });
    };
    EESSDK.prototype.commit = function (epoch, options) {
        return __awaiter(this, void 0, void 0, function () {
            var msgHash, signature, transactionReceipt;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.checkProtocolConfig();
                        msgHash = (0, viem_1.keccak256)((0, viem_1.encodePacked)(['uint192', 'uint256'], [epoch, BigInt((_a = this.publicClient.chain) === null || _a === void 0 ? void 0 : _a.id)]));
                        return [4 /*yield*/, this.walletClient.signMessage({
                                account: this.walletClient.account,
                                message: { raw: msgHash },
                            })];
                    case 1:
                        signature = _b.sent();
                        return [4 /*yield*/, this.executeTransaction({
                                address: this.protocolConfig.executionManager,
                                abi: executionManager_1.executionManagerAbi,
                                functionName: 'commit',
                                args: [(0, viem_1.keccak256)((0, viem_1.encodePacked)(['bytes'], [signature]))],
                            }, options)];
                    case 2:
                        transactionReceipt = (_b.sent()).transactionReceipt;
                        return [2 /*return*/, {
                                transactionReceipt: transactionReceipt,
                                secret: signature
                            }];
                }
            });
        });
    };
    EESSDK.prototype.reveal = function (secret, options) {
        return __awaiter(this, void 0, void 0, function () {
            var transactionReceipt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkProtocolConfig();
                        return [4 /*yield*/, this.executeTransaction({
                                address: this.protocolConfig.executionManager,
                                abi: executionManager_1.executionManagerAbi,
                                functionName: 'reveal',
                                args: [secret],
                            }, options)];
                    case 1:
                        transactionReceipt = (_a.sent()).transactionReceipt;
                        return [2 /*return*/, transactionReceipt];
                }
            });
        });
    };
    EESSDK.prototype.slashInactiveExecutor = function (executor, round, options) {
        return __awaiter(this, void 0, void 0, function () {
            var transactionReceipt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkProtocolConfig();
                        return [4 /*yield*/, this.executeTransaction({
                                address: this.protocolConfig.executionManager,
                                abi: executionManager_1.executionManagerAbi,
                                functionName: 'slashInactiveExecutor',
                                args: [executor, round],
                            }, options)];
                    case 1:
                        transactionReceipt = (_a.sent()).transactionReceipt;
                        return [2 /*return*/, transactionReceipt];
                }
            });
        });
    };
    EESSDK.prototype.slashCommitter = function (executor, options) {
        return __awaiter(this, void 0, void 0, function () {
            var transactionReceipt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkProtocolConfig();
                        return [4 /*yield*/, this.executeTransaction({
                                address: this.protocolConfig.executionManager,
                                abi: executionManager_1.executionManagerAbi,
                                functionName: 'slashCommitter',
                                args: [executor],
                            }, options)];
                    case 1:
                        transactionReceipt = (_a.sent()).transactionReceipt;
                        return [2 /*return*/, transactionReceipt];
                }
            });
        });
    };
    EESSDK.prototype.getEpoch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var epoch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkProtocolConfig();
                        return [4 /*yield*/, this.publicClient.readContract({
                                address: this.protocolConfig.executionManager,
                                abi: executionManager_1.executionManagerAbi,
                                functionName: 'epoch',
                            })];
                    case 1:
                        epoch = _a.sent();
                        return [2 /*return*/, epoch];
                }
            });
        });
    };
    EESSDK.prototype.formatJobData = function (index, jobData) {
        var executionModule;
        var nextExecution;
        var feeModule;
        if (jobData.executionModule === "0x00") {
            // RegularTimeInterval
            var executionModuleData = (0, viem_1.decodeAbiParameters)([{ name: 'lastExecution', type: 'uint40' }, { name: 'cooldown', type: 'uint32' }], jobData.executionModuleData);
            executionModule = {
                lastExecution: executionModuleData[0],
                cooldown: executionModuleData[1],
            };
            nextExecution = executionModule.lastExecution + executionModule.cooldown;
        }
        if (jobData.feeModule === "0x00") {
            // LinearAuction
            var feeModuleData = (0, viem_1.decodeAbiParameters)([{ name: 'executionFeeToken', type: 'address' }, { name: 'minExecutionFee', type: 'uint256' }, { name: 'maxExecutionFee', type: 'uint256' }], jobData.feeModuleData);
            feeModule = {
                executionFeeToken: feeModuleData[0],
                minExecutionFee: feeModuleData[1],
                maxExecutionFee: feeModuleData[2]
            };
        }
        var job = {
            index: index,
            owner: jobData.owner,
            active: jobData.active,
            ignoreAppRevert: jobData.ignoreAppRevert,
            inactiveGracePeriod: jobData.inactiveGracePeriod,
            sponsor: jobData.sponsor,
            application: jobData.application,
            executionWindow: jobData.executionWindow,
            executionCounter: jobData.executionCounter,
            maxExecutions: jobData.maxExecutions,
            executionModuleCode: jobData.executionModule,
            feeModuleCode: jobData.feeModule,
            executionModule: executionModule,
            feeModule: feeModule,
            jobIsExpired: jobData.jobIsExpired,
            jobInExecutionWindow: jobData.jobInExecutionWindow,
            nextExecution: nextExecution
        };
        return job;
    };
    return EESSDK;
}());
exports.EESSDK = EESSDK;
