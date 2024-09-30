import { TransactionReceipt, PublicClient, WalletClient, WatchEventReturnType, Account } from 'viem';
import { Job, JobSpecification, FeeModuleInput, FeeCalculationMinimum } from './types';

/**
 * Interface of EESSDK.
 */
export interface EESSDK {
  /**
   * Creates an instance of EESSDK.
   * @param publicClient - The public client instance.
   * @param walletClient - The wallet client instance.
   */
  constructor(publicClient?: PublicClient, walletClient?: WalletClient);

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
   * @param hasSponsorship - A boolean flag indicating if the job is created with a sponsorship.
   * @param index - The index of the job.
   * @returns A promise that resolves to a TransactionReceipt object.
   */
  createJob(jobSpecification: JobSpecification, sponsor: `0x${string}`, sponsorSignature: `0x${string}`, hasSponsorship: boolean, index: bigint) : Promise<TransactionReceipt>;

  /**
   * Deletes a job.
   * @notice This function is only callable by the owner of the job.
   * @throws An error if the class was not initialized with a publicClient and walletClient.
   * @param index - The index of the job.
   * @returns A promise that resolves to a TransactionReceipt object.
   */
  deleteJob(index: bigint) : Promise<TransactionReceipt>;

  /**
   * Generates a sponsor signature for a given job specification.
   * @throws An error if the class was not initialized with a walletClient.
   * @param jobSpecification - The JobSpecification object to generate a signature for.
   * @returns A promise that resolves to the generated signature.
   */
  signJobSpecification(jobSpecification: JobSpecification) : Promise<`0x${string}`>;

  /**
   * Generates a sponsor signature for a given fee module input.
   * @throws An error if the class was not initialized with a walletClient.
   * @param feeModuleInput - The FeeModuleInput object to generate a signature for.
   * @returns A promise that resolves to the generated signature.
   */
  signFeeModuleInput(feeModuleInput: FeeModuleInput) : Promise<`0x${string}`>;

  /**
   * Executes a batch of jobs.
   * @throws An error if the class was not initialized with a publicClient and walletClient.
   * @param jobIndices - An array of indices of jobs to execute.
   * @param gasLimits - An array of gas limits for each job.
   * @param feeRecipient - The address of the fee recipient.
   * @param checkIn - A boolean flag indicating whether to check in.
   * @returns A promise that resolves to the a batch execution receipt containing transaction receipt and information from each execution.
   */
  executeBatch(indices: bigint[], gasLimits: bigint[], feeRecipient: `0x${string}`, checkIn: boolean) : Promise<{ transactionReceipt: TransactionReceipt, numberOfExecutions: bigint }>;

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
}
