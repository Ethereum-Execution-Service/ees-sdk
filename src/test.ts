
import { baseSepolia } from 'viem/chains';
import { Sub2SDK } from './index';
import dotenv from 'dotenv';
import { Subscription, SponsorPermit } from './types';
import { ethers } from 'ethers';
import { createPublicClient, createWalletClient, parseUnits, http, PublicClient, WalletClient } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';

dotenv.config();
const { ALCHEMY_RPC_URL, PRIVATE_KEY } = process.env;

async function test() {

  const publicClient: PublicClient = createPublicClient({
    chain: baseSepolia,
    transport: http(ALCHEMY_RPC_URL!)
  }) as PublicClient;
  const walletClient: WalletClient = createWalletClient({
    account: privateKeyToAccount(`0x${PRIVATE_KEY!.substring(2)}`),
    chain: baseSepolia,
    transport: http(ALCHEMY_RPC_URL!)
  });

  const sub2 = new Sub2SDK(publicClient, walletClient);

  //const subs: Subscription[] = await sub2.getSubscriptions([0n,1n]);
  //console.log(subs);


  //const unwatch = sub2.watchIncommingSubscriptions('0x8bCAC48d9cC2075917e1F1A831Df954214f7d6f9', (sub: Subscription) => {console.log('New subscription created: ', sub)});
  //const unwatch = sub2.watchCanceledSubscriptions('0x8bCAC48d9cC2075917e1F1A831Df954214f7d6f9', (subId: bigint) => {console.log('Subscription canceled: ', subId)});

  const sponsorPermit: SponsorPermit = {
    nonce: 0n,
    deadline: ethers.MaxUint256,
    recipient: '0x8bCAC48d9cC2075917e1F1A831Df954214f7d6f9',
    amount: 10000000000000000000n,
    token: '0x701f372f2A10688c4f3e31E20ceabC1f3A88ac2c',
    cooldown: 2592000,
    delay: 0,
    auctionDuration: 1800,
    initialPayments: 1,
    maxProcessingFee: 10000000000000000n,
    processingFeeToken: '0x7139F4601480d20d43Fa77780B67D295805aD31a',
  }



  const sig = await sub2.generateSponsorSignature(sponsorPermit);
  console.log(sig);
  
  //await sub2.testSimulateContract();
  //await sub2.testWriteContract();

  //const receipt = await sub2.cancelSubscription()

  // DAI
  //const hasPayedSub: boolean = await sub2.isPayedSubscriber('0x07B8F5253b0773450Eebd6095D320c2c6B4b7ae1', '0x8bCAC48d9cC2075917e1F1A831Df954214f7d6f9', parseUnits('10', 18), '0x701f372f2A10688c4f3e31E20ceabC1f3A88ac2c', 2592000);
  //console.log(hasPayedSub);

  //const subscriptions: Subscription[] = await sub2.getActiveSubscriptionsToRecipient('0x8bCAC48d9cC2075917e1F1A831Df954214f7d6f9');
  //console.log(subscriptions);

  //const subscriptions: Subscription[] = await sub2.getActiveSubscriptionsFromSender('0x07B8F5253b0773450Eebd6095D320c2c6B4b7ae1');
  //console.log(subscriptions);
}

test();