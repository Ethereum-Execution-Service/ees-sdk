import { SimulateContractParameters, Address, Abi } from 'viem';

export interface Job {
  index: bigint;
  owner: `0x${string}`,
  sponsor: `0x${string}`,
  active: boolean,
  ignoreAppRevert: boolean,
  inactiveGracePeriod: number,
  application: `0x${string}`,
  executionWindow: number,
  executionCounter: number,
  maxExecutions: number,
  executionModuleCode: `0x${string}`,
  feeModuleCode: `0x${string}`,
  executionModule: RegularTimeInterval,
  feeModule: LinearAuction,
  jobIsExpired: boolean,
  jobInExecutionWindow: boolean,
  nextExecution: bigint
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
  application: `0x${string}`,
  executionWindow: number,
  maxExecutions: number,
  inactiveGracePeriod: number,
  ignoreAppRevert: boolean,
  executionModule: `0x${string}`,
  feeModule: `0x${string}`,
  executionModuleInput: `0x${string}`,
  feeModuleInput: `0x${string}`,
  applicationInput: `0x${string}`
}

export interface ProtocolConfig {
  jobRegistry: `0x${string}`,
  executionManager: `0x${string}`,
  querier: `0x${string}`,
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

export type ContractCallOptions = Partial<Omit<SimulateContractParameters, 'address' | 'abi' | 'functionName' | 'args' | 'account'>>;
