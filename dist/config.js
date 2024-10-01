"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.walletClient = exports.publicClient = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const viem_1 = require("viem");
const accounts_1 = require("viem/accounts");
const chains_1 = require("viem/chains");
dotenv_1.default.config();
const { PRIVATE_KEY, ALCHEMY_RPC_URL } = process.env;
exports.publicClient = (0, viem_1.createPublicClient)({
    batch: {
        multicall: true,
    },
    chain: chains_1.baseSepolia,
    transport: (0, viem_1.http)()
});
exports.walletClient = (0, viem_1.createWalletClient)({
    account: (0, accounts_1.privateKeyToAccount)(`0x${PRIVATE_KEY}`),
    chain: chains_1.baseSepolia,
    transport: (0, viem_1.http)()
});
