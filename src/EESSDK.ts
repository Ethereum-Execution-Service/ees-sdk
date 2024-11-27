import { TransactionReceipt, PublicClient, WalletClient, parseAbiItem, decodeAbiParameters, WatchEventReturnType, Account, keccak256, encodePacked, erc20Abi, toBytes } from 'viem';
import { Job, JobSpecification, RegularTimeInterval, FeeModuleInput, FeeCalculationMinimum, LinearAuction, ContractCallOptions, ProtocolConfig, ContractFunctionConfig, ExecutorInfo, EpochInfo, CommitData } from './types';
import { coordinatorAbi } from './abis/coordinator';
import { jobRegistryAbi } from './abis/jobRegistry';
import { querierAbi } from './abis/querier';
import { configProviderAbi } from './abis/configProvider';
import { chainlinkOracleAbi } from './abis/chainlinkOracle';
import { batchSlasherAbi } from './abis/batchSlasher';

export class EESSDK {
  private publicClient: PublicClient;
  private walletClient: WalletClient | undefined;
  private protocolConfig: ProtocolConfig | undefined;

  private constructor(publicClient: PublicClient, walletClient?: WalletClient, simulateBeforeWrite: boolean = true) {
    this.publicClient = publicClient;
    this.walletClient = walletClient;
  }

  static async init(configProviderAddress: `0x${string}`, publicClient: PublicClient, walletClient?: WalletClient) : Promise<EESSDK> {
    if(walletClient && walletClient.chain?.id !== publicClient.chain?.id) throw new Error('Chain ID mismatch between public client and wallet client.');
    const instance = new EESSDK(publicClient, walletClient);
    await instance.fetchAndSetConfig(configProviderAddress);
    return instance;
  }

  private async fetchAndSetConfig(configProviderAddress: `0x${string}`) : Promise<void> {
    const config = await this.publicClient.readContract({
      address: configProviderAddress,
      abi: configProviderAbi,
      functionName: 'getConfig',
    });

    if(!config) throw new Error('Failed to fetch protocol config.');

    const decodedAddresses = decodeAbiParameters(
      [
        { name: 'jobRegistry', type: 'address' },
        { name: 'coordinator', type: 'address' },
        { name: 'querier', type: 'address' },
        { name: 'batchSlasher', type: 'address' }
      ],
      config[0]
    );
    const decodedJobRegistryConfig = decodeAbiParameters(
      [
        { name: 'executionGasOverhead', type: 'uint256' }
      ],
      config[1]
    );
    const decodedcoordinatorConfig = decodeAbiParameters(
      [
        { name: 'stakingToken', type: 'address' },
        { name: 'stakingAmountPerModule', type: 'uint256' },
        { name: 'minimumRegistrationPeriod', type: 'uint256' },
        { name: 'stakingBalanceThresholdPerModule', type: 'uint256' },
        { name: 'inactiveSlashingAmountPerModule', type: 'uint256' },
        { name: 'commitSlashingAmountPerModule', type: 'uint256' },
        { name: 'roundsPerEpoch', type: 'uint8' },
        { name: 'roundDuration', type: 'uint8' },
        { name: 'roundBuffer', type: 'uint8' },
        { name: 'slashingDuration', type: 'uint8' },
        { name: 'commitPhaseDuration', type: 'uint8' },
        { name: 'revealPhaseDuration', type: 'uint8' },
        { name: 'modulesLength', type: 'uint256' },
        { name: 'executionTax', type: 'uint256' },
        { name: 'zeroFeeExecutionTax', type: 'uint256' },
        { name: 'protocolPoolCutBps', type: 'uint256' }
      ],
      config[2]
    );

    this.protocolConfig = {
      jobRegistry: decodedAddresses[0],
      coordinator: decodedAddresses[1],
      querier: decodedAddresses[2],
      batchSlasher: decodedAddresses[3],
      executionGasOverhead: decodedJobRegistryConfig[0],
      stakingToken: decodedcoordinatorConfig[0],
      stakingAmountPerModule: decodedcoordinatorConfig[1],
      minimumRegistrationPeriod: decodedcoordinatorConfig[2],
      stakingBalanceThresholdPerModule: decodedcoordinatorConfig[3],
      inactiveSlashingAmountPerModule: decodedcoordinatorConfig[4],
      commitSlashingAmountPerModule: decodedcoordinatorConfig[5],
      roundsPerEpoch: decodedcoordinatorConfig[6],
      roundDuration: decodedcoordinatorConfig[7],
      roundBuffer: decodedcoordinatorConfig[8],
      slashingDuration: decodedcoordinatorConfig[9],
      commitPhaseDuration: decodedcoordinatorConfig[10],
      revealPhaseDuration: decodedcoordinatorConfig[11],
      selectionPhaseDuration: decodedcoordinatorConfig[10] + decodedcoordinatorConfig[11],
      totalRoundDuration: decodedcoordinatorConfig[7] + decodedcoordinatorConfig[8],
      epochDuration: (decodedcoordinatorConfig[10] + decodedcoordinatorConfig[11]) + (decodedcoordinatorConfig[7] + decodedcoordinatorConfig[8]) * decodedcoordinatorConfig[6] + decodedcoordinatorConfig[9],
      modulesLength: decodedcoordinatorConfig[12],
      executionTax: decodedcoordinatorConfig[13],
      zeroFeeExecutionTax: decodedcoordinatorConfig[14],
      protocolPoolCutBps: decodedcoordinatorConfig[15]
    }
  }

  async getAllowance(token: `0x${string}`, allower: `0x${string}`, spender: `0x${string}`) : Promise<bigint> {
    this.checkProtocolConfig();
    const allowance = await this.publicClient.readContract({
      address: token,
      abi: erc20Abi,
      functionName: 'allowance',
      args: [allower, spender]
    });
    return allowance;
  }

  async getBalance(token: `0x${string}`, account: `0x${string}`) : Promise<bigint> {
    this.checkProtocolConfig();
    const balance = await this.publicClient.readContract({
      address: token,
      abi: erc20Abi,
      functionName: 'balanceOf',
      args: [account]
    });
    return balance;
  }

  getProtocolConfig() : ProtocolConfig {
    this.checkProtocolConfig();
    return this.protocolConfig!;
  }

  private checkProtocolConfig() {
    if (!this.protocolConfig) {
      throw new Error('Protocol config not initialized. Make sure to call init() first.');
    }
  }

  async getTokenPrice(oracleAddress: `0x${string}`, token: `0x${string}`, auxData: `0x${string}`) : Promise<readonly[bigint, boolean]> {
    this.checkProtocolConfig();
    const data = await this.publicClient.readContract({
      address: oracleAddress,
      abi: chainlinkOracleAbi,
      functionName: 'getPrice',
      args: [token, auxData]
    });
    return data;
  }

  async getJobsArrayLength(): Promise<bigint> {
    this.checkProtocolConfig();
    const data = await this.publicClient.readContract({
      address: this.protocolConfig!.jobRegistry,
      abi: jobRegistryAbi,
      functionName: 'getJobsArrayLength'
    });
    return data;
  }

  async getJobs(indices: bigint[]): Promise<Job[]> {
    this.checkProtocolConfig();
    const data = await this.publicClient.readContract({
      address: this.protocolConfig!.querier,
      abi: querierAbi,
      functionName: 'getJobs',
      args: [indices]
    });
    const jobs: Job[] = [];
    for (let i = 0; i < data.length; i++) {
      const job: Job = this.formatJobData(indices[i], data[i]);
      jobs.push(job);
    }
    return jobs;
  }

  private async executeTransaction(contractCall: ContractFunctionConfig, options?: ContractCallOptions): Promise<{ transactionHash: `0x${string}`; transactionReceipt?: TransactionReceipt; }> {
    if (!this.walletClient) throw new Error('Wallet client not provided.');

    let txHash: `0x${string}`;

    if (options?.simulate !== false) {
      // Simulation logic
      const { request } = await this.publicClient.simulateContract({
        ...contractCall,
        chain: this.walletClient.chain,
        account: this.walletClient.account as `0x${string}` | Account,
        ...options
      });
      if (!request) throw new Error(`Failed to simulate ${contractCall.functionName}.`);
      
      // After successful simulation, proceed with the actual transaction
      txHash = await this.walletClient.writeContract(request);
    } else {
      // Direct write logic without simulation
      txHash = await this.walletClient.writeContract({
        ...contractCall,
        chain: this.walletClient.chain,
        account: this.walletClient.account as `0x${string}` | Account,
        ...options
      });
    }
    
    if (options?.waitForReceipt !== false) {
      const transactionReceipt = await this.publicClient.waitForTransactionReceipt({ hash: txHash });
      return { transactionHash: txHash, transactionReceipt };
    } else {
      return { transactionHash: txHash };
    }
  }

  async createJob(jobSpecification: JobSpecification, sponsor: `0x${string}`, sponsorSignature: `0x${string}`, ownerSignature: `0x${string}`, index: bigint, options?: ContractCallOptions): Promise<{ transactionHash: `0x${string}`; transactionReceipt?: TransactionReceipt; jobIndex?: bigint }> {
    this.checkProtocolConfig();
    const result = await this.executeTransaction({
      address: this.protocolConfig!.jobRegistry,
      abi: jobRegistryAbi,
      functionName: 'createJob',
      args: [jobSpecification as { owner: `0x${string}`; nonce: bigint; deadline: bigint; application: `0x${string}`; executionWindow: number; zeroFeeWindow: number; maxExecutions: number; reusableNonce: boolean; sponsorFallbackToOwner: boolean; sponsorCanUpdateFeeModule: boolean; inactiveGracePeriod: number; ignoreAppRevert: boolean; executionModule: `0x${string}`; feeModule: `0x${string}`; executionModuleInput: `0x${string}`; feeModuleInput: `0x${string}`; applicationInput: `0x${string}`}, sponsor, sponsorSignature, ownerSignature, index],
    }, options);

    let jobIndex: bigint | undefined;

    if (result.transactionReceipt) {
      // Find the JobCreated event and extract the index
      const jobCreatedEvent = result.transactionReceipt.logs
        .find(log => 
          log.address.toLowerCase() === this.protocolConfig!.jobRegistry.toLowerCase() &&
          log.topics[0] === keccak256(toBytes('JobCreated(uint256,address,address,bool)'))
        );

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

  async deleteJob(index: bigint, options?: ContractCallOptions) : Promise<{ transactionHash: `0x${string}`; transactionReceipt?: TransactionReceipt }> {
    this.checkProtocolConfig();
    const result = await this.executeTransaction({
      address: this.protocolConfig!.jobRegistry,
      abi: jobRegistryAbi,
      functionName: 'deleteJob',
      args: [index],
    }, options);
    return { transactionHash: result.transactionHash, transactionReceipt: result.transactionReceipt };
  }

  watchCreatedJobs(application: `0x${string}`, onCreatedJob: (index: bigint) => any) : WatchEventReturnType {
    this.checkProtocolConfig();
    const unwatch: WatchEventReturnType = this.publicClient.watchEvent({
      address: this.protocolConfig!.jobRegistry,
      event: parseAbiItem('event JobCreated(uint256 indexed index, address indexed owner, address indexed application)'),
      args: {
        application: application
      },
      onLogs: logs => {
        for (const log of logs) {
          onCreatedJob(log.args.index!);
        }
      }
    });
    return unwatch;
  }

  watchExecutedJobs(application: `0x${string}`, onExecutedJob: (index: bigint) => any) : WatchEventReturnType {
    this.checkProtocolConfig();
    const unwatch: WatchEventReturnType = this.publicClient.watchEvent({
      address: this.protocolConfig!.jobRegistry,
      event: parseAbiItem('event JobExecuted(uint256 indexed index,address indexed owner,address indexed application,uint256 executionFee,address executionFeeToken)'),
      args: {
        application: application
      },
      onLogs: logs => {
        for (const log of logs) {
          onExecutedJob(log.args.index!);
        }
      }
    });
    return unwatch;
  }

  watchDeletedJobs(application: `0x${string}`, onDeletedJob: (index: bigint) => any) : WatchEventReturnType {
    this.checkProtocolConfig();
    const unwatch: WatchEventReturnType = this.publicClient!.watchEvent({
      address: this.protocolConfig!.jobRegistry,
      event: parseAbiItem('event JobDeleted(uint256 indexed index, address indexed owner, address indexed application)'),
      args: {
        application: application
      },
      onLogs: logs => {
        for (const log of logs) {
          onDeletedJob(log.args.index!);
        }
      }
    });
    return unwatch;
  }

  async signJobSpecificationSponsor(jobSpecification: JobSpecification) : Promise<`0x${string}`> {
    this.checkProtocolConfig();
    if(!this.walletClient) throw new Error('Wallet client not provided.');
    const signature = await this.walletClient.signTypedData({
      account: this.walletClient.account as Account ,
      domain: {
        name: "JobRegistry",
        chainId: this.walletClient.chain!.id,
        verifyingContract: this.protocolConfig!.jobRegistry,
      },
      types: {
        JobSpecification: [
          { name: 'nonce', type: 'uint256' },
          { name: 'deadline', type: 'uint256' },
          { name: 'reusableNonce', type: 'bool' },
          { name: 'sponsorFallbackToOwner', type: 'bool' },
          { name: 'sponsorCanUpdateFeeModule', type: 'bool' },
          { name: 'application', type: 'address' },
          { name: 'executionWindow', type: 'uint24' },
          { name: 'zeroFeeWindow', type: 'uint24' },
          { name: 'maxExecutions', type: 'uint48' },
          { name: 'ignoreAppRevert', type: 'bool' },
          { name: 'executionModule', type: 'bytes1'},
          { name: 'feeModule', type: 'bytes1'},
          { name: 'executionModuleInputHash', type: 'bytes32' },
          { name: 'feeModuleInputHash', type: 'bytes32' },
          { name: 'applicationInputHash', type: 'bytes32' }
        ],
      },
      primaryType: 'JobSpecification',
      message: {
        nonce: jobSpecification.nonce,
        deadline: jobSpecification.deadline,
        reusableNonce: jobSpecification.reusableNonce,
        sponsorFallbackToOwner: jobSpecification.sponsorFallbackToOwner,
        sponsorCanUpdateFeeModule: jobSpecification.sponsorCanUpdateFeeModule,
        application: jobSpecification.application,
        executionWindow: jobSpecification.executionWindow,
        zeroFeeWindow: jobSpecification.zeroFeeWindow,
        maxExecutions: jobSpecification.maxExecutions,
        ignoreAppRevert: jobSpecification.ignoreAppRevert,
        executionModule: jobSpecification.executionModule,
        feeModule: jobSpecification.feeModule,
        executionModuleInputHash: keccak256(jobSpecification.executionModuleInput),
        feeModuleInputHash: keccak256(jobSpecification.feeModuleInput),
        applicationInputHash: keccak256(jobSpecification.applicationInput)
      },
    });
    return signature;
  }

  async signJobSpecificationOwner(jobSpecification: JobSpecification) : Promise<`0x${string}`> {
    this.checkProtocolConfig();
    if(!this.walletClient) throw new Error('Wallet client not provided.');
    const signature = await this.walletClient.signTypedData({
      account: this.walletClient.account as Account ,
      domain: {
        name: "JobRegistry",
        chainId: this.walletClient.chain!.id,
        verifyingContract: this.protocolConfig!.jobRegistry,
      },
      types: {
        JobSpecification: [
          { name: 'owner', type: 'address' },
          { name: 'nonce', type: 'uint256' },
          { name: 'deadline', type: 'uint256' },
          { name: 'reusableNonce', type: 'bool' },
          { name: 'sponsorFallbackToOwner', type: 'bool' },
          { name: 'sponsorCanUpdateFeeModule', type: 'bool' },
          { name: 'application', type: 'address' },
          { name: 'executionWindow', type: 'uint24' },
          { name: 'zeroFeeWindow', type: 'uint24' },
          { name: 'maxExecutions', type: 'uint48' },
          { name: 'ignoreAppRevert', type: 'bool' },
          { name: 'executionModule', type: 'bytes1'},
          { name: 'feeModule', type: 'bytes1'},
          { name: 'executionModuleInputHash', type: 'bytes32' },
          { name: 'feeModuleInputHash', type: 'bytes32' },
          { name: 'applicationInputHash', type: 'bytes32' }
        ],
      },
      primaryType: 'JobSpecification',
      message: {
        owner: jobSpecification.owner,
        nonce: jobSpecification.nonce,
        deadline: jobSpecification.deadline,
        reusableNonce: jobSpecification.reusableNonce,
        sponsorFallbackToOwner: jobSpecification.sponsorFallbackToOwner,
        sponsorCanUpdateFeeModule: jobSpecification.sponsorCanUpdateFeeModule,
        application: jobSpecification.application,
        executionWindow: jobSpecification.executionWindow,
        zeroFeeWindow: jobSpecification.zeroFeeWindow,
        maxExecutions: jobSpecification.maxExecutions,
        ignoreAppRevert: jobSpecification.ignoreAppRevert,
        executionModule: jobSpecification.executionModule,
        feeModule: jobSpecification.feeModule,
        executionModuleInputHash: keccak256(jobSpecification.executionModuleInput),
        feeModuleInputHash: keccak256(jobSpecification.feeModuleInput),
        applicationInputHash: keccak256(jobSpecification.applicationInput)
      },
    });
    return signature;
  }

  async signFeeModuleInput(feeModuleInput: FeeModuleInput) : Promise<`0x${string}`> {
    this.checkProtocolConfig();
    if(!this.walletClient) throw new Error('Wallet client not provided.');
    const signature = await this.walletClient.signTypedData({
      account: this.walletClient.account as Account ,
      domain: {
        name: "JobRegistry",
        chainId: this.walletClient.chain!.id,
        verifyingContract: this.protocolConfig!.jobRegistry,
      },
      types: {
        FeeModuleInput: [
          { name: 'nonce', type: 'uint256' },
          { name: 'deadline', type: 'uint256' },
          { name: 'index', type: 'uint256' },
          { name: 'feeModule', type: 'bytes1'},
          { name: 'feeModuleInputHash', type: 'bytes32' },
        ],
      },
      primaryType: 'FeeModuleInput',
      message: {
        nonce: feeModuleInput.nonce,
        deadline: feeModuleInput.deadline,
        index: feeModuleInput.index,
        feeModule: feeModuleInput.feeModule,
        feeModuleInputHash: keccak256(feeModuleInput.feeModuleInput)
      },
    });
    return signature;
  }

  async getExecutorInfo(executors: `0x${string}`[]): Promise<ExecutorInfo[]> {
    this.checkProtocolConfig();
    const data = await this.publicClient.readContract({
      address: this.protocolConfig!.querier,
      abi: querierAbi,
      functionName: 'getExecutors',
      args: [executors]
    });
    return data.map(obj => obj as ExecutorInfo);
  }

  async getEpochInfo() : Promise<EpochInfo> {
    this.checkProtocolConfig();
    const data = await this.publicClient.readContract({
      address: this.protocolConfig!.querier,
      abi: querierAbi,
      functionName: 'getCurrentEpochInfo'
    });

    const epochStartTime: bigint = data[1] - BigInt(this.protocolConfig!.epochDuration);
    const revealPhaseStartTime: bigint = epochStartTime + BigInt(this.protocolConfig!.commitPhaseDuration);
    const roundsStartTime: bigint = revealPhaseStartTime + BigInt(this.protocolConfig!.revealPhaseDuration);

    const roundPeriods: [bigint, bigint][] = [];
    const roundBufferPeriods: [bigint, bigint][] = [];

    for(let i = 0; i < this.protocolConfig!.roundsPerEpoch; i++) {
      const midTime: bigint = roundsStartTime + BigInt(this.protocolConfig!.roundDuration) + BigInt(i) * (BigInt(this.protocolConfig!.roundDuration) + BigInt(this.protocolConfig!.roundBuffer));
      roundPeriods.push([midTime - BigInt(this.protocolConfig!.roundDuration), midTime]);
      roundBufferPeriods.push([midTime, midTime + BigInt(this.protocolConfig!.roundBuffer)]);
    }
    const epochInfo: EpochInfo = {
      epoch: data[0],
      epochPeriod: [epochStartTime, data[1]],
      seed: data[2],
      numberOfActiveExecutors: data[3],
      commitPhasePeriod: [epochStartTime, revealPhaseStartTime],
      revealPhasePeriod: [revealPhaseStartTime, roundsStartTime],
      roundPeriods: roundPeriods,
      roundBufferPeriods: roundBufferPeriods,
      slashingPhasePeriod: [data[1] - BigInt(this.protocolConfig!.slashingDuration), data[1]],
      selectedExecutors: data[4] as `0x${string}`[],
      epochPoolBalance: data[5],
      nextEpochPoolBalance: data[6]
    }
    return epochInfo;
  }

  async getCommitData(executors: `0x${string}`[]) : Promise<CommitData[]> {
    this.checkProtocolConfig();
    const data = await this.publicClient.readContract({
      address: this.protocolConfig!.querier,
      abi: querierAbi,
      functionName: 'getCommitData',
      args: [executors]
    });
    
    return executors.map((executor, index) => ({
      executor,
      ...data[index]
    }));
  }
  
  async executeBatch(indices: bigint[], gasLimits: bigint[], feeRecipient: `0x${string}`, jobRegistryIndex: number, options?: ContractCallOptions) : Promise<{ transactionHash: `0x${string}`; transactionReceipt?: TransactionReceipt; failedIndices?: bigint[] }> {
    this.checkProtocolConfig();
    const result = await this.executeTransaction({
      address: this.protocolConfig!.coordinator,
      abi: coordinatorAbi,
      functionName: 'executeBatch',
      args: [indices, gasLimits, feeRecipient, jobRegistryIndex],
    }, options);

    let failedIndices: bigint[] | undefined;

    if (result.transactionReceipt) {
      // Find the BatchExecution event and extract the failedIndices
      const batchExecutionEvent = result.transactionReceipt.logs
        .find(log => 
          log.address.toLowerCase() === this.protocolConfig!.coordinator.toLowerCase() &&
          log.topics[0] === keccak256(toBytes('BatchExecution(uint256[])'))
        );

      if (batchExecutionEvent && batchExecutionEvent.data) {
        failedIndices = [...decodeAbiParameters([{ type: 'uint256[]' }], batchExecutionEvent.data)[0]];
      }
    }

    return { 
      transactionHash: result.transactionHash, 
      transactionReceipt: result.transactionReceipt,
      failedIndices 
    };
  }

  async estimateBatchExecutionGas(indices: bigint[], gasLimits: bigint[], feeRecipient: `0x${string}`, jobRegistryIndex: number) : Promise<bigint> {
    this.checkProtocolConfig();
    const gas = await this.publicClient.estimateContractGas({
      address: this.protocolConfig!.coordinator,
      abi: coordinatorAbi,
      functionName: 'executeBatch',
      args: [indices, gasLimits, feeRecipient, jobRegistryIndex],
    });
    return gas;
  }

  async estimateExecutionGas(index: bigint, feeRecipient: `0x${string}`) : Promise<bigint> {
    this.checkProtocolConfig();
    const gas = await this.publicClient.estimateContractGas({
      address: this.protocolConfig!.jobRegistry,
      abi: jobRegistryAbi,
      functionName: 'execute',
      args: [index, feeRecipient],
      account: this.protocolConfig!.coordinator
    });
    return gas;
  }

  async revokeSponsorship(index: bigint, options?: ContractCallOptions) : Promise<{ transactionHash: `0x${string}`; transactionReceipt?: TransactionReceipt }> {
    this.checkProtocolConfig();
    const result = await this.executeTransaction({
      address: this.protocolConfig!.jobRegistry,
      abi: jobRegistryAbi,
      functionName: 'revokeSponsorship',
      args: [index],
    }, options);
    return { transactionHash: result.transactionHash, transactionReceipt: result.transactionReceipt };
  }

  async approveFeeToken(token: `0x${string}`, amount: bigint, options?: ContractCallOptions) : Promise<{ transactionHash: `0x${string}`; transactionReceipt?: TransactionReceipt }> {
    this.checkProtocolConfig();
    const result = await this.executeTransaction({
      address: token,
      abi: erc20Abi,
      functionName: 'approve',
      args: [this.protocolConfig!.jobRegistry, amount],
    }, options);
    return { transactionHash: result.transactionHash, transactionReceipt: result.transactionReceipt };
  }

  async approveAppToken(application: `0x${string}`,token: `0x${string}`, amount: bigint, options?: ContractCallOptions) : Promise<{ transactionHash: `0x${string}`; transactionReceipt?: TransactionReceipt }> {
    this.checkProtocolConfig();
    const result = await this.executeTransaction({
      address: token,
      abi: erc20Abi,
      functionName: 'approve',
      args: [application, amount],
    }, options);
    return { transactionHash: result.transactionHash, transactionReceipt: result.transactionReceipt };
  }

  async approveStakingToken(amount: bigint, options?: ContractCallOptions) : Promise<{ transactionHash: `0x${string}`; transactionReceipt?: TransactionReceipt }> {
    this.checkProtocolConfig();
    const result = await this.executeTransaction({
      address: this.protocolConfig!.stakingToken,
      abi: erc20Abi,
      functionName: 'approve',
      args: [this.protocolConfig!.coordinator, amount],
    }, options);
    return { transactionHash: result.transactionHash, transactionReceipt: result.transactionReceipt };
  }

  async calculateCurrentFee<T extends FeeCalculationMinimum>(job: T) : Promise<{ fee: bigint; token: `0x${string}` } | null> {
    const currentTime = BigInt(Math.floor(Date.now() / 1000));
    if (currentTime >= job.nextExecution) {
      const timeSinceNextExecution = currentTime - job.nextExecution;
      if (timeSinceNextExecution < job.executionWindow) {
        if(job.feeModuleCode === "0x01") {
          const feeDiff: bigint = job.feeModule.maxExecutionFee - job.feeModule.minExecutionFee;
        const fee = ((feeDiff * timeSinceNextExecution) / (BigInt(job.executionWindow) - 1n)) + job.feeModule.minExecutionFee;
        return { fee: fee, token: job.feeModule.executionFeeToken };
        }
      }
    }
    return null;
  }

  async initiateEpoch(options?: ContractCallOptions) : Promise<{ transactionHash: `0x${string}`; transactionReceipt?: TransactionReceipt }> {
    this.checkProtocolConfig();
    const result = await this.executeTransaction({
      address: this.protocolConfig!.coordinator,
      abi: coordinatorAbi,
      functionName: 'initiateEpoch',
    }, options);
    return { transactionHash: result.transactionHash, transactionReceipt: result.transactionReceipt };
  }

  async stake(options?: ContractCallOptions) : Promise<{ transactionHash: `0x${string}`; transactionReceipt?: TransactionReceipt }> {
    this.checkProtocolConfig();
    const result = await this.executeTransaction({
      address: this.protocolConfig!.coordinator,
      abi: coordinatorAbi,
      functionName: 'stake',
    }, options);
    return { transactionHash: result.transactionHash, transactionReceipt: result.transactionReceipt };
  }

  async unstake(options?: ContractCallOptions) : Promise<{ transactionHash: `0x${string}`; transactionReceipt?: TransactionReceipt }> {
    this.checkProtocolConfig();
    const result = await this.executeTransaction({
      address: this.protocolConfig!.coordinator,
      abi: coordinatorAbi,
      functionName: 'unstake',
    }, options);
    return { transactionHash: result.transactionHash, transactionReceipt: result.transactionReceipt };
  }

  async topup(amount: bigint, options?: ContractCallOptions) : Promise<{ transactionHash: `0x${string}`; transactionReceipt?: TransactionReceipt }> {
    this.checkProtocolConfig();
    const result = await this.executeTransaction({
      address: this.protocolConfig!.coordinator,
      abi: coordinatorAbi,
      functionName: 'topup',
      args: [amount],
    }, options);
    return { transactionHash: result.transactionHash, transactionReceipt: result.transactionReceipt };
  }

  async commit(epoch: bigint, options?: ContractCallOptions) : Promise<{ transactionHash: `0x${string}`; transactionReceipt?: TransactionReceipt; secret: `0x${string}` }> {
    this.checkProtocolConfig();
    const msgHash = keccak256(
      encodePacked(['uint192', 'uint256'], [epoch, BigInt(this.publicClient.chain?.id!)])
    );

    const signature = await this.walletClient!.signMessage({ 
      account: this.walletClient!.account as `0x${string}` | Account,
      message: { raw: msgHash },
    });

    const result = await this.executeTransaction({
      address: this.protocolConfig!.coordinator,
      abi: coordinatorAbi,
      functionName: 'commit',
      args: [keccak256(encodePacked(['bytes'], [signature]))],
    }, options);

    return {
      transactionHash: result.transactionHash,
      transactionReceipt: result.transactionReceipt,
      secret: signature
    };
  }

  async reveal(secret: `0x${string}`, options?: ContractCallOptions) : Promise<{ transactionHash: `0x${string}`; transactionReceipt?: TransactionReceipt }> {
    this.checkProtocolConfig();
    const result = await this.executeTransaction({
      address: this.protocolConfig!.coordinator,
      abi: coordinatorAbi,
      functionName: 'reveal',
      args: [secret],
    }, options);
    return { transactionHash: result.transactionHash, transactionReceipt: result.transactionReceipt };
  }

  async slashInactiveExecutor(executor: `0x${string}`, recipient: `0x${string}`, round: number, options?: ContractCallOptions) : Promise<{ transactionHash: `0x${string}`; transactionReceipt?: TransactionReceipt }> {
    this.checkProtocolConfig();
    const result = await this.executeTransaction({
      address: this.protocolConfig!.coordinator,
      abi: coordinatorAbi,
      functionName: 'slashInactiveExecutor',
      args: [executor, round, recipient],
    }, options);
    return { transactionHash: result.transactionHash, transactionReceipt: result.transactionReceipt };
  }

  async slashCommitter(executor: `0x${string}`, recipient: `0x${string}`, options?: ContractCallOptions) : Promise<{ transactionHash: `0x${string}`; transactionReceipt?: TransactionReceipt }> {
    this.checkProtocolConfig();
    const result = await this.executeTransaction({
      address: this.protocolConfig!.coordinator,
      abi: coordinatorAbi,
      functionName: 'slashCommitter',
      args: [executor, recipient],
    }, options);
    return { transactionHash: result.transactionHash, transactionReceipt: result.transactionReceipt };
  }

  async batchSlash(committerExecutors: `0x${string}`[], inactiveExecutors: `0x${string}`[], rounds: number[], recipient: `0x${string}`, options?: ContractCallOptions) : Promise<{ transactionHash: `0x${string}`; transactionReceipt?: TransactionReceipt }> {
    this.checkProtocolConfig();
    const result = await this.executeTransaction({
      address: this.protocolConfig!.batchSlasher,
      abi: batchSlasherAbi,
      functionName: 'batchSlash',
      args: [committerExecutors, inactiveExecutors, rounds, recipient],
    }, options);
    return { transactionHash: result.transactionHash, transactionReceipt: result.transactionReceipt };
  }

  async getEpoch() : Promise<bigint> {
    this.checkProtocolConfig();
    const epoch = await this.publicClient.readContract({
      address: this.protocolConfig!.coordinator,
      abi: coordinatorAbi,
      functionName: 'epoch',
    });
    return epoch;
  }


  jobIsExpired(job: Job) : boolean {
    const currentTime = BigInt(Math.floor(Date.now() / 1000));
    return currentTime >= job.nextExecution + BigInt(job.executionWindow);
  }


  jobInExecutionWindow(job: Job) : boolean {
    const currentTime = BigInt(Math.floor(Date.now() / 1000));
    return currentTime >= job.nextExecution && currentTime < job.nextExecution + BigInt(job.executionWindow);
  }

  jobIsDeleted(job: Job) : boolean {
    return job.owner === '0x0000000000000000000000000000000000000000';
  }


  private formatJobData(index: bigint, jobData: {
    owner: `0x${string}`,
    active: boolean,
    ignoreAppRevert: boolean,
    sponsorFallbackToOwner: boolean,
    sponsorCanUpdateFeeModule: boolean,
    sponsor: `0x${string}`,
    application: `0x${string}`,
    executionWindow: number,
    zeroFeeWindow: number,
    executionCounter: number,
    maxExecutions: number,
    creationTime: bigint,
    executionModule: `0x${string}`,
    feeModule: `0x${string}`,
    executionModuleData: `0x${string}`,
    feeModuleData: `0x${string}`,
    jobIsExpired: boolean,
    jobInExecutionWindow: boolean
  }) : Job {
    
      let executionModule;
      let nextExecution: bigint = 0n;
      let feeModule: LinearAuction | undefined;

      if(jobData.executionModule === "0x00") {
        // RegularTimeInterval
        const executionModuleData = decodeAbiParameters(
          [{name: 'lastExecution', type: 'uint40'}, {name: 'cooldown', type: 'uint32'}], jobData.executionModuleData);
          executionModule = {
            lastExecution: executionModuleData[0],
            cooldown: executionModuleData[1],
          } as RegularTimeInterval;

        nextExecution = BigInt(executionModule.lastExecution + executionModule.cooldown);
      }

      if(jobData.feeModule === "0x01") {
        // LinearAuction
        const feeModuleData = decodeAbiParameters(
          [{name: 'executionFeeToken', type: 'address'}, {name: 'minExecutionFee', type: 'uint256'}, {name: 'maxExecutionFee', type: 'uint256'}], jobData.feeModuleData);
          feeModule = {
            executionFeeToken: feeModuleData[0],
            minExecutionFee: feeModuleData[1],
            maxExecutionFee: feeModuleData[2]
          }
      }

    const job: Job = {
      index: index,
      owner: jobData.owner,
      active: jobData.active,
      ignoreAppRevert: jobData.ignoreAppRevert,
      sponsorFallbackToOwner: jobData.sponsorFallbackToOwner,
      sponsorCanUpdateFeeModule: jobData.sponsorCanUpdateFeeModule,
      sponsor: jobData.sponsor,
      application: jobData.application,
      executionWindow: jobData.executionWindow,
      zeroFeeWindow: jobData.zeroFeeWindow,
      executionCounter: jobData.executionCounter,
      maxExecutions: jobData.maxExecutions,
      creationTime: jobData.creationTime,
      executionModuleCode: jobData.executionModule,
      feeModuleCode: jobData.feeModule,
      executionModule: executionModule!,
      feeModule: feeModule!,
      nextExecution: nextExecution
    }
    return job;
  }

}