import { TransactionReceipt, PublicClient, WalletClient, WatchEventReturnType, Account } from 'viem';
import { Job, JobSpecification, FeeModuleInput, FeeCalculationMinimum, ContractCallOptions, ProtocolConfig, ExecutorInfo, CommitData, EpochInfo } from './types';

/**
 * Interface of EESSDK.
 */
export interface EESSDK {
  /**
   * Initializes an instance of EESSDK.
   * @param configProviderAddress - The address of the config provider contract.
   * @param publicClient - The public client instance.
   * @param walletClient - The wallet client instance. This is optional but required for contract writes and signature generation.
   * @returns A promise that resolves to an initialized EESSDK instance.
   */
  init(configProviderAddress: `0x${string}`, publicClient: PublicClient, walletClient?: WalletClient): Promise<EESSDK>;

  /**
   * Retrieves the protocol configuration.
   * @throws An error if the protocol config is not initialized.
   * @returns The protocol configuration.
   */
  getProtocolConfig(): ProtocolConfig;

  /**
   * Creates an instance of EESSDK.
   * @param chainId - The chain ID.
   * @param publicClient - The public client instance.
   * @param walletClient - The wallet client instance.
   */
  constructor(chainId: bigint, publicClient?: PublicClient, walletClient?: WalletClient);


  /**
   * Retrieves the total number of jobs in the JobRegistry.
   * @notice The length of the jobs array is not the same as the total number of jobs. Some entries might be empty.
   * @throws An error if the protocol config is not initialized.
   * @returns A promise that resolves to a bigint representing the legnth of the jobs array.
   */
  getJobsArrayLength(): Promise<bigint>;

  /**
   * Retrieves jobs based on their indices.
   * @throws An error if the class was not initialized with a publicClient.
   * @param indices - An array of job indices to query.
   * @returns A promise that resolves to an array of Job objects.
   */
  getJobs(indices: bigint[]): Promise<Job[]>;

  /**
   * Watches for newly created jobs with a specific application.
   * @throws An error if the class was not initialized with a publicClient.
   * @param application - The application address of jobs to watch for.
   * @param callback - A callback function to handle created jobs.
   * @returns A WatchEventReturnType object.
   */
  watchCreatedJobs(application: `0x${string}`, onCreatedJob: (index: bigint) => any) : WatchEventReturnType;

  /**
   * Watches for executed jobs with a specific application.
   * @throws An error if the class was not initialized with a publicClient.
   * @param application - The application address of jobs to watch for.
   * @param callback - A callback function to handle executed jobs.
   * @returns A WatchEventReturnType object.
   */
  watchExecutedJobs(application: `0x${string}`, onExecutedJob: (index: bigint) => any) : WatchEventReturnType;

  /**
   * Watches for deleted jobs with a specific application.
   * @throws An error if the class was not initialized with a publicClient.
   * @param application - The application address of jobs to watch for.
   * @param callback - A callback function to handle deleted jobs.
   * @returns A WatchEventReturnType object.
   */
  watchDeletedJobs(application: `0x${string}`, onDeletedJob: (index: bigint) => any) : WatchEventReturnType;

  /**
   * Creates a job within the JobRegistry contract.
   * @throws An error if the class was not initialized with a publicClient and walletClient.
   * @param jobSpecification - Contains specification of the job.
   * @param sponsor - The sponsor address.
   * @param sponsorSignature - The EIP-712 sponsor signature of jobSpecification.
   * @param ownerSignature - The EIP-712 owner signature of jobSpecification.
   * @param index - The index of the job.
   * @param options - Optional contract call options.
   * @returns A promise that resolves to an object containing the transaction hash optionally receipt and job index if waitForReceipt is set true in options..
   */
  createJob(jobSpecification: JobSpecification, sponsor: `0x${string}`, sponsorSignature: `0x${string}`, ownerSignature: `0x${string}`, index: bigint, options?: ContractCallOptions): Promise<{ transactionHash: `0x${string}`; transactionReceipt?: TransactionReceipt; jobIndex?: bigint }>;

  /**
   * Deletes a job.
   * @notice This function is only callable by the owner of the job.
   * @throws An error if the class was not initialized with a publicClient and walletClient.
   * @param index - The index of the job.
   * @returns A promise that resolves to a TransactionReceipt object.
   */
  deleteJob(index: bigint) : Promise<TransactionReceipt>;

  /**
   * Generates a sponsor signature for a given job specification. This signature will not take the owneer of the job into account.
   * @throws An error if the class was not initialized with a walletClient.
   * @param jobSpecification - The JobSpecification object to generate a signature for.
   * @returns A promise that resolves to the generated signature.
   */
  signJobSpecificationSponsor(jobSpecification: JobSpecification) : Promise<`0x${string}`>;

  /**
   * Generates an owner signature for a given job specification.
   * @throws An error if the class was not initialized with a walletClient.
   * @param jobSpecification - The JobSpecification object to generate a signature for.
   * @returns A promise that resolves to the generated signature.
   */
  signJobSpecificationOwner(jobSpecification: JobSpecification) : Promise<`0x${string}`>;

  /**
   * Generates a sponsor signature for a given fee module input.
   * @throws An error if the class was not initialized with a walletClient.
   * @param feeModuleInput - The FeeModuleInput object to generate a signature for.
   * @returns A promise that resolves to the generated signature.
   */
  signFeeModuleInput(feeModuleInput: FeeModuleInput) : Promise<`0x${string}`>;

  /**
   * Retrieves the executor info.
   * @param executor - The address of the executor.
   * @returns A promise that resolves to an ExecutorInfo object.
   */
  getExecutorInfo(executor: `0x${string}`) : Promise<ExecutorInfo>;


  /**
   * Retrieves the current epoch info with helper data.
   * @returns A promise that resolves to an EpochInfo object.
   */
  getEpochInfo() : Promise<EpochInfo>;

  /**
   * Retrieves the commit data for each executor specified.
   * @notice The returned array is in the same order as the input array.
   * @notice If an executor has not committed, all fields will be 0.
   * @param executors - An array of executor addresses.
   * @returns A promise that resolves to an array of CommitData objects.
   */
  getCommitData(executors: `0x${string}`[]) : Promise<CommitData[]>;


  /**
   * Executes a batch of jobs.
   * @throws An error if the class was not initialized with a publicClient and walletClient.
   * @param indices - An array of indices of jobs to execute.
   * @param gasLimits - An array of gas limits for each job.
   * @param feeRecipient - The address of the fee recipient.
   * @param jobRegistryIndex - The index of the job registry.
   * @param options - Optional contract call options.
   * @returns A promise that resolves to an object containing the transaction hash and optionally receipt and failed job indices if waitForReceipt is set true in options.
   */
  executeBatch(indices: bigint[], gasLimits: bigint[], feeRecipient: `0x${string}`, jobRegistryIndex: number, options?: ContractCallOptions): Promise<{ transactionHash: `0x${string}`; transactionReceipt?: TransactionReceipt; failedIndices?: bigint[] }>;

  /**
   * Estimates the gas for executing a batch of jobs in ExecutionManager.
   * @param indices - An array of indices of jobs to execute.
   * @param gasLimits - An array of gas limits for each job.
   * @param feeRecipient - The address of the fee recipient.
   * @param jobRegistryIndex - The index of the job registry.
   * @returns A promise that resolves to the estimated gas.
   */
  estimateBatchExecutionGas(indices: bigint[], gasLimits: bigint[], feeRecipient: `0x${string}`, jobRegistryIndex: number) : Promise<bigint>;

  /**
   * Estimates the gas for calling "execute" on a single job in JobRegistry.
   * @param index - The index of the job to execute.
   * @param feeRecipient - The address of the fee recipient.
   * @returns A promise that resolves to the estimated gas.
   */
  estimateExecutionGas(index: bigint, feeRecipient: `0x${string}`) : Promise<bigint>;


  /**
   * Revokes sponsorship for a job. This will set the sponsor address to the owner of the job.
   * @notice This function is only callable by the owner or sponsor of the job.
   * @throws An error if the class was not initialized with a publicClient and walletClient.
   * @param index - Index of the job to revoke sponsorship for.
   * @returns A promise that resolves to the a transaction receipt.
   */
  revokeSponsorship(index: bigint) : Promise<TransactionReceipt>;

  /**
   * Approves a fee token for a specific amount to the JobRegistry contract.
   * @notice Fee token approval is necessary for getting jobs executed.
   * @throws An error if the class was not initialized with a publicClient and walletClient.
   * @param token - The fee token address.
   * @param amount - The amount to approve.
   * @returns A promise that resolves to the a transaction receipt.
   */
  approveFeeToken(token: `0x${string}`, amount: bigint) : Promise<TransactionReceipt>;

  /**
   * Calculates the current fee for a job using its fee module.
   * @param job - The job to calculate the fee for.
   * @returns A promise that resolves to an object containing the fee and token address.
   */
  calculateCurrentFee<T extends FeeCalculationMinimum>(job: T): Promise<{ fee: bigint; token: `0x${string}` } | null>;

  /**
   * Retrieves the price of a token.
   * @param token - The token address.
   * @param auxData - Auxiliary data.
   * @returns A promise that resolves to an array containing the price and a boolean flag.
   */
  getTokenPrice(token: `0x${string}`, auxData: `0x${string}`): Promise<readonly[bigint, boolean]>;

  /**
   * Initiates a new epoch in the execution manager.
   * @throws An error if the class was not initialized with a publicClient and walletClient.
   * @param options - Optional contract call options.
   * @returns A promise that resolves to a TransactionReceipt object.
   */
  initiateEpoch(options?: ContractCallOptions): Promise<TransactionReceipt>;

  /**
   * Stakes tokens in the execution manager.
   * @throws An error if the class was not initialized with a publicClient and walletClient.
   * @param options - Optional contract call options.
   * @returns A promise that resolves to a TransactionReceipt object.
   */
  stake(options?: ContractCallOptions): Promise<TransactionReceipt>;

  /**
   * Unstakes tokens from the execution manager.
   * @throws An error if the class was not initialized with a publicClient and walletClient.
   * @param options - Optional contract call options.
   * @returns A promise that resolves to a TransactionReceipt object.
   */
  unstake(options?: ContractCallOptions): Promise<TransactionReceipt>;

  /**
   * Tops up the stake in the execution manager.
   * @throws An error if the class was not initialized with a publicClient and walletClient.
   * @param amount - The amount to top up.
   * @param options - Optional contract call options.
   * @returns A promise that resolves to a TransactionReceipt object.
   */
  topup(amount: bigint, options?: ContractCallOptions): Promise<TransactionReceipt>;

  /**
   * Commits to an epoch in the execution manager.
   * @throws An error if the class was not initialized with a publicClient and walletClient.
   * @param epoch - The epoch to commit to.
   * @param options - Optional contract call options.
   * @returns A promise that resolves to an object containing the TransactionReceipt and the secret.
   */
  commit(epoch: bigint, options?: ContractCallOptions): Promise<{ transactionReceipt: TransactionReceipt, secret: `0x${string}` }>;

  /**
   * Reveals the secret for a committed epoch in the execution manager.
   * @throws An error if the class was not initialized with a publicClient and walletClient.
   * @param secret - The secret to reveal.
   * @param options - Optional contract call options.
   * @returns A promise that resolves to a TransactionReceipt object.
   */
  reveal(secret: `0x${string}`, options?: ContractCallOptions): Promise<TransactionReceipt>;

  /**
   * Slashes an inactive executor in the execution manager.
   * @throws An error if the class was not initialized with a publicClient and walletClient.
   * @param executor - The address of the executor to slash.
   * @param round - The round number.
   * @param options - Optional contract call options.
   * @returns A promise that resolves to a TransactionReceipt object.
   */
  slashInactiveExecutor(executor: `0x${string}`, round: number, options?: ContractCallOptions): Promise<TransactionReceipt>;

  /**
   * Slashes a committer in the execution manager.
   * @throws An error if the class was not initialized with a publicClient and walletClient.
   * @param executor - The address of the executor to slash.
   * @param options - Optional contract call options.
   * @returns A promise that resolves to a TransactionReceipt object.
   */
  slashCommitter(executor: `0x${string}`, options?: ContractCallOptions): Promise<TransactionReceipt>;

  /**
   * Slashes multiple committers in the execution manager.
   * @throws An error if the class was not initialized with a publicClient and walletClient.
   * @notice inactiveExecugtors and rounds must have same length, otherwise the transaction will revert.
   * @param committerExecutors - An array of addresses of the committers to slash.
   * @param inactiveExecutors - An array of addresses of the inactive executors to slash.
   * @param rounds - An array of round numbers to slash.
   * @param recipient - The address of the recipient.
   * @param options - Optional contract call options.
   * @returns A promise that resolves to a TransactionReceipt object.
   */
  batchSlash(committerExecutors: `0x${string}`[], inactiveExecutors: `0x${string}`[], rounds: number[], recipient: `0x${string}`, options?: ContractCallOptions) : Promise<TransactionReceipt>;


  /**
   * Checks if a job is expired.
   * @param job - The job to check.
   * @returns A boolean indicating if the job is expired.
   */
  jobIsExpired(job: Job) : boolean;

  /**
   * Checks if a job is in the execution window.
   * @param job - The job to check.
   * @returns A boolean indicating if the job is in the execution window.
   */
  jobInExecutionWindow(job: Job) : boolean;

  /**
   * Checks if a job is deleted.
   * @param job - The job to check.
   * @returns A boolean indicating if the job is deleted.
   */
  jobIsDeleted(job: Job) : boolean;
}