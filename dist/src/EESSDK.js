"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EESSDK = void 0;
const viem_1 = require("viem");
const coordinator_1 = require("./abis/coordinator");
const jobRegistry_1 = require("./abis/jobRegistry");
const querier_1 = require("./abis/querier");
const configProvider_1 = require("./abis/configProvider");
const chainlinkOracle_1 = require("./abis/chainlinkOracle");
const batchSlasher_1 = require("./abis/batchSlasher");
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
            { name: 'coordinator', type: 'address' },
            { name: 'querier', type: 'address' },
            { name: 'batchSlasher', type: 'address' }
        ], config[0]);
        const decodedJobRegistryConfig = (0, viem_1.decodeAbiParameters)([
            { name: 'executionGasOverhead', type: 'uint256' },
            { name: 'executionModulesLength', type: 'uint256' },
            { name: 'feeModulesLength', type: 'uint256' }
        ], config[1]);
        const decodedcoordinatorConfig = (0, viem_1.decodeAbiParameters)([
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
            coordinator: decodedAddresses[1],
            querier: decodedAddresses[2],
            batchSlasher: decodedAddresses[3],
            executionGasOverhead: decodedJobRegistryConfig[0],
            executionModulesLength: decodedJobRegistryConfig[1],
            feeModulesLength: decodedJobRegistryConfig[2],
            stakingToken: decodedcoordinatorConfig[0],
            stakingAmount: decodedcoordinatorConfig[1],
            minimumStakingPeriod: decodedcoordinatorConfig[2],
            stakingBalanceThreshold: decodedcoordinatorConfig[3],
            inactiveSlashingAmount: decodedcoordinatorConfig[4],
            commitSlashingAmount: decodedcoordinatorConfig[5],
            roundsPerEpoch: decodedcoordinatorConfig[6],
            executorTax: decodedcoordinatorConfig[7],
            protocolTax: decodedcoordinatorConfig[8],
            roundDuration: decodedcoordinatorConfig[9],
            roundBuffer: decodedcoordinatorConfig[10],
            slashingDuration: decodedcoordinatorConfig[11],
            commitPhaseDuration: decodedcoordinatorConfig[12],
            revealPhaseDuration: decodedcoordinatorConfig[13],
            selectionPhaseDuration: decodedcoordinatorConfig[12] + decodedcoordinatorConfig[13],
            totalRoundDuration: decodedcoordinatorConfig[9] + decodedcoordinatorConfig[10],
            epochDuration: (decodedcoordinatorConfig[12] + decodedcoordinatorConfig[13]) + (decodedcoordinatorConfig[9] + decodedcoordinatorConfig[10]) * decodedcoordinatorConfig[6] + decodedcoordinatorConfig[11]
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
        let txHash;
        if (options?.simulate !== false) {
            // Simulation logic
            const { request } = await this.publicClient.simulateContract({
                ...contractCall,
                chain: this.walletClient.chain,
                account: this.walletClient.account,
                ...options
            });
            if (!request)
                throw new Error(`Failed to simulate ${contractCall.functionName}.`);
            // After successful simulation, proceed with the actual transaction
            txHash = await this.walletClient.writeContract(request);
        }
        else {
            // Direct write logic without simulation
            txHash = await this.walletClient.writeContract({
                ...contractCall,
                chain: this.walletClient.chain,
                account: this.walletClient.account,
                ...options
            });
        }
        if (options?.waitForReceipt !== false) {
            const transactionReceipt = await this.publicClient.waitForTransactionReceipt({ hash: txHash });
            return { transactionHash: txHash, transactionReceipt };
        }
        else {
            return { transactionHash: txHash };
        }
    }
    async createJob(jobSpecification, sponsor, sponsorSignature, hasSponsorship, index, options) {
        this.checkProtocolConfig();
        const result = await this.executeTransaction({
            address: this.protocolConfig.jobRegistry,
            abi: jobRegistry_1.jobRegistryAbi,
            functionName: 'createJob',
            args: [jobSpecification, sponsor, sponsorSignature, hasSponsorship, index],
        }, options);
        let jobIndex;
        if (result.transactionReceipt) {
            // Find the JobCreated event and extract the index
            const jobCreatedEvent = result.transactionReceipt.logs
                .find(log => log.address.toLowerCase() === this.protocolConfig.jobRegistry.toLowerCase() &&
                log.topics[0] === (0, viem_1.keccak256)((0, viem_1.toBytes)('JobCreated(uint256,address,address,bool)')));
            if (jobCreatedEvent && jobCreatedEvent.topics[1]) {
                jobIndex = BigInt(jobCreatedEvent.topics[1]);
            }
        }
        return {
            transactionHash: result.transactionHash,
            transactionReceipt: result.transactionReceipt,
            jobIndex
        };
    }
    async deleteJob(index, options) {
        this.checkProtocolConfig();
        const result = await this.executeTransaction({
            address: this.protocolConfig.jobRegistry,
            abi: jobRegistry_1.jobRegistryAbi,
            functionName: 'deleteJob',
            args: [index],
        }, options);
        return { transactionHash: result.transactionHash, transactionReceipt: result.transactionReceipt };
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
                    { name: 'maxExecutions', type: 'uint48' },
                    { name: 'inactiveGracePeriod', type: 'uint40' },
                    { name: 'ignoreAppRevert', type: 'bool' },
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
                maxExecutions: jobSpecification.maxExecutions,
                inactiveGracePeriod: jobSpecification.inactiveGracePeriod,
                ignoreAppRevert: jobSpecification.ignoreAppRevert,
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
    async executeBatch(indices, gasLimits, feeRecipient, options) {
        this.checkProtocolConfig();
        const result = await this.executeTransaction({
            address: this.protocolConfig.coordinator,
            abi: coordinator_1.coordinatorAbi,
            functionName: 'executeBatch',
            args: [indices, gasLimits, feeRecipient],
        }, options);
        let failedIndices;
        if (result.transactionReceipt) {
            // Find the BatchExecution event and extract the failedIndices
            const batchExecutionEvent = result.transactionReceipt.logs
                .find(log => log.address.toLowerCase() === this.protocolConfig.coordinator.toLowerCase() &&
                log.topics[0] === (0, viem_1.keccak256)((0, viem_1.toBytes)('BatchExecution(uint256[])')));
            if (batchExecutionEvent && batchExecutionEvent.data) {
                failedIndices = [...(0, viem_1.decodeAbiParameters)([{ type: 'uint256[]' }], batchExecutionEvent.data)[0]];
            }
        }
        return {
            transactionHash: result.transactionHash,
            transactionReceipt: result.transactionReceipt,
            failedIndices
        };
    }
    async estimateBatchExecutionGas(indices, gasLimits, feeRecipient) {
        this.checkProtocolConfig();
        const gas = await this.publicClient.estimateContractGas({
            address: this.protocolConfig.coordinator,
            abi: coordinator_1.coordinatorAbi,
            functionName: 'executeBatch',
            args: [indices, gasLimits, feeRecipient],
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
            account: this.protocolConfig.coordinator
        });
        return gas;
    }
    async revokeSponsorship(index, options) {
        this.checkProtocolConfig();
        const result = await this.executeTransaction({
            address: this.protocolConfig.jobRegistry,
            abi: jobRegistry_1.jobRegistryAbi,
            functionName: 'revokeSponsorship',
            args: [index],
        }, options);
        return { transactionHash: result.transactionHash, transactionReceipt: result.transactionReceipt };
    }
    async approveFeeToken(token, amount, options) {
        this.checkProtocolConfig();
        const result = await this.executeTransaction({
            address: token,
            abi: viem_1.erc20Abi,
            functionName: 'approve',
            args: [this.protocolConfig.jobRegistry, amount],
        }, options);
        return { transactionHash: result.transactionHash, transactionReceipt: result.transactionReceipt };
    }
    async approveAppToken(application, token, amount, options) {
        this.checkProtocolConfig();
        const result = await this.executeTransaction({
            address: token,
            abi: viem_1.erc20Abi,
            functionName: 'approve',
            args: [application, amount],
        }, options);
        return { transactionHash: result.transactionHash, transactionReceipt: result.transactionReceipt };
    }
    async approveStakingToken(amount, options) {
        this.checkProtocolConfig();
        const result = await this.executeTransaction({
            address: this.protocolConfig.stakingToken,
            abi: viem_1.erc20Abi,
            functionName: 'approve',
            args: [this.protocolConfig.coordinator, amount],
        }, options);
        return { transactionHash: result.transactionHash, transactionReceipt: result.transactionReceipt };
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
        const result = await this.executeTransaction({
            address: this.protocolConfig.coordinator,
            abi: coordinator_1.coordinatorAbi,
            functionName: 'initiateEpoch',
        }, options);
        return { transactionHash: result.transactionHash, transactionReceipt: result.transactionReceipt };
    }
    async stake(options) {
        this.checkProtocolConfig();
        const result = await this.executeTransaction({
            address: this.protocolConfig.coordinator,
            abi: coordinator_1.coordinatorAbi,
            functionName: 'stake',
        }, options);
        return { transactionHash: result.transactionHash, transactionReceipt: result.transactionReceipt };
    }
    async unstake(options) {
        this.checkProtocolConfig();
        const result = await this.executeTransaction({
            address: this.protocolConfig.coordinator,
            abi: coordinator_1.coordinatorAbi,
            functionName: 'unstake',
        }, options);
        return { transactionHash: result.transactionHash, transactionReceipt: result.transactionReceipt };
    }
    async topup(amount, options) {
        this.checkProtocolConfig();
        const result = await this.executeTransaction({
            address: this.protocolConfig.coordinator,
            abi: coordinator_1.coordinatorAbi,
            functionName: 'topup',
            args: [amount],
        }, options);
        return { transactionHash: result.transactionHash, transactionReceipt: result.transactionReceipt };
    }
    async commit(epoch, options) {
        this.checkProtocolConfig();
        const msgHash = (0, viem_1.keccak256)((0, viem_1.encodePacked)(['uint192', 'uint256'], [epoch, BigInt(this.publicClient.chain?.id)]));
        const signature = await this.walletClient.signMessage({
            account: this.walletClient.account,
            message: { raw: msgHash },
        });
        const result = await this.executeTransaction({
            address: this.protocolConfig.coordinator,
            abi: coordinator_1.coordinatorAbi,
            functionName: 'commit',
            args: [(0, viem_1.keccak256)((0, viem_1.encodePacked)(['bytes'], [signature]))],
        }, options);
        return {
            transactionHash: result.transactionHash,
            transactionReceipt: result.transactionReceipt,
            secret: signature
        };
    }
    async reveal(secret, options) {
        this.checkProtocolConfig();
        const result = await this.executeTransaction({
            address: this.protocolConfig.coordinator,
            abi: coordinator_1.coordinatorAbi,
            functionName: 'reveal',
            args: [secret],
        }, options);
        return { transactionHash: result.transactionHash, transactionReceipt: result.transactionReceipt };
    }
    async slashInactiveExecutor(executor, recipient, round, options) {
        this.checkProtocolConfig();
        const result = await this.executeTransaction({
            address: this.protocolConfig.coordinator,
            abi: coordinator_1.coordinatorAbi,
            functionName: 'slashInactiveExecutor',
            args: [executor, round, recipient],
        }, options);
        return { transactionHash: result.transactionHash, transactionReceipt: result.transactionReceipt };
    }
    async slashCommitter(executor, recipient, options) {
        this.checkProtocolConfig();
        const result = await this.executeTransaction({
            address: this.protocolConfig.coordinator,
            abi: coordinator_1.coordinatorAbi,
            functionName: 'slashCommitter',
            args: [executor, recipient],
        }, options);
        return { transactionHash: result.transactionHash, transactionReceipt: result.transactionReceipt };
    }
    async batchSlash(committerExecutors, inactiveExecutors, rounds, recipient, options) {
        this.checkProtocolConfig();
        const result = await this.executeTransaction({
            address: this.protocolConfig.batchSlasher,
            abi: batchSlasher_1.batchSlasherAbi,
            functionName: 'batchSlash',
            args: [committerExecutors, inactiveExecutors, rounds, recipient],
        }, options);
        return { transactionHash: result.transactionHash, transactionReceipt: result.transactionReceipt };
    }
    async getEpoch() {
        this.checkProtocolConfig();
        const epoch = await this.publicClient.readContract({
            address: this.protocolConfig.coordinator,
            abi: coordinator_1.coordinatorAbi,
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
