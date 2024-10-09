export const configProviderAbi = [{"type":"constructor","inputs":[{"name":"_jobRegistry","type":"address","internalType":"contract JobRegistry"},{"name":"_coordinator","type":"address","internalType":"contract Coordinator"},{"name":"_querier","type":"address","internalType":"contract Querier"},{"name":"_batchSlasher","type":"address","internalType":"contract BatchSlasher"}],"stateMutability":"nonpayable"},{"type":"function","name":"batchSlasher","inputs":[],"outputs":[{"name":"","type":"address","internalType":"contract BatchSlasher"}],"stateMutability":"view"},{"type":"function","name":"coordinator","inputs":[],"outputs":[{"name":"","type":"address","internalType":"contract Coordinator"}],"stateMutability":"view"},{"type":"function","name":"getConfig","inputs":[],"outputs":[{"name":"","type":"bytes","internalType":"bytes"},{"name":"","type":"bytes","internalType":"bytes"},{"name":"","type":"bytes","internalType":"bytes"}],"stateMutability":"view"},{"type":"function","name":"jobRegistry","inputs":[],"outputs":[{"name":"","type":"address","internalType":"contract JobRegistry"}],"stateMutability":"view"},{"type":"function","name":"querier","inputs":[],"outputs":[{"name":"","type":"address","internalType":"contract Querier"}],"stateMutability":"view"}] as const;