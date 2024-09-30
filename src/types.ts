import { SimulateContractParameters } from 'viem';

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

export interface FeeModuleInput {
  nonce: bigint,
  deadline: bigint,
  index: bigint,
  feeModule: `0x${string}`,
  feeModuleInput: `0x${string}`
}


export type ContractCallOptions = Partial<Omit<SimulateContractParameters, 'address' | 'abi' | 'functionName' | 'args' | 'account'>>;
