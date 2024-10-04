export const querierAbi = [{"type":"constructor","inputs":[{"name":"_jobRegistry","type":"address","internalType":"contract JobRegistry"},{"name":"_executionManager","type":"address","internalType":"contract ExecutionManager"}],"stateMutability":"nonpayable"},{"type":"function","name":"getCommitData","inputs":[{"name":"_executors","type":"address[]","internalType":"address[]"}],"outputs":[{"name":"","type":"tuple[]","internalType":"struct IExecutionManager.CommitData[]","components":[{"name":"commitment","type":"bytes32","internalType":"bytes32"},{"name":"epoch","type":"uint192","internalType":"uint192"},{"name":"revealed","type":"bool","internalType":"bool"}]}],"stateMutability":"view"},{"type":"function","name":"getCurrentEpochInfo","inputs":[],"outputs":[{"name":"","type":"uint192","internalType":"uint192"},{"name":"","type":"uint256","internalType":"uint256"},{"name":"","type":"bytes32","internalType":"bytes32"},{"name":"","type":"uint40","internalType":"uint40"},{"name":"","type":"address[]","internalType":"address[]"}],"stateMutability":"view"},{"type":"function","name":"getExecutors","inputs":[{"name":"_executors","type":"address[]","internalType":"address[]"}],"outputs":[{"name":"","type":"tuple[]","internalType":"struct IExecutionManager.Executor[]","components":[{"name":"balance","type":"uint256","internalType":"uint256"},{"name":"active","type":"bool","internalType":"bool"},{"name":"initialized","type":"bool","internalType":"bool"},{"name":"arrayIndex","type":"uint40","internalType":"uint40"},{"name":"lastCheckinRound","type":"uint8","internalType":"uint8"},{"name":"lastCheckinEpoch","type":"uint192","internalType":"uint192"},{"name":"stakingTimestamp","type":"uint256","internalType":"uint256"}]}],"stateMutability":"view"},{"type":"function","name":"getJobs","inputs":[{"name":"_indices","type":"uint256[]","internalType":"uint256[]"}],"outputs":[{"name":"","type":"tuple[]","internalType":"struct IQuerier.JobData[]","components":[{"name":"index","type":"uint256","internalType":"uint256"},{"name":"owner","type":"address","internalType":"address"},{"name":"active","type":"bool","internalType":"bool"},{"name":"ignoreAppRevert","type":"bool","internalType":"bool"},{"name":"inactiveGracePeriod","type":"uint40","internalType":"uint40"},{"name":"sponsor","type":"address","internalType":"address"},{"name":"executionCounter","type":"uint48","internalType":"uint48"},{"name":"maxExecutions","type":"uint48","internalType":"uint48"},{"name":"application","type":"address","internalType":"contract IApplication"},{"name":"executionModule","type":"bytes1","internalType":"bytes1"},{"name":"feeModule","type":"bytes1","internalType":"bytes1"},{"name":"executionWindow","type":"uint32","internalType":"uint32"},{"name":"executionModuleData","type":"bytes","internalType":"bytes"},{"name":"feeModuleData","type":"bytes","internalType":"bytes"},{"name":"jobIsExpired","type":"bool","internalType":"bool"},{"name":"jobInExecutionWindow","type":"bool","internalType":"bool"}]}],"stateMutability":"view"}] as const;