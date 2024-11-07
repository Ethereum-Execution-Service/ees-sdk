import { Address, Abi } from 'viem';

export interface Job {
  index: bigint;
  owner: `0x${string}`,
  sponsor: `0x${string}`,
  active: boolean,
  ignoreAppRevert: boolean,
  sponsorFallbackToOwner: boolean,
  sponsorCanUpdateFeeModule: boolean,
  application: `0x${string}`,
  executionWindow: number,
  executionCounter: number,
  maxExecutions: number,
  creationTime: bigint,
  executionModuleCode: `0x${string}`,
  feeModuleCode: `0x${string}`,
  executionModule: RegularTimeInterval,
  feeModule: LinearAuction,
  nextExecution: bigint
}

export interface EpochInfo {
  epoch: bigint,
  epochPeriod: [bigint, bigint],
  seed: `0x${string}`,
  numberOfActiveExecutors: number,
  commitPhasePeriod: [bigint, bigint],
  revealPhasePeriod: [bigint, bigint],
  roundPeriods: [bigint, bigint][],
  roundBufferPeriods: [bigint, bigint][],
  slashingPhasePeriod: [bigint, bigint],
  selectedExecutors: `0x${string}`[],
  poolBalance: bigint
}

export interface ExecutorInfo {
  balance: bigint;
  active: boolean;
  initialized: boolean;
  arrayIndex: number;
  roundsCheckedInEpoch: number;
  lastCheckinRound: number;
  lastCheckinEpoch: bigint;
  executionsInEpochCreatedBeforeEpoch: bigint;
  stakingTimestamp: bigint;
}

export interface CommitData {
  executor: `0x${string}`,
  commitment: `0x${string}`,
  epoch: bigint,
  revealed: boolean
}

export type FeeCalculationMinimum = {
  feeModule: LinearAuction;
  executionWindow: number;
  nextExecution: bigint;
  feeModuleCode: `0x${string}`;
};

export interface RegularTimeInterval {
  lastExecution: number,
  cooldown: number
}

export interface LinearAuction {
  executionFeeToken: `0x${string}`,
  minExecutionFee: bigint,
  maxExecutionFee: bigint
}

export interface JobSpecification {
  nonce: bigint,
  deadline: bigint,
  reusableNonce: boolean,
  sponsorFallbackToOwner: boolean,
  sponsorCanUpdateFeeModule: boolean,
  application: `0x${string}`,
  executionWindow: number,
  maxExecutions: number,
  ignoreAppRevert: boolean,
  executionModule: `0x${string}`,
  feeModule: `0x${string}`,
  executionModuleInput: `0x${string}`,
  feeModuleInput: `0x${string}`,
  applicationInput: `0x${string}`
}

export interface ProtocolConfig {
  jobRegistry: `0x${string}`,
  coordinator: `0x${string}`,
  querier: `0x${string}`,
  batchSlasher: `0x${string}`,
  executionGasOverhead: bigint,
  executionModulesLength: bigint,
  feeModulesLength: bigint,
  stakingToken: `0x${string}`,
  stakingAmount: bigint,
  minimumStakingPeriod: bigint,
  stakingBalanceThreshold: bigint,
  inactiveSlashingAmount: bigint,
  commitSlashingAmount: bigint,
  roundsPerEpoch: number,
  executorTax: bigint,
  protocolTax: bigint,
  roundDuration: number,
  roundBuffer: number,
  slashingDuration: number,
  commitPhaseDuration: number,
  revealPhaseDuration: number,
  selectionPhaseDuration: number,
  totalRoundDuration: number,
  epochDuration: number
}

export interface FeeModuleInput {
  nonce: bigint,
  deadline: bigint,
  index: bigint,
  feeModule: `0x${string}`,
  feeModuleInput: `0x${string}`
}


export interface ContractFunctionConfig {
  address: Address;
  abi: Abi;
  functionName: string;
  args?: readonly unknown[];
}

export type ContractCallOptions = {
  simulate?: boolean;
  waitForReceipt?: boolean;
  value?: bigint;
  gas?: bigint;
} & (
  | {
      type?: 'legacy';
      gasPrice?: bigint;
    }
  | {
      type: 'eip1559';
      maxFeePerGas?: bigint;
      maxPriorityFeePerGas?: bigint;
  }
)