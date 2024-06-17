import { TransactionReceipt, PublicClient, WalletClient, WatchEventReturnType } from 'viem';
import { Subscription, SponsorPermit, Payment } from './types';

/**
 * Interface of Sub2SDK.
 */
export interface Sub2SDK {
  /**
   * Creates an instance of Sub2SDK.
   * @param publicClient - The public client instance.
   * @param walletClient - The wallet client instance.
   */
  constructor(publicClient?: PublicClient, walletClient?: WalletClient);

  /**
   * Retrieves subscriptions based on their indices.
   * @throws An error if the class was not initialized with a publicClient.
   * @param subscriptionIndices - An array of subscription indices.
   * @returns A promise that resolves to an array of Subscription objects.
   */
  getSubscriptions(subscriptionIndices: bigint[]): Promise<Subscription[]>;

  /**
   * Watches for incoming subscriptions for a recipient.
   * @throws An error if the class was not initialized with a publicClient.
   * @param recipient - The recipient address to watch for subscriptions.
   * @param callback - A callback function to handle incoming subscriptions.
   * @returns A WatchEventReturnType object.
   */
  watchIncomingSubscriptions(recipient: `0x${string}`, callback: (subscription: Subscription) => void): WatchEventReturnType;

  /**
   * Watches for canceled subscriptions for a recipient.
   * @throws An error if the class was not initialized with a publicClient.
   * @param recipient - The recipient address to watch for canceled subscriptions.
   * @param callback - A callback function to handle canceled subscriptions.
   * @returns A WatchEventReturnType object.
   */
  watchCanceledSubscriptions(recipient: `0x${string}`, callback: (subscriptionId: bigint) => void): WatchEventReturnType;

  /**
   * Watches for incoming payments for a recipient.
   * @throws An error if the class was not initialized with a publicClient.
   * @param recipient - The recipient address to watch for payments.
   * @param onNewPayment - A callback function to handle incoming payments.
   * @returns A WatchEventReturnType object.
   */
  watchIncomingPayments(recipient: `0x${string}`, onNewPayment: (payment: Payment) => any) : WatchEventReturnType

  /**
   * Generates a sponsor signature for a given sponsor permit.
   * @throws An error if the class was not initialized with a walletClient.
   * @param sponsorPermit - The sponsor permit to generate a signature for.
   * @returns A promise that resolves to the generated signature string.
   */
  generateSponsorSignature(sponsorPermit: SponsorPermit): Promise<`0x${string}`>;

  /**
   * Cancels a subscription based on its index. This will send an on-chain transaction.
   * @throws An error if the class was not initialized with a publicClient and walletClient.
   * @param subscriptionIndex - The index of the subscription to cancel.
   * @returns A promise that resolves to a TransactionReceipt object.
   */
  cancelSubscription(subscriptionIndex: bigint): Promise<TransactionReceipt>;

  /**
   * Checks if a sender is a paid subscriber to a recipient.
   * @throws An error if the class was not initialized with a publicClient.
   * @param sender - The sender address.
   * @param recipient - The recipient address.
   * @param minAmount - The minimum subscription amount.
   * @param token - The token address.
   * @param cooldown - The cooldown period.
   * @returns A promise that resolves to a boolean indicating if the sender is a paid subscriber given the arguments.
   */
  isPayedSubscriber(sender: `0x${string}`, recipient: `0x${string}`, minAmount: bigint, token: `0x${string}`, cooldown: number) : Promise<boolean>;

  /**
   * Retrieves active subscriptions for a recipient.
   * @throws An error if the class was not initialized with a publicClient.
   * @param recipient - The recipient address.
   * @returns A promise that resolves to an array of active Subscription objects.
   */
  getActiveSubscriptionsToRecipient(recipient: `0x${string}`): Promise<Subscription[]>;

  /**
   * Retrieves active subscriptions from a sender.
   * @throws An error if the class was not initialized with a publicClient.
   * @param sender - The sender address.
   * @returns A promise that resolves to an array of active Subscription objects.
   */
  getActiveSubscriptionsFromSender(sender: `0x${string}`): Promise<Subscription[]>;

  /**
   * Processes a batch of subscriptions. This will send an on-chain transaction.
   * @throws An error if the class was not initialized with a publicClient and walletClient.
   * @returns A promise that resolves to the a transaction receipt.
   */
  processBatch(subscriptionIndices: bigint[], feeRecipient: `0x${string}`) : Promise<TransactionReceipt>
}
