import { TransactionReceipt, PublicClient, WalletClient, parseAbiItem, encodePacked, keccak256, WatchEventReturnType, Account } from 'viem';
import { Subscription, SponsorPermit } from './types';
import { sub2Abi } from '../abis/sub2';
import { batchProcessorAbi } from '../abis/batchProcessor';
import { querierAbi } from '../abis/querier';
import { SUB2_ADDRESS, BATCH_PROCESSOR_ADDRESS, QUERIER_ADDRESS } from './constants';
import { ethers } from 'ethers';

export class Sub2SDK {
  private publicClient: PublicClient | undefined;
  private walletClient: WalletClient | undefined;

  constructor(publicClient?: PublicClient, walletClient?: WalletClient) {
    if(publicClient) {
      this.publicClient = publicClient;
    }
    else {
      this.publicClient = undefined;
    }

    if(walletClient) {
      this.walletClient = walletClient;
    }
    else {
      this.walletClient = undefined;
    }
  }

  async getSubscriptions(subscriptionIndices: bigint[]) : Promise<Subscription[]> {
    if(!this.publicClient) throw new Error('Public client not provided.');
    try {
      const data = await this.publicClient.readContract({
        address: QUERIER_ADDRESS,
        abi: querierAbi,
        functionName: 'getSubscriptions',
        args: [subscriptionIndices]
      });

      const subscriptions: Subscription[] = [];
      for(let i=0; i < data.length; i++) {
        const subscription : Subscription = this.formatSubscription(subscriptionIndices[i], data[i]);
        subscriptions.push(subscription);
      }
      return subscriptions;
    } catch (error) {

      console.error(`Error getting subscriptions:`, error);

      if (error instanceof Error) {
        throw new Error(`Failed to get subscriptions: ${error.message}`);
      } else {
        throw new Error(`Failed to get subscriptions: ${String(error)}`);
      }
    }
  }

  async cancelSubscription(subscriptionIndex: bigint) : Promise<TransactionReceipt> {
    if(!this.publicClient) throw new Error('Public client not provided.');
    if(!this.walletClient) throw new Error('Wallet client not provided.');

    const { request } = await this.publicClient.simulateContract({
      address: SUB2_ADDRESS,
      abi: sub2Abi,
      functionName: 'cancelSubscription',
      args: [subscriptionIndex],
      account: this.walletClient.account as `0x${string}` | Account
    });

    if(!request) throw new Error('Failed to cancel subscription.')

    const txHash: `0x${string}` = await this.walletClient.writeContract(request);

    const transaction: TransactionReceipt = await this.publicClient.waitForTransactionReceipt( 
      { hash: txHash }
    )

    return transaction;
  }


  watchIncommingSubscriptions(recipient: `0x${string}`, onNewSubscription: (subscription: Subscription) => any) : WatchEventReturnType {
    if(!this.publicClient) throw new Error('Public client not provided.');
    const unwatch: WatchEventReturnType = this.publicClient.watchEvent({
      address: SUB2_ADDRESS,
      event: parseAbiItem('event SubscriptionCreated(uint256 indexed subscriptionIndex, address indexed recipient)'),
      args: {
        recipient: recipient
      },
      onLogs: logs => {
        for (const log of logs) {
          const subIndex: bigint = log.args.subscriptionIndex!;

          this.getSubscriptions([subIndex]).then((sub: Subscription[]) => {
            onNewSubscription(sub[0]);
          });
        }
      }
    });

    return unwatch;
  }

  watchIncommingPayments(recipient: `0x${string}`, onNewPayment: (subscriptionId: bigint) => any) : WatchEventReturnType {
    if(!this.publicClient) throw new Error('Public client not provided.');
    const unwatch: WatchEventReturnType = this.publicClient.watchEvent({
      address: SUB2_ADDRESS,
      event: parseAbiItem('event Payment(address indexed sender, address indexed recipient, uint256 indexed subscriptionIndex, address sponsor, uint256 amount, address token, uint256 protocolFee, uint256 processingFee, address processingFeeToken, uint256 terms)'),
      args: {
        recipient: recipient
      },
      onLogs: logs => {
        for (const log of logs) {
          onNewPayment(log.args.subscriptionIndex!);
        }
      }
    });

    return unwatch;
  }


  watchCanceledSubscriptions(recipient: `0x${string}`, onCanceledSubscription: (subscriptionId: bigint) => any) : WatchEventReturnType {
    if(!this.publicClient) throw new Error('Public client not provided. Cannot watch canceled subscriptions.');
    const unwatch: WatchEventReturnType = this.publicClient!.watchEvent({
      address: SUB2_ADDRESS,
      event: parseAbiItem('event SubscriptionCanceled(uint256 indexed subscriptionIndex, address indexed recipient)'),
      args: {
        recipient: recipient
      },
      onLogs: logs => {
        for (const log of logs) {
          onCanceledSubscription(log.args.subscriptionIndex!);
        }
      }
    });

    return unwatch;
  }

  async generateSponsorSignature(sponsorPermit: SponsorPermit) : Promise<`0x${string}`> {
    
    if(!this.walletClient) throw new Error('Wallet client not provided.');
    
    const signature = await this.walletClient.signTypedData({
      account: this.walletClient.account as `0x${string}` | Account,
      domain: {
        name: "Sub2",
        chainId: this.walletClient.chain!.id,
        verifyingContract: SUB2_ADDRESS,
      },
      types: {
        SponsorPermit: [
          { name: 'nonce', type: 'uint256' },
          { name: 'deadline', type: 'uint256' },
          { name: 'recipient', type: 'address' },
          { name: 'amount', type: 'uint256'},
          { name: 'token', type: 'address' },
          { name: 'cooldown', type: 'uint32' },
          { name: 'delay', type: 'uint32' },
          { name: 'auctionDuration', type: 'uint32' },
          { name: 'initialPayments', type: 'uint16' },
          { name: 'maxProcessingFee', type: 'uint256' },
          { name: 'processingFeeToken', type: 'address' }
        ],
      },
      primaryType: 'SponsorPermit',
      message: {
        nonce: sponsorPermit.nonce,
        deadline: sponsorPermit.deadline,
        recipient: sponsorPermit.recipient,
        amount: sponsorPermit.amount,
        token: sponsorPermit.token,
        cooldown: sponsorPermit.cooldown,
        delay: sponsorPermit.delay,
        initialPayments: sponsorPermit.initialPayments,
        maxProcessingFee: sponsorPermit.maxProcessingFee,
        processingFeeToken: sponsorPermit.processingFeeToken,
        auctionDuration: sponsorPermit.auctionDuration
      },
    })

    return signature;
  }

  
  async isPayedSubscriber(sender: `0x${string}`, recipient: `0x${string}`, minAmount: bigint, token: `0x${string}`, cooldown: number) : Promise<boolean> {
    if(!this.publicClient) throw new Error('Public client not provided.');
    const data = await this.publicClient.readContract({
      address: QUERIER_ADDRESS,
      abi: querierAbi,
      functionName: 'isPayedSubscriber',
      args: [sender, recipient, minAmount, token, cooldown]
    });
    return data;
  }
  


  async processBatch(subscriptionIndices: bigint[], feeRecipient: `0x${string}`) : Promise<TransactionReceipt> {
    if(!this.publicClient) throw new Error('Public client not provided.');
    if(!this.walletClient) throw new Error('Wallet client not provided.');

    const { request } = await this.publicClient.simulateContract({
      address: BATCH_PROCESSOR_ADDRESS,
      abi: batchProcessorAbi,
      functionName: 'processBatch',
      args: [subscriptionIndices, feeRecipient],
      account: this.walletClient.account as `0x${string}` | Account
    });

    if(!request) throw new Error('Failed to process batch.')

    const txHash: `0x${string}` = await this.walletClient.writeContract(request);

    const transaction: TransactionReceipt = await this.publicClient.waitForTransactionReceipt( 
      { hash: txHash }
    )

    return transaction;
  }


  async getActiveSubscriptionsToRecipient(recipient: `0x${string}`) : Promise<Subscription[]> {
    if(!this.publicClient) throw new Error('Public client not provided.');
    const data = await this.publicClient.readContract({
      address: QUERIER_ADDRESS,
      abi: querierAbi,
      functionName: 'getSubscriptionsRecipient',
      args: [recipient]
    });

    const subscriptions: Subscription[] = [];
    for(const indexedSub of data) {
      const subscription : Subscription = this.formatSubscription(indexedSub.index, indexedSub.subscription);
      subscriptions.push(subscription);
    }
    return subscriptions;
  }

  async getActiveSubscriptionsFromSender(sender: `0x${string}`) : Promise<Subscription[]> {
    if(!this.publicClient) throw new Error('Public client not provided.');
    const data = await this.publicClient.readContract({
      address: QUERIER_ADDRESS,
      abi: querierAbi,
      functionName: 'getSubscriptionsSender',
      args: [sender]
    });

    const subscriptions: Subscription[] = [];
    for(const indexedSub of data) {
      const subscription : Subscription = this.formatSubscription(indexedSub.index, indexedSub.subscription);
      subscriptions.push(subscription);
    }
    return subscriptions;
  }


  private formatSubscription(index: bigint, sub: {
    sender: `0x${string}`;
    recipient: `0x${string}`;
    amount: bigint;
    token: `0x${string}`;
    maxProcessingFee: bigint;
    processingFeeToken: `0x${string}`;
    lastPayment: number;
    sponsor: `0x${string}`;
    cooldown: number;
    auctionDuration: number;
    paymentCounter: number;
  }) : Subscription {
    const now = Math.floor(Date.now() / 1000);
    let status: "canceled" | "waiting" | "auction" | "expired";

    if (sub.sender === '0x0000000000000000000000000000000000000000') {
      status = 'canceled';
    } else if (now < sub.lastPayment + sub.cooldown) {
      status = 'waiting';
    } else if (now < sub.lastPayment + sub.cooldown + sub.auctionDuration) {
      status = 'auction';
    } else {
      status = 'expired';
    }

    const subscription: Subscription = {
      id: index,
      sender: sub.sender,
      recipient: sub.recipient,
      sponsor: sub.sponsor,
      amount: sub.amount,
      token: sub.token,
      maxProcessingFee: sub.maxProcessingFee,
      processingFeeToken: sub.processingFeeToken,
      cooldown: sub.cooldown,
      auctionDuration: sub.auctionDuration,
      paymentCounter: sub.paymentCounter,
      status: status,
      lastPayment: new Date(Number(sub.lastPayment) * 1000),
      nextPaymentAvailable: new Date(Number(sub.lastPayment + sub.cooldown) * 1000),
      nextPaymentDue: new Date(Number(sub.lastPayment + sub.cooldown + sub.auctionDuration) * 1000)
    };

    return subscription;
  }






  async testSimulateContract() {
    if(!this.publicClient) throw new Error('Public client not provided.');
    if(!this.walletClient) throw new Error('Wallet client not provided.');
    const data = await this.publicClient.simulateContract({
      account: this.walletClient.account as `0x${string}` | Account,
      address: SUB2_ADDRESS,
      abi: sub2Abi,
      functionName: 'createSubscriptionWithSponsor',
      args: [{
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
          processingFeeToken: '0x7139F4601480d20d43Fa77780B67D295805aD31a'
      },
        '0x303cAE9641B868722194Bd9517eaC5ca2ad6e71a',
        '0xe2798e166c7b1f56cbf4571f00947aa7be1132ac3e29992307e2a01db3cbbb522c2307e3f26e92c42d2b4e33f50bfe4c9d12584a27e94f2ca0bf817d4754a80e1b',
        // index
        ethers.MaxUint256
      ]
    });

    console.log(data);
  }


  async testWriteContract() {
    if(!this.publicClient) throw new Error('Public client not provided.');
    if(!this.walletClient) throw new Error('Wallet client not provided.');

    const { request } = await this.publicClient.simulateContract({
      account: this.walletClient.account as `0x${string}` | Account,
      address: SUB2_ADDRESS,
      abi: sub2Abi,
      functionName: 'createSubscriptionWithSponsor',
      args: [{
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
          processingFeeToken: '0x7139F4601480d20d43Fa77780B67D295805aD31a'
      },
        '0x303cAE9641B868722194Bd9517eaC5ca2ad6e71a',
        '0xe2798e166c7b1f56cbf4571f00947aa7be1132ac3e29992307e2a01db3cbbb522c2307e3f26e92c42d2b4e33f50bfe4c9d12584a27e94f2ca0bf817d4754a80e1b',
        // index
        ethers.MaxUint256
      ]
    });
    const res = await this.walletClient.writeContract(request);
    console.log(res);
  }

  


}