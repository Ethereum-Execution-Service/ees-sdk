import dotenv from 'dotenv';
import { createPublicClient, createWalletClient, http, PublicClient, WalletClient } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { baseSepolia } from 'viem/chains';

dotenv.config();
const { PRIVATE_KEY, ALCHEMY_RPC_URL } = process.env;
 
export const publicClient: PublicClient = createPublicClient({
  chain: baseSepolia,
  transport: http()
}) as PublicClient;
export const walletClient: WalletClient = createWalletClient({
  // DELETE THIS BEFORE PUSHING TO GITHUB
  account: privateKeyToAccount(`0x17d67721cfbb1c8c1be991cb023c03e1232ea755e247b1a723787879f5a5514f`),
  chain: baseSepolia,
  transport: http()
});