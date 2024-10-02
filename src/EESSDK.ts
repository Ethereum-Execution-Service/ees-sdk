import { TransactionReceipt, PublicClient, WalletClient, parseAbiItem, decodeAbiParameters, WatchEventReturnType, Account, keccak256, toBytes, encodeAbiParameters, encodePacked, erc20Abi } from 'viem';
import { Job, JobSpecification, RegularTimeInterval, FeeModuleInput, FeeCalculationMinimum, LinearAuction, ContractCallOptions, ProtocolConfig, ContractFunctionConfig } from './types';
import { executionManagerAbi } from './abis/executionManager';
import { jobRegistryAbi } from './abis/jobRegistry';
import { querierAbi } from './abis/querier';
import { configProviderAbi } from './abis/configProvider';
import { chainlinkOracleAbi } from './abis/chainlinkOracle';

export class EESSDK {
  private publicClient: PublicClient;
  private walletClient: WalletClient | undefined;
  private protocolConfig: ProtocolConfig | undefined;
  private simulateBeforeWrite: boolean;

  private constructor(publicClient: PublicClient, walletClient?: WalletClient, simulateBeforeWrite: boolean = true) {
    this.publicClient = publicClient;
    this.walletClient = walletClient;
    this.simulateBeforeWrite = simulateBeforeWrite;
  }

  static async init(configProviderAddress: `0x${string}`, publicClient: PublicClient, walletClient?: WalletClient, simulateBeforeWrite: boolean = true) : Promise<EESSDK> {
    if(walletClient && walletClient.chain?.id !== publicClient.chain?.id) throw new Error('Chain ID mismatch between public client and wallet client.');
    const instance = new EESSDK(publicClient, walletClient, simulateBeforeWrite);
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
        { name: 'executionManager', type: 'address' },
        { name: 'querier', type: 'address' }
      ],
      config[0]
    );
    const decodedJobRegistryConfig = decodeAbiParameters(
      [
        { name: 'executionGasOverhead', type: 'uint256' },
        { name: 'executionModulesLength', type: 'uint256' },
        { name: 'feeModulesLength', type: 'uint256' }
      ],
      config[1]
    );
    const decodedExecutionManagerConfig = decodeAbiParameters(
      [
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
      ],
      config[2]
    );

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

  private async executeTransaction(contractCall: ContractFunctionConfig, options?: ContractCallOptions): Promise<{ transactionReceipt: TransactionReceipt, result: unknown }> {
    if(!this.walletClient) throw new Error('Wallet client not provided.');

    if (this.simulateBeforeWrite) {
      const { request, result } = await this.publicClient.simulateContract({
        ...contractCall,
        chain: this.walletClient.chain,
        account: this.walletClient.account as `0x${string}` | Account,
        ...options
      });
      if(!request) throw new Error(`Failed to ${contractCall.functionName}.`);
      const txHash: `0x${string}` = await this.walletClient.writeContract(request);
      const transactionReceipt = await this.publicClient.waitForTransactionReceipt({ hash: txHash });
      return { transactionReceipt, result };
    } else {
      const result = await this.walletClient.writeContract({
        ...contractCall,
        chain: this.walletClient.chain,
        account: this.walletClient.account as `0x${string}` | Account,
        ...options
      });
      const transactionReceipt = await this.publicClient.waitForTransactionReceipt({ hash: result });
      return { transactionReceipt, result };
    }
  }

  async createJob(jobSpecification: JobSpecification, sponsor: `0x${string}`, sponsorSignature: `0x${string}`, hasSponsorship: boolean, index: bigint, options?: ContractCallOptions) : Promise<TransactionReceipt> {
    this.checkProtocolConfig();
    const { transactionReceipt } = await this.executeTransaction({
      address: this.protocolConfig!.jobRegistry,
      abi: jobRegistryAbi,
      functionName: 'createJob',
      args: [jobSpecification as { nonce: bigint; deadline: bigint; application: `0x${string}`; executionWindow: number; maxExecutions: number; inactiveGracePeriod: number; ignoreAppRevert: boolean; executionModule: `0x${string}`; feeModule: `0x${string}`; executionModuleInput: `0x${string}`; feeModuleInput: `0x${string}`; applicationInput: `0x${string}`}, sponsor, sponsorSignature, hasSponsorship, index],
    }, options);
    return transactionReceipt;
  }

  async deleteJob(index: bigint, options?: ContractCallOptions) : Promise<TransactionReceipt> {
    this.checkProtocolConfig();
    const { transactionReceipt } = await this.executeTransaction({
      address: this.protocolConfig!.jobRegistry,
      abi: jobRegistryAbi,
      functionName: 'deleteJob',
      args: [index],
    }, options);
    return transactionReceipt;
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

  async signJobSpecification(jobSpecification: JobSpecification) : Promise<`0x${string}`> {
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
          { name: 'application', type: 'address' },
          { name: 'executionWindow', type: 'uint32' },
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
        application: jobSpecification.application,
        executionWindow: jobSpecification.executionWindow,
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
  
  async executeBatch(indices: bigint[], gasLimits: bigint[], feeRecipient: `0x${string}`, checkIn: boolean, options?: ContractCallOptions) : Promise<{ transactionReceipt: TransactionReceipt, numberOfExecutions: bigint }> {
    this.checkProtocolConfig();
    const { transactionReceipt, result } = await this.executeTransaction({
      address: this.protocolConfig!.executionManager,
      abi: executionManagerAbi,
      functionName: 'executeBatch',
      args: [indices, gasLimits, feeRecipient, checkIn],
    }, options);

    return { transactionReceipt, numberOfExecutions: result as bigint };
  }

  async estimateBatchExecutionGas(indices: bigint[], gasLimits: bigint[], feeRecipient: `0x${string}`, checkIn: boolean) : Promise<bigint> {
    this.checkProtocolConfig();
    const gas = await this.publicClient.estimateContractGas({
      address: this.protocolConfig!.executionManager,
      abi: executionManagerAbi,
      functionName: 'executeBatch',
      args: [indices, gasLimits, feeRecipient, checkIn],
    });
    return gas;
  }

  async revokeSponsorship(index: bigint, options?: ContractCallOptions) : Promise<TransactionReceipt> {
    this.checkProtocolConfig();
    const { transactionReceipt } = await this.executeTransaction({
      address: this.protocolConfig!.jobRegistry,
      abi: jobRegistryAbi,
      functionName: 'revokeSponsorship',
      args: [index],
    }, options);
    return transactionReceipt;
  }

  async approveFeeToken(token: `0x${string}`, amount: bigint, options?: ContractCallOptions) : Promise<TransactionReceipt> {
    this.checkProtocolConfig();
    const { transactionReceipt } = await this.executeTransaction({
      address: token,
      abi: erc20Abi,
      functionName: 'approve',
      args: [this.protocolConfig!.jobRegistry, amount],
    }, options);
    return transactionReceipt;
  }

  async approveStakingToken(amount: bigint, options?: ContractCallOptions) : Promise<TransactionReceipt> {
    this.checkProtocolConfig();
    const { transactionReceipt } = await this.executeTransaction({
      address: this.protocolConfig!.stakingToken,
      abi: erc20Abi,
      functionName: 'approve',
      args: [this.protocolConfig!.executionManager, amount],
    }, options);
    return transactionReceipt;
  }

  async calculateCurrentFee<T extends FeeCalculationMinimum>(job: T) : Promise<{ fee: bigint; token: `0x${string}` } | null> {
    const currentTime = BigInt(Math.floor(Date.now() / 1000));
    if (currentTime >= job.nextExecution) {
      const timeSinceNextExecution = currentTime - job.nextExecution;
      if (timeSinceNextExecution < job.executionWindow) {
        if(job.feeModuleCode === "0x00") {
          const feeDiff: bigint = job.feeModule.maxExecutionFee - job.feeModule.minExecutionFee;
        const fee = ((feeDiff * timeSinceNextExecution) / (BigInt(job.executionWindow) - 1n)) + job.feeModule.minExecutionFee;
        return { fee: fee, token: job.feeModule.executionFeeToken };
        }
      }
    }
    return null;
  }

  async initiateEpoch(options?: ContractCallOptions) : Promise<TransactionReceipt> {
    this.checkProtocolConfig();
    const { transactionReceipt } = await this.executeTransaction({
      address: this.protocolConfig!.executionManager,
      abi: executionManagerAbi,
      functionName: 'initiateEpoch',
    }, options);
    return transactionReceipt;
  }

  async stake(options?: ContractCallOptions) : Promise<TransactionReceipt> {
    this.checkProtocolConfig();
    const { transactionReceipt } = await this.executeTransaction({
      address: this.protocolConfig!.executionManager,
      abi: executionManagerAbi,
      functionName: 'stake',
    }, options);
    return transactionReceipt;
  }

  async unstake(options?: ContractCallOptions) : Promise<TransactionReceipt> {
    this.checkProtocolConfig();
    const { transactionReceipt } = await this.executeTransaction({
      address: this.protocolConfig!.executionManager,
      abi: executionManagerAbi,
      functionName: 'unstake',
    }, options);
    return transactionReceipt;
  }

  async topup(amount: bigint, options?: ContractCallOptions) : Promise<TransactionReceipt> {
    this.checkProtocolConfig();
    const { transactionReceipt } = await this.executeTransaction({
      address: this.protocolConfig!.executionManager,
      abi: executionManagerAbi,
      functionName: 'topup',
      args: [amount],
    }, options);
    return transactionReceipt;
  }

  async commit(epoch: bigint, options?: ContractCallOptions) : Promise<{ transactionReceipt: TransactionReceipt, secret: `0x${string}` }> {
    this.checkProtocolConfig();
    const msgHash = keccak256(
      encodePacked(['uint192', 'uint256'], [epoch, BigInt(this.publicClient.chain?.id!)])
    );

    const signature = await this.walletClient!.signMessage({ 
      account: this.walletClient!.account as `0x${string}` | Account,
      message: { raw: msgHash },
    });

    const { transactionReceipt } = await this.executeTransaction({
      address: this.protocolConfig!.executionManager,
      abi: executionManagerAbi,
      functionName: 'commit',
      args: [keccak256(encodePacked(['bytes'], [signature]))],
    }, options);

    return {
      transactionReceipt,
      secret: signature
    };
  }

  async reveal(secret: `0x${string}`, options?: ContractCallOptions) : Promise<TransactionReceipt> {
    this.checkProtocolConfig();
    const { transactionReceipt } = await this.executeTransaction({
      address: this.protocolConfig!.executionManager,
      abi: executionManagerAbi,
      functionName: 'reveal',
      args: [secret],
    }, options);
    return transactionReceipt;
  }

  async slashInactiveExecutor(executor: `0x${string}`, round: number, options?: ContractCallOptions) : Promise<TransactionReceipt> {
    this.checkProtocolConfig();
    const { transactionReceipt } = await this.executeTransaction({
      address: this.protocolConfig!.executionManager,
      abi: executionManagerAbi,
      functionName: 'slashInactiveExecutor',
      args: [executor, round],
    }, options);
    return transactionReceipt;
  }

  async slashCommitter(executor: `0x${string}`, options?: ContractCallOptions) : Promise<TransactionReceipt> {
    this.checkProtocolConfig();
    const { transactionReceipt } = await this.executeTransaction({
      address: this.protocolConfig!.executionManager,
      abi: executionManagerAbi,
      functionName: 'slashCommitter',
      args: [executor],
    }, options);
    return transactionReceipt;
  }

  async getEpoch() : Promise<bigint> {
    this.checkProtocolConfig();
    const epoch = await this.publicClient.readContract({
      address: this.protocolConfig!.executionManager,
      abi: executionManagerAbi,
      functionName: 'epoch',
    });
    return epoch;
  }


  private formatJobData(index: bigint, jobData: {
    owner: `0x${string}`,
    active: boolean,
    ignoreAppRevert: boolean,
    inactiveGracePeriod: number,
    sponsor: `0x${string}`,
    application: `0x${string}`,
    executionWindow: number,
    executionCounter: number,
    maxExecutions: number,
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

      if(jobData.feeModule === "0x00") {
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
      inactiveGracePeriod: jobData.inactiveGracePeriod,
      sponsor: jobData.sponsor,
      application: jobData.application,
      executionWindow: jobData.executionWindow,
      executionCounter: jobData.executionCounter,
      maxExecutions: jobData.maxExecutions,
      executionModuleCode: jobData.executionModule,
      feeModuleCode: jobData.feeModule,
      executionModule: executionModule!,
      feeModule: feeModule!,
      jobIsExpired: jobData.jobIsExpired,
      jobInExecutionWindow: jobData.jobInExecutionWindow,
      nextExecution: nextExecution
    }
    return job;
  }

}