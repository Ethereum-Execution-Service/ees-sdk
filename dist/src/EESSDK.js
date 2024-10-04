"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EESSDK = void 0;
const viem_1 = require("viem");
const executionManager_1 = require("./abis/executionManager");
const jobRegistry_1 = require("./abis/jobRegistry");
const querier_1 = require("./abis/querier");
const configProvider_1 = require("./abis/configProvider");
const chainlinkOracle_1 = require("./abis/chainlinkOracle");
class EESSDK {
    constructor(publicClient, walletClient, simulateBeforeWrite = true) {
        this.publicClient = publicClient;
        this.walletClient = walletClient;
    }
    static async init(configProviderAddress, publicClient, walletClient) {
        if (walletClient && walletClient.chain?.id !== publicClient.chain?.id)
            throw new Error('Chain ID mismatch between public client and wallet client.');
        const instance = new EESSDK(publicClient, walletClient);
        await instance.fetchAndSetConfig(configProviderAddress);
        return instance;
    }
    async fetchAndSetConfig(configProviderAddress) {
        const config = await this.publicClient.readContract({
            address: configProviderAddress,
            abi: configProvider_1.configProviderAbi,
            functionName: 'getConfig',
        });
        if (!config)
            throw new Error('Failed to fetch protocol config.');
        const decodedAddresses = (0, viem_1.decodeAbiParameters)([
            { name: 'jobRegistry', type: 'address' },
            { name: 'executionManager', type: 'address' },
            { name: 'querier', type: 'address' }
        ], config[0]);
        const decodedJobRegistryConfig = (0, viem_1.decodeAbiParameters)([
            { name: 'executionGasOverhead', type: 'uint256' },
            { name: 'executionModulesLength', type: 'uint256' },
            { name: 'feeModulesLength', type: 'uint256' }
        ], config[1]);
        const decodedExecutionManagerConfig = (0, viem_1.decodeAbiParameters)([
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
    }
    async getAllowance(token, allower, spender) {
        this.checkProtocolConfig();
        const allowance = await this.publicClient.readContract({
            address: token,
            abi: viem_1.erc20Abi,
            functionName: 'allowance',
            args: [allower, spender]
        });
        return allowance;
    }
    async getBalance(token, account) {
        this.checkProtocolConfig();
        const balance = await this.publicClient.readContract({
            address: token,
            abi: viem_1.erc20Abi,
            functionName: 'balanceOf',
            args: [account]
        });
        return balance;
    }
    getProtocolConfig() {
        this.checkProtocolConfig();
        return this.protocolConfig;
    }
    checkProtocolConfig() {
        if (!this.protocolConfig) {
            throw new Error('Protocol config not initialized. Make sure to call init() first.');
        }
    }
    async getTokenPrice(oracleAddress, token, auxData) {
        this.checkProtocolConfig();
        const data = await this.publicClient.readContract({
            address: oracleAddress,
            abi: chainlinkOracle_1.chainlinkOracleAbi,
            functionName: 'getPrice',
            args: [token, auxData]
        });
        return data;
    }
    async getJobsArrayLength() {
        this.checkProtocolConfig();
        const data = await this.publicClient.readContract({
            address: this.protocolConfig.jobRegistry,
            abi: jobRegistry_1.jobRegistryAbi,
            functionName: 'getJobsArrayLength'
        });
        return data;
    }
    async getJobs(indices) {
        this.checkProtocolConfig();
        const data = await this.publicClient.readContract({
            address: this.protocolConfig.querier,
            abi: querier_1.querierAbi,
            functionName: 'getJobs',
            args: [indices]
        });
        const jobs = [];
        for (let i = 0; i < data.length; i++) {
            const job = this.formatJobData(indices[i], data[i]);
            jobs.push(job);
        }
        return jobs;
    }
    async executeTransaction(contractCall, options) {
        if (!this.walletClient)
            throw new Error('Wallet client not provided.');
        if (options?.simulate !== false) {
            // Simulation logic
            const { request, result } = await this.publicClient.simulateContract({
                ...contractCall,
                chain: this.walletClient.chain,
                account: this.walletClient.account,
                ...options
            });
            if (!request)
                throw new Error(`Failed to simulate ${contractCall.functionName}.`);
            // After successful simulation, proceed with the actual transaction
            const txHash = await this.walletClient.writeContract(request);
            const transactionReceipt = await this.publicClient.waitForTransactionReceipt({ hash: txHash });
            return { transactionReceipt, result };
        }
        else {
            // Direct write logic without simulation
            const hash = await this.walletClient.writeContract({
                ...contractCall,
                chain: this.walletClient.chain,
                account: this.walletClient.account,
                ...options
            });
            const transactionReceipt = await this.publicClient.waitForTransactionReceipt({ hash });
            return { transactionReceipt, result: hash };
        }
    }
    async createJob(jobSpecification, sponsor, sponsorSignature, hasSponsorship, index, options) {
        this.checkProtocolConfig();
        const { transactionReceipt } = await this.executeTransaction({
            address: this.protocolConfig.jobRegistry,
            abi: jobRegistry_1.jobRegistryAbi,
            functionName: 'createJob',
            args: [jobSpecification, sponsor, sponsorSignature, hasSponsorship, index],
        }, options);
        return transactionReceipt;
    }
    async deleteJob(index, options) {
        this.checkProtocolConfig();
        const { transactionReceipt } = await this.executeTransaction({
            address: this.protocolConfig.jobRegistry,
            abi: jobRegistry_1.jobRegistryAbi,
            functionName: 'deleteJob',
            args: [index],
        }, options);
        return transactionReceipt;
    }
    watchCreatedJobs(application, onCreatedJob) {
        this.checkProtocolConfig();
        const unwatch = this.publicClient.watchEvent({
            address: this.protocolConfig.jobRegistry,
            event: (0, viem_1.parseAbiItem)('event JobCreated(uint256 indexed index, address indexed owner, address indexed application)'),
            args: {
                application: application
            },
            onLogs: logs => {
                for (const log of logs) {
                    onCreatedJob(log.args.index);
                }
            }
        });
        return unwatch;
    }
    watchExecutedJobs(application, onExecutedJob) {
        this.checkProtocolConfig();
        const unwatch = this.publicClient.watchEvent({
            address: this.protocolConfig.jobRegistry,
            event: (0, viem_1.parseAbiItem)('event JobExecuted(uint256 indexed index,address indexed owner,address indexed application,uint256 executionFee,address executionFeeToken)'),
            args: {
                application: application
            },
            onLogs: logs => {
                for (const log of logs) {
                    onExecutedJob(log.args.index);
                }
            }
        });
        return unwatch;
    }
    watchDeletedJobs(application, onDeletedJob) {
        this.checkProtocolConfig();
        const unwatch = this.publicClient.watchEvent({
            address: this.protocolConfig.jobRegistry,
            event: (0, viem_1.parseAbiItem)('event JobDeleted(uint256 indexed index, address indexed owner, address indexed application)'),
            args: {
                application: application
            },
            onLogs: logs => {
                for (const log of logs) {
                    onDeletedJob(log.args.index);
                }
            }
        });
        return unwatch;
    }
    async signJobSpecification(jobSpecification) {
        this.checkProtocolConfig();
        if (!this.walletClient)
            throw new Error('Wallet client not provided.');
        const signature = await this.walletClient.signTypedData({
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
        });
        return signature;
    }
    async signFeeModuleInput(feeModuleInput) {
        this.checkProtocolConfig();
        if (!this.walletClient)
            throw new Error('Wallet client not provided.');
        const signature = await this.walletClient.signTypedData({
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
        });
        return signature;
    }
    async getExecutorInfo(executors) {
        this.checkProtocolConfig();
        const data = await this.publicClient.readContract({
            address: this.protocolConfig.querier,
            abi: querier_1.querierAbi,
            functionName: 'getExecutors',
            args: [executors]
        });
        return data.map(obj => obj);
    }
    async getEpochInfo() {
        this.checkProtocolConfig();
        const data = await this.publicClient.readContract({
            address: this.protocolConfig.querier,
            abi: querier_1.querierAbi,
            functionName: 'getCurrentEpochInfo'
        });
        const epochStartTime = data[1] - BigInt(this.protocolConfig.epochDuration);
        const revealPhaseStartTime = epochStartTime + BigInt(this.protocolConfig.commitPhaseDuration);
        const roundsStartTime = revealPhaseStartTime + BigInt(this.protocolConfig.revealPhaseDuration);
        const roundPeriods = [];
        const roundBufferPeriods = [];
        for (let i = 0; i < this.protocolConfig.roundsPerEpoch; i++) {
            const midTime = roundsStartTime + BigInt(this.protocolConfig.roundDuration) + BigInt(i) * (BigInt(this.protocolConfig.roundDuration) + BigInt(this.protocolConfig.roundBuffer));
            roundPeriods.push([midTime - BigInt(this.protocolConfig.roundDuration), midTime]);
            roundBufferPeriods.push([midTime, midTime + BigInt(this.protocolConfig.roundBuffer)]);
        }
        const epochInfo = {
            epoch: data[0],
            epochPeriod: [epochStartTime, data[1]],
            seed: data[2],
            numberOfActiveExecutors: data[3],
            commitPhasePeriod: [epochStartTime, revealPhaseStartTime],
            revealPhasePeriod: [revealPhaseStartTime, roundsStartTime],
            roundPeriods: roundPeriods,
            roundBufferPeriods: roundBufferPeriods,
            slashingPhasePeriod: [data[1] - BigInt(this.protocolConfig.slashingDuration), data[1]],
            selectedExecutors: data[4]
        };
        return epochInfo;
    }
    async getCommitData(executors) {
        this.checkProtocolConfig();
        const data = await this.publicClient.readContract({
            address: this.protocolConfig.querier,
            abi: querier_1.querierAbi,
            functionName: 'getCommitData',
            args: [executors]
        });
        return executors.map((executor, index) => ({
            executor,
            ...data[index]
        }));
    }
    async executeBatch(indices, gasLimits, feeRecipient, checkIn, options) {
        this.checkProtocolConfig();
        const { transactionReceipt, result } = await this.executeTransaction({
            address: this.protocolConfig.executionManager,
            abi: executionManager_1.executionManagerAbi,
            functionName: 'executeBatch',
            args: [indices, gasLimits, feeRecipient, checkIn],
        }, options);
        return { transactionReceipt, failedJobIndices: result };
    }
    async estimateBatchExecutionGas(indices, gasLimits, feeRecipient, checkIn) {
        this.checkProtocolConfig();
        const gas = await this.publicClient.estimateContractGas({
            address: this.protocolConfig.executionManager,
            abi: executionManager_1.executionManagerAbi,
            functionName: 'executeBatch',
            args: [indices, gasLimits, feeRecipient, checkIn],
        });
        return gas;
    }
    async estimateExecutionGas(index, feeRecipient) {
        this.checkProtocolConfig();
        const gas = await this.publicClient.estimateContractGas({
            address: this.protocolConfig.jobRegistry,
            abi: jobRegistry_1.jobRegistryAbi,
            functionName: 'execute',
            args: [index, feeRecipient],
            account: this.protocolConfig.executionManager
        });
        return gas;
    }
    async revokeSponsorship(index, options) {
        this.checkProtocolConfig();
        const { transactionReceipt } = await this.executeTransaction({
            address: this.protocolConfig.jobRegistry,
            abi: jobRegistry_1.jobRegistryAbi,
            functionName: 'revokeSponsorship',
            args: [index],
        }, options);
        return transactionReceipt;
    }
    async approveFeeToken(token, amount, options) {
        this.checkProtocolConfig();
        const { transactionReceipt } = await this.executeTransaction({
            address: token,
            abi: viem_1.erc20Abi,
            functionName: 'approve',
            args: [this.protocolConfig.jobRegistry, amount],
        }, options);
        return transactionReceipt;
    }
    async approveStakingToken(amount, options) {
        this.checkProtocolConfig();
        const { transactionReceipt } = await this.executeTransaction({
            address: this.protocolConfig.stakingToken,
            abi: viem_1.erc20Abi,
            functionName: 'approve',
            args: [this.protocolConfig.executionManager, amount],
        }, options);
        return transactionReceipt;
    }
    async calculateCurrentFee(job) {
        const currentTime = BigInt(Math.floor(Date.now() / 1000));
        if (currentTime >= job.nextExecution) {
            const timeSinceNextExecution = currentTime - job.nextExecution;
            if (timeSinceNextExecution < job.executionWindow) {
                if (job.feeModuleCode === "0x00") {
                    const feeDiff = job.feeModule.maxExecutionFee - job.feeModule.minExecutionFee;
                    const fee = ((feeDiff * timeSinceNextExecution) / (BigInt(job.executionWindow) - 1n)) + job.feeModule.minExecutionFee;
                    return { fee: fee, token: job.feeModule.executionFeeToken };
                }
            }
        }
        return null;
    }
    async initiateEpoch(options) {
        this.checkProtocolConfig();
        const { transactionReceipt } = await this.executeTransaction({
            address: this.protocolConfig.executionManager,
            abi: executionManager_1.executionManagerAbi,
            functionName: 'initiateEpoch',
        }, options);
        return transactionReceipt;
    }
    async stake(options) {
        this.checkProtocolConfig();
        const { transactionReceipt } = await this.executeTransaction({
            address: this.protocolConfig.executionManager,
            abi: executionManager_1.executionManagerAbi,
            functionName: 'stake',
        }, options);
        return transactionReceipt;
    }
    async unstake(options) {
        this.checkProtocolConfig();
        const { transactionReceipt } = await this.executeTransaction({
            address: this.protocolConfig.executionManager,
            abi: executionManager_1.executionManagerAbi,
            functionName: 'unstake',
        }, options);
        return transactionReceipt;
    }
    async topup(amount, options) {
        this.checkProtocolConfig();
        const { transactionReceipt } = await this.executeTransaction({
            address: this.protocolConfig.executionManager,
            abi: executionManager_1.executionManagerAbi,
            functionName: 'topup',
            args: [amount],
        }, options);
        return transactionReceipt;
    }
    async commit(epoch, options) {
        this.checkProtocolConfig();
        const msgHash = (0, viem_1.keccak256)((0, viem_1.encodePacked)(['uint192', 'uint256'], [epoch, BigInt(this.publicClient.chain?.id)]));
        const signature = await this.walletClient.signMessage({
            account: this.walletClient.account,
            message: { raw: msgHash },
        });
        const { transactionReceipt } = await this.executeTransaction({
            address: this.protocolConfig.executionManager,
            abi: executionManager_1.executionManagerAbi,
            functionName: 'commit',
            args: [(0, viem_1.keccak256)((0, viem_1.encodePacked)(['bytes'], [signature]))],
        }, options);
        return {
            transactionReceipt,
            secret: signature
        };
    }
    async reveal(secret, options) {
        this.checkProtocolConfig();
        const { transactionReceipt } = await this.executeTransaction({
            address: this.protocolConfig.executionManager,
            abi: executionManager_1.executionManagerAbi,
            functionName: 'reveal',
            args: [secret],
        }, options);
        return transactionReceipt;
    }
    async slashInactiveExecutor(executor, round, options) {
        this.checkProtocolConfig();
        const { transactionReceipt } = await this.executeTransaction({
            address: this.protocolConfig.executionManager,
            abi: executionManager_1.executionManagerAbi,
            functionName: 'slashInactiveExecutor',
            args: [executor, round],
        }, options);
        return transactionReceipt;
    }
    async slashCommitter(executor, options) {
        this.checkProtocolConfig();
        const { transactionReceipt } = await this.executeTransaction({
            address: this.protocolConfig.executionManager,
            abi: executionManager_1.executionManagerAbi,
            functionName: 'slashCommitter',
            args: [executor],
        }, options);
        return transactionReceipt;
    }
    async getEpoch() {
        this.checkProtocolConfig();
        const epoch = await this.publicClient.readContract({
            address: this.protocolConfig.executionManager,
            abi: executionManager_1.executionManagerAbi,
            functionName: 'epoch',
        });
        return epoch;
    }
    jobIsExpired(job) {
        const currentTime = BigInt(Math.floor(Date.now() / 1000));
        return currentTime >= job.nextExecution + BigInt(job.executionWindow);
    }
    jobInExecutionWindow(job) {
        const currentTime = BigInt(Math.floor(Date.now() / 1000));
        return currentTime >= job.nextExecution && currentTime < job.nextExecution + BigInt(job.executionWindow);
    }
    jobIsDeleted(job) {
        return job.owner === '0x0000000000000000000000000000000000000000';
    }
    formatJobData(index, jobData) {
        let executionModule;
        let nextExecution = 0n;
        let feeModule;
        if (jobData.executionModule === "0x00") {
            // RegularTimeInterval
            const executionModuleData = (0, viem_1.decodeAbiParameters)([{ name: 'lastExecution', type: 'uint40' }, { name: 'cooldown', type: 'uint32' }], jobData.executionModuleData);
            executionModule = {
                lastExecution: executionModuleData[0],
                cooldown: executionModuleData[1],
            };
            nextExecution = BigInt(executionModule.lastExecution + executionModule.cooldown);
        }
        if (jobData.feeModule === "0x00") {
            // LinearAuction
            const feeModuleData = (0, viem_1.decodeAbiParameters)([{ name: 'executionFeeToken', type: 'address' }, { name: 'minExecutionFee', type: 'uint256' }, { name: 'maxExecutionFee', type: 'uint256' }], jobData.feeModuleData);
            feeModule = {
                executionFeeToken: feeModuleData[0],
                minExecutionFee: feeModuleData[1],
                maxExecutionFee: feeModuleData[2]
            };
        }
        const job = {
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
            nextExecution: nextExecution
        };
        return job;
    }
}
exports.EESSDK = EESSDK;
