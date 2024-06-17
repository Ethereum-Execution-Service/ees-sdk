import { TransactionReceipt, PublicClient, WalletClient, WatchEventReturnType } from 'viem';
import { Subscription, SponsorPermit, Payment } from './types';
export declare class Sub2SDK {
    private publicClient;
    private walletClient;
    constructor(publicClient?: PublicClient, walletClient?: WalletClient);
    getSubscriptions(subscriptionIndices: bigint[]): Promise<Subscription[]>;
    cancelSubscription(subscriptionIndex: bigint): Promise<TransactionReceipt>;
    watchIncomingSubscriptions(recipient: `0x${string}`, onNewSubscription: (subscription: Subscription) => any): WatchEventReturnType;
    watchIncomingPayments(recipient: `0x${string}`, onNewPayment: (payment: Payment) => any): WatchEventReturnType;
    watchCanceledSubscriptions(recipient: `0x${string}`, onCanceledSubscription: (subscriptionId: bigint) => any): WatchEventReturnType;
    generateSponsorSignature(sponsorPermit: SponsorPermit): Promise<`0x${string}`>;
    isPayedSubscriber(sender: `0x${string}`, recipient: `0x${string}`, minAmount: bigint, token: `0x${string}`, cooldown: number): Promise<boolean>;
    processBatch(subscriptionIndices: bigint[], feeRecipient: `0x${string}`): Promise<TransactionReceipt>;
    getActiveSubscriptionsToRecipient(recipient: `0x${string}`): Promise<Subscription[]>;
    getActiveSubscriptionsFromSender(sender: `0x${string}`): Promise<Subscription[]>;
    private formatSubscription;
}
