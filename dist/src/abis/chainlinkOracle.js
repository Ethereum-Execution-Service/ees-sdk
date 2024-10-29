"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chainlinkOracleAbi = void 0;
exports.chainlinkOracleAbi = [{ "type": "constructor", "inputs": [{ "name": "_ethUsdPriceFeed", "type": "address", "internalType": "address" }], "stateMutability": "nonpayable" }, { "type": "function", "name": "getPrice", "inputs": [{ "name": "_token", "type": "address", "internalType": "address" }, { "name": "_data", "type": "bytes", "internalType": "bytes" }], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }, { "name": "", "type": "bool", "internalType": "bool" }], "stateMutability": "view" }];
