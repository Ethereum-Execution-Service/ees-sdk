import { TransactionReceipt, PublicClient, WalletClient, parseAbiItem, decodeAbiParameters, WatchEventReturnType, Account, keccak256, toBytes, encodeAbiParameters, encodePacked, hexToBytes, stringToBytes, erc20Abi } from 'viem';
import { Job, JobSpecification, RegularTimeInterval, FeeModuleInput, FeeCalculationMinimum, LinearAuction, ContractCallOptions } from './types';
import { executionManagerAbi } from './abis/executionManager';
import { jobRegistryAbi } from './abis/jobRegistry';
import { querierAbi } from './abis/querier';
import { chainlinkOracleAbi } from './abis/chainlinkOracle';

import { JOBREGISTRY_ADDRESS, EXECUTION_MANAGER_ADDRESS, QUERIER_ADDRESS, CHAINLINK_ORACLE_ADDRESS } from './constants';

export class EESSDK {
  private publicClient: PublicClient | undefined;
  private walletClient: WalletClient | undefined;
  private CHAIN_ID: bigint;

  constructor(chainId: bigint, publicClient?: PublicClient, walletClient?: WalletClient) {
    this.CHAIN_ID = chainId;
    if(publicClient) {
      this.publicClient = publicClient;
    }
    else {
      this.publicClient = undefined;
    }
    if(walletClient) {
      this.walletClient = walletClient;
    }
    else {
      this.walletClient = undefined;
    }
  }

  async getTokenPrice(token: `0x${string}`, auxData: `0x${string}`) : Promise<readonly[bigint, boolean]> {
    if(!this.publicClient) throw new Error('Public client not provided.');
    const data = await this.publicClient.readContract({
      address: CHAINLINK_ORACLE_ADDRESS,
      abi: chainlinkOracleAbi,
      functionName: 'getPrice',
      args: [token, auxData]
    });
    return data;
  }

  async getJobs(indices: bigint[]) : Promise<Job[]> {
    if(!this.publicClient) throw new Error('Public client not provided.');
    try {
      const data = await this.publicClient.readContract({
        address: QUERIER_ADDRESS,
        abi: querierAbi,
        functionName: 'getJobs',
        args: [indices]
      });

      const jobs: Job[] = [];
      for(let i=0; i < data.length; i++) {
        const job : Job = this.formatJobData(indices[i], data[i]);
        jobs.push(job);
      }
      return jobs;
    } catch (error) {
      console.error(`Error getting jobs:`, error);
      if (error instanceof Error) {
        throw new Error(`Failed to get jobs: ${error.message}`);
      } else {
        throw new Error(`Failed to get jobs: ${String(error)}`);
      }
    }
  }

  async createJob(jobSpecification: JobSpecification, sponsor: `0x${string}`, sponsorSignature: `0x${string}`, hasSponsorship: boolean, index: bigint, options?: ContractCallOptions) : Promise<TransactionReceipt> {
    if(!this.publicClient) throw new Error('Public client not provided.');
    if(!this.walletClient) throw new Error('Wallet client not provided.');

    const { request } = await this.publicClient.simulateContract({
      address: JOBREGISTRY_ADDRESS,
      abi: jobRegistryAbi,
      functionName: 'createJob',
      args: [jobSpecification as { nonce: bigint; deadline: bigint; application: `0x${string}`; executionWindow: number; maxExecutions: number; inactiveGracePeriod: number; ignoreAppRevert: boolean; executionModule: `0x${string}`; feeModule: `0x${string}`; executionModuleInput: `0x${string}`; feeModuleInput: `0x${string}`; applicationInput: `0x${string}`}, sponsor, sponsorSignature, hasSponsorship, index],
      account: this.walletClient.account as `0x${string}` | Account,
      ...options
    });

    if(!request) throw new Error('Failed to create job.')
    const txHash: `0x${string}` = await this.walletClient.writeContract(request);
    const transaction: TransactionReceipt = await this.publicClient.waitForTransactionReceipt( 
      { hash: txHash }
    )
    return transaction;
  }

  async deleteJob(index: bigint, options?: ContractCallOptions) : Promise<TransactionReceipt> {
    if(!this.publicClient) throw new Error('Public client not provided.');
    if(!this.walletClient) throw new Error('Wallet client not provided.');

    const { request } = await this.publicClient.simulateContract({
      address: JOBREGISTRY_ADDRESS,
      abi: jobRegistryAbi,
      functionName: 'deleteJob',
      args: [index],
      account: this.walletClient.account as `0x${string}` | Account,
      ...options
    });

    if(!request) throw new Error('Failed to delete job.')
    const txHash: `0x${string}` = await this.walletClient.writeContract(request);
    const transaction: TransactionReceipt = await this.publicClient.waitForTransactionReceipt( 
      { hash: txHash }
    )
    return transaction;
  }

  watchCreatedJobs(application: `0x${string}`, onCreatedJob: (index: bigint) => any) : WatchEventReturnType {
    if(!this.publicClient) throw new Error('Public client not provided.');
    const unwatch: WatchEventReturnType = this.publicClient.watchEvent({
      address: JOBREGISTRY_ADDRESS,
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
    if(!this.publicClient) throw new Error('Public client not provided.');
    const unwatch: WatchEventReturnType = this.publicClient.watchEvent({
      address: JOBREGISTRY_ADDRESS,
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
    if(!this.publicClient) throw new Error('Public client not provided. Cannot watch deleted jobs.');
    const unwatch: WatchEventReturnType = this.publicClient!.watchEvent({
      address: JOBREGISTRY_ADDRESS,
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
    if(!this.walletClient) throw new Error('Wallet client not provided.');
    const signature = await this.walletClient.signTypedData({
      account: this.walletClient.account as Account ,
      domain: {
        name: "JobRegistry",
        chainId: this.walletClient.chain!.id,
        verifyingContract: JOBREGISTRY_ADDRESS,
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
    if(!this.walletClient) throw new Error('Wallet client not provided.');
    const signature = await this.walletClient.signTypedData({
      account: this.walletClient.account as Account ,
      domain: {
        name: "JobRegistry",
        chainId: this.walletClient.chain!.id,
        verifyingContract: JOBREGISTRY_ADDRESS,
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
    if(!this.publicClient) throw new Error('Public client not provided.');
    if(!this.walletClient) throw new Error('Wallet client not provided.');

    const { result, request } = await this.publicClient.simulateContract({
      address: EXECUTION_MANAGER_ADDRESS,
      abi: executionManagerAbi,
      functionName: 'executeBatch',
      args: [indices, gasLimits, feeRecipient, checkIn],
      account: this.walletClient.account as `0x${string}` | Account,
      ...options
    });
    if(!request) throw new Error('Failed to execute batch.')
    const txHash: `0x${string}` = await this.walletClient.writeContract(request);
    const transactionReceipt: TransactionReceipt = await this.publicClient.waitForTransactionReceipt( 
      { hash: txHash }
    )
    return { transactionReceipt: transactionReceipt, numberOfExecutions: result };
  }

  async revokeSponsorship(index: bigint, options?: ContractCallOptions) : Promise<TransactionReceipt> {
    if(!this.publicClient) throw new Error('Public client not provided.');
    if(!this.walletClient) throw new Error('Wallet client not provided.');

    const { request } = await this.publicClient.simulateContract({
      address: JOBREGISTRY_ADDRESS,
      abi: jobRegistryAbi,
      functionName: 'revokeSponsorship',
      args: [index],
      account: this.walletClient.account as `0x${string}` | Account,
      ...options
    });
    if(!request) throw new Error('Failed to revoke sponsorship.');
    const txHash: `0x${string}` = await this.walletClient.writeContract(request);
    const transaction: TransactionReceipt = await this.publicClient.waitForTransactionReceipt( 
      { hash: txHash }
    )
    return transaction;
  }

  async approveFeeToken(token: `0x${string}`, amount: bigint, options?: ContractCallOptions) : Promise<TransactionReceipt> {
    if(!this.publicClient) throw new Error('Public client not provided.');
    if(!this.walletClient) throw new Error('Wallet client not provided.');
    const { request } = await this.publicClient.simulateContract({
      address: token,
      abi: erc20Abi,
      functionName: 'approve',
      args: [JOBREGISTRY_ADDRESS, amount],
      account: this.walletClient.account as `0x${string}` | Account,
      ...options
    });

    if(!request) throw new Error('Failed to approve fee token.');

    const txHash: `0x${string}` = await this.walletClient.writeContract(request);

    const transaction: TransactionReceipt = await this.publicClient.waitForTransactionReceipt( 
      { hash: txHash }
    )
    return transaction;

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
    if(!this.publicClient) throw new Error('Public client not provided.');
    if(!this.walletClient) throw new Error('Wallet client not provided.');

    const { request } = await this.publicClient.simulateContract({
      address: EXECUTION_MANAGER_ADDRESS,
      abi: executionManagerAbi,
      functionName: 'initiateEpoch',
      ...options
    });
    if(!request) throw new Error('Failed to initiate epoch.');
    const txHash: `0x${string}` = await this.walletClient.writeContract(request);
    const transactionReceipt: TransactionReceipt = await this.publicClient.waitForTransactionReceipt( 
      { hash: txHash }
    )
    return transactionReceipt;
  }

  async stake(options?: ContractCallOptions) : Promise<TransactionReceipt> {
    if(!this.publicClient) throw new Error('Public client not provided.');
    if(!this.walletClient) throw new Error('Wallet client not provided.');

    const { request } = await this.publicClient.simulateContract({
      address: EXECUTION_MANAGER_ADDRESS,
      abi: executionManagerAbi,
      functionName: 'stake',
      ...options
    });
    if(!request) throw new Error('Failed to stake.');
    const txHash: `0x${string}` = await this.walletClient.writeContract(request);
    const transactionReceipt: TransactionReceipt = await this.publicClient.waitForTransactionReceipt( 
      { hash: txHash }
    )
    return transactionReceipt;
  }

  async unstake(options?: ContractCallOptions) : Promise<TransactionReceipt> {
    if(!this.publicClient) throw new Error('Public client not provided.');
    if(!this.walletClient) throw new Error('Wallet client not provided.');

    const { request } = await this.publicClient.simulateContract({
      address: EXECUTION_MANAGER_ADDRESS,
      abi: executionManagerAbi,
      functionName: 'unstake',
      ...options
    });
    if(!request) throw new Error('Failed to unstake.');
    const txHash: `0x${string}` = await this.walletClient.writeContract(request);
    const transactionReceipt: TransactionReceipt = await this.publicClient.waitForTransactionReceipt( 
      { hash: txHash }
    )
    return transactionReceipt;
  }

  async topup(amount: bigint, options?: ContractCallOptions) : Promise<TransactionReceipt> {
    if(!this.publicClient) throw new Error('Public client not provided.');
    if(!this.walletClient) throw new Error('Wallet client not provided.');

    const { request } = await this.publicClient.simulateContract({
      address: EXECUTION_MANAGER_ADDRESS,
      abi: executionManagerAbi,
      functionName: 'topup',
      args: [amount],
      ...options
    });
    if(!request) throw new Error('Failed to topup.');
    const txHash: `0x${string}` = await this.walletClient.writeContract(request);
    const transactionReceipt: TransactionReceipt = await this.publicClient.waitForTransactionReceipt( 
      { hash: txHash }
    )
    return transactionReceipt;
  }

  async commit(epoch: bigint, options?: ContractCallOptions) : Promise<{ transactionReceipt: TransactionReceipt, secret: `0x${string}` }> {
    if(!this.publicClient) throw new Error('Public client not provided.');
    if(!this.walletClient) throw new Error('Wallet client not provided.');

    const msgHash = keccak256(
      encodePacked(['uint192', 'uint256'], [epoch, BigInt(this.CHAIN_ID)])
    );
    const signature = await this.walletClient.signMessage({ 
      account: this.walletClient.account as `0x${string}` | Account,
      message: msgHash,
    });

    const { request } = await this.publicClient.simulateContract({
      address: EXECUTION_MANAGER_ADDRESS,
      abi: executionManagerAbi,
      functionName: 'commit',
      args: [keccak256(encodePacked(['bytes'], [signature]))],
      ...options
    });
    if(!request) throw new Error('Failed to commit.');
    const txHash: `0x${string}` = await this.walletClient.writeContract(request);
    const transactionReceipt: TransactionReceipt = await this.publicClient.waitForTransactionReceipt( 
      { hash: txHash }
    )
    return { transactionReceipt: transactionReceipt, secret: signature };
  }

  async reveal(secret: `0x${string}`, options?: ContractCallOptions) : Promise<TransactionReceipt> {
    if(!this.publicClient) throw new Error('Public client not provided.');
    if(!this.walletClient) throw new Error('Wallet client not provided.');

    const { request } = await this.publicClient.simulateContract({
      address: EXECUTION_MANAGER_ADDRESS,
      abi: executionManagerAbi,
      functionName: 'reveal',
      args: [secret],
      ...options
    });
    if(!request) throw new Error('Failed to reveal.');
    const txHash: `0x${string}` = await this.walletClient.writeContract(request);
    const transactionReceipt: TransactionReceipt = await this.publicClient.waitForTransactionReceipt( 
      { hash: txHash }
    )
    return transactionReceipt;
  }

  async slashInactiveExecutor(executor: `0x${string}`, round: number, options?: ContractCallOptions) : Promise<TransactionReceipt> {
    if(!this.publicClient) throw new Error('Public client not provided.');
    if(!this.walletClient) throw new Error('Wallet client not provided.');

    const { request } = await this.publicClient.simulateContract({
      address: EXECUTION_MANAGER_ADDRESS,
      abi: executionManagerAbi,
      functionName: 'slashInactiveExecutor',
      args: [executor, round],
      ...options
    });
    if(!request) throw new Error('Failed to slash inactive executor.');
    const txHash: `0x${string}` = await this.walletClient.writeContract(request);
    const transactionReceipt: TransactionReceipt = await this.publicClient.waitForTransactionReceipt( 
      { hash: txHash }
    )
    return transactionReceipt;
  }

  async slashCommitter(executor: `0x${string}`, options?: ContractCallOptions) : Promise<TransactionReceipt> {
    if(!this.publicClient) throw new Error('Public client not provided.');
    if(!this.walletClient) throw new Error('Wallet client not provided.');

    const { request } = await this.publicClient.simulateContract({
      address: EXECUTION_MANAGER_ADDRESS,
      abi: executionManagerAbi,
      functionName: 'slashCommitter',
      args: [executor],
      ...options
    });
    if(!request) throw new Error('Failed to slash committer.');
    const txHash: `0x${string}` = await this.walletClient.writeContract(request);
    const transactionReceipt: TransactionReceipt = await this.publicClient.waitForTransactionReceipt( 
      { hash: txHash }
    )
    return transactionReceipt;
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
      let nextExecution: bigint;
      let feeModule: LinearAuction | undefined;

      if(jobData.executionModule === "0x00") {
        // RegularTimeInterval
        const executionModuleData = decodeAbiParameters(
          [{name: 'lastExecution', type: 'uint40'}, {name: 'cooldown', type: 'uint32'}], jobData.executionModuleData);
          executionModule = {
            lastExecution: executionModuleData[0],
            cooldown: executionModuleData[1],
          } as RegularTimeInterval;

        nextExecution = executionModule.lastExecution + executionModule.cooldown;
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