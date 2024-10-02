import { TransactionReceipt, PublicClient, WalletClient, WatchEventReturnType } from 'viem';
import { Job, JobSpecification, FeeModuleInput, FeeCalculationMinimum, ContractCallOptions, ProtocolConfig } from './types';
export declare class EESSDK {
    private publicClient;
    private walletClient;
    private protocolConfig;
    private simulateBeforeWrite;
    private constructor();
    static init(configProviderAddress: `0x${string}`, publicClient: PublicClient, walletClient?: WalletClient, simulateBeforeWrite?: boolean): Promise<EESSDK>;
    private fetchAndSetConfig;
    getAllowance(token: `0x${string}`, allower: `0x${string}`, spender: `0x${string}`): Promise<bigint>;
    getBalance(token: `0x${string}`, account: `0x${string}`): Promise<bigint>;
    getProtocolConfig(): ProtocolConfig;
    private checkProtocolConfig;
    getTokenPrice(oracleAddress: `0x${string}`, token: `0x${string}`, auxData: `0x${string}`): Promise<readonly [bigint, boolean]>;
    getJobsArrayLength(): Promise<bigint>;
    getJobs(indices: bigint[]): Promise<Job[]>;
    private executeTransaction;
    createJob(jobSpecification: JobSpecification, sponsor: `0x${string}`, sponsorSignature: `0x${string}`, hasSponsorship: boolean, index: bigint, options?: ContractCallOptions): Promise<TransactionReceipt>;
    deleteJob(index: bigint, options?: ContractCallOptions): Promise<TransactionReceipt>;
    watchCreatedJobs(application: `0x${string}`, onCreatedJob: (index: bigint) => any): WatchEventReturnType;
    watchExecutedJobs(application: `0x${string}`, onExecutedJob: (index: bigint) => any): WatchEventReturnType;
    watchDeletedJobs(application: `0x${string}`, onDeletedJob: (index: bigint) => any): WatchEventReturnType;
    signJobSpecification(jobSpecification: JobSpecification): Promise<`0x${string}`>;
    signFeeModuleInput(feeModuleInput: FeeModuleInput): Promise<`0x${string}`>;
    executeBatch(indices: bigint[], gasLimits: bigint[], feeRecipient: `0x${string}`, checkIn: boolean, options?: ContractCallOptions): Promise<{
        transactionReceipt: TransactionReceipt;
        numberOfExecutions: bigint;
    }>;
    revokeSponsorship(index: bigint, options?: ContractCallOptions): Promise<TransactionReceipt>;
    approveFeeToken(token: `0x${string}`, amount: bigint, options?: ContractCallOptions): Promise<TransactionReceipt>;
    approveStakingToken(amount: bigint, options?: ContractCallOptions): Promise<TransactionReceipt>;
    calculateCurrentFee<T extends FeeCalculationMinimum>(job: T): Promise<{
        fee: bigint;
        token: `0x${string}`;
    } | null>;
    initiateEpoch(options?: ContractCallOptions): Promise<TransactionReceipt>;
    stake(options?: ContractCallOptions): Promise<TransactionReceipt>;
    unstake(options?: ContractCallOptions): Promise<TransactionReceipt>;
    topup(amount: bigint, options?: ContractCallOptions): Promise<TransactionReceipt>;
    commit(epoch: bigint, options?: ContractCallOptions): Promise<{
        transactionReceipt: TransactionReceipt;
        secret: `0x${string}`;
    }>;
    reveal(secret: `0x${string}`, options?: ContractCallOptions): Promise<TransactionReceipt>;
    slashInactiveExecutor(executor: `0x${string}`, round: number, options?: ContractCallOptions): Promise<TransactionReceipt>;
    slashCommitter(executor: `0x${string}`, options?: ContractCallOptions): Promise<TransactionReceipt>;
    getEpoch(): Promise<bigint>;
    private formatJobData;
}
