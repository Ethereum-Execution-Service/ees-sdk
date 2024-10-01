import dotenv from 'dotenv';
import { createPublicClient, createWalletClient, http, PublicClient, WalletClient } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { baseSepolia } from 'viem/chains';

dotenv.config();
const { PRIVATE_KEY, ALCHEMY_RPC_URL } = process.env;
 
export const publicClient = createPublicClient({
  batch: {
    multicall: true, 
  },
  chain: baseSepolia,
  transport: http()
});
export const walletClient: WalletClient = createWalletClient({
  account: privateKeyToAccount(`0x${PRIVATE_KEY}`),
  chain: baseSepolia,
  transport: http()
});