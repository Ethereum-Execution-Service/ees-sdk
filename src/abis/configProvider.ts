export const configProviderAbi = [{"type":"constructor","inputs":[{"name":"_jobRegistry","type":"address","internalType":"contract JobRegistry"},{"name":"_executionManager","type":"address","internalType":"contract ExecutionManager"},{"name":"_querier","type":"address","internalType":"contract Querier"}],"stateMutability":"nonpayable"},{"type":"function","name":"executionManager","inputs":[],"outputs":[{"name":"","type":"address","internalType":"contract ExecutionManager"}],"stateMutability":"view"},{"type":"function","name":"getConfig","inputs":[],"outputs":[{"name":"","type":"bytes","internalType":"bytes"},{"name":"","type":"bytes","internalType":"bytes"},{"name":"","type":"bytes","internalType":"bytes"}],"stateMutability":"view"},{"type":"function","name":"jobRegistry","inputs":[],"outputs":[{"name":"","type":"address","internalType":"contract JobRegistry"}],"stateMutability":"view"},{"type":"function","name":"querier","inputs":[],"outputs":[{"name":"","type":"address","internalType":"contract Querier"}],"stateMutability":"view"}] as const;