"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sub2SDK = void 0;
const viem_1 = require("viem");
const sub2_1 = require("../abis/sub2");
const batchProcessor_1 = require("../abis/batchProcessor");
const querier_1 = require("../abis/querier");
const constants_1 = require("./constants");
class Sub2SDK {
    constructor(publicClient, walletClient) {
        if (publicClient) {
            this.publicClient = publicClient;
        }
        else {
            this.publicClient = undefined;
        }
        if (walletClient) {
            this.walletClient = walletClient;
        }
        else {
            this.walletClient = undefined;
        }
    }
    async getSubscriptions(subscriptionIndices) {
        if (!this.publicClient)
            throw new Error('Public client not provided.');
        try {
            const data = await this.publicClient.readContract({
                address: constants_1.QUERIER_ADDRESS,
                abi: querier_1.querierAbi,
                functionName: 'getSubscriptions',
                args: [subscriptionIndices]
            });
            const subscriptions = [];
            for (let i = 0; i < data.length; i++) {
                const subscription = this.formatSubscription(subscriptionIndices[i], data[i]);
                subscriptions.push(subscription);
            }
            return subscriptions;
        }
        catch (error) {
            console.error(`Error getting subscriptions:`, error);
            if (error instanceof Error) {
                throw new Error(`Failed to get subscriptions: ${error.message}`);
            }
            else {
                throw new Error(`Failed to get subscriptions: ${String(error)}`);
            }
        }
    }
    async cancelSubscription(subscriptionIndex) {
        if (!this.publicClient)
            throw new Error('Public client not provided.');
        if (!this.walletClient)
            throw new Error('Wallet client not provided.');
        const { request } = await this.publicClient.simulateContract({
            address: constants_1.SUB2_ADDRESS,
            abi: sub2_1.sub2Abi,
            functionName: 'cancelSubscription',
            args: [subscriptionIndex],
            account: this.walletClient.account
        });
        if (!request)
            throw new Error('Failed to cancel subscription.');
        const txHash = await this.walletClient.writeContract(request);
        const transaction = await this.publicClient.waitForTransactionReceipt({ hash: txHash });
        return transaction;
    }
    watchIncomingSubscriptions(recipient, onNewSubscription) {
        if (!this.publicClient)
            throw new Error('Public client not provided.');
        const unwatch = this.publicClient.watchEvent({
            address: constants_1.SUB2_ADDRESS,
            event: (0, viem_1.parseAbiItem)('event SubscriptionCreated(uint256 indexed subscriptionIndex, address indexed recipient)'),
            args: {
                recipient: recipient
            },
            onLogs: logs => {
                for (const log of logs) {
                    const subIndex = log.args.subscriptionIndex;
                    this.getSubscriptions([subIndex]).then((sub) => {
                        onNewSubscription(sub[0]);
                    });
                }
            }
        });
        return unwatch;
    }
    watchIncomingPayments(recipient, onNewPayment) {
        if (!this.publicClient)
            throw new Error('Public client not provided.');
        const unwatch = this.publicClient.watchEvent({
            address: constants_1.SUB2_ADDRESS,
            event: (0, viem_1.parseAbiItem)('event Payment(address indexed sender, address indexed recipient, uint256 indexed subscriptionIndex, address sponsor, uint256 amount, address token, uint256 protocolFee, uint256 processingFee, address processingFeeToken, uint256 terms)'),
            args: {
                recipient: recipient
            },
            onLogs: logs => {
                for (const log of logs) {
                    const payment = {
                        sender: log.args.sender,
                        recipient: log.args.recipient,
                        subscriptionIndex: log.args.subscriptionIndex,
                        sponsor: log.args.sponsor,
                        amount: log.args.amount,
                        token: log.args.token,
                        protocolFee: log.args.protocolFee,
                        processingFee: log.args.processingFee,
                        processingFeeToken: log.args.processingFeeToken,
                        terms: log.args.terms
                    };
                    onNewPayment(payment);
                }
            }
        });
        return unwatch;
    }
    watchCanceledSubscriptions(recipient, onCanceledSubscription) {
        if (!this.publicClient)
            throw new Error('Public client not provided. Cannot watch canceled subscriptions.');
        const unwatch = this.publicClient.watchEvent({
            address: constants_1.SUB2_ADDRESS,
            event: (0, viem_1.parseAbiItem)('event SubscriptionCanceled(uint256 indexed subscriptionIndex, address indexed recipient)'),
            args: {
                recipient: recipient
            },
            onLogs: logs => {
                for (const log of logs) {
                    onCanceledSubscription(log.args.subscriptionIndex);
                }
            }
        });
        return unwatch;
    }
    async generateSponsorSignature(sponsorPermit) {
        if (!this.walletClient)
            throw new Error('Wallet client not provided.');
        const signature = await this.walletClient.signTypedData({
            account: this.walletClient.account,
            domain: {
                name: "Sub2",
                chainId: this.walletClient.chain.id,
                verifyingContract: constants_1.SUB2_ADDRESS,
            },
            types: {
                SponsorPermit: [
                    { name: 'nonce', type: 'uint256' },
                    { name: 'deadline', type: 'uint256' },
                    { name: 'recipient', type: 'address' },
                    { name: 'amount', type: 'uint256' },
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
        });
        return signature;
    }
    async isPayedSubscriber(sender, recipient, minAmount, token, cooldown) {
        if (!this.publicClient)
            throw new Error('Public client not provided.');
        const data = await this.publicClient.readContract({
            address: constants_1.QUERIER_ADDRESS,
            abi: querier_1.querierAbi,
            functionName: 'isPayedSubscriber',
            args: [sender, recipient, minAmount, token, cooldown]
        });
        return data;
    }
    async processBatch(subscriptionIndices, feeRecipient) {
        if (!this.publicClient)
            throw new Error('Public client not provided.');
        if (!this.walletClient)
            throw new Error('Wallet client not provided.');
        const { request } = await this.publicClient.simulateContract({
            address: constants_1.BATCH_PROCESSOR_ADDRESS,
            abi: batchProcessor_1.batchProcessorAbi,
            functionName: 'processBatch',
            args: [subscriptionIndices, feeRecipient],
            account: this.walletClient.account
        });
        if (!request)
            throw new Error('Failed to process batch.');
        const txHash = await this.walletClient.writeContract(request);
        const transaction = await this.publicClient.waitForTransactionReceipt({ hash: txHash });
        return transaction;
    }
    async getActiveSubscriptionsToRecipient(recipient) {
        if (!this.publicClient)
            throw new Error('Public client not provided.');
        const data = await this.publicClient.readContract({
            address: constants_1.QUERIER_ADDRESS,
            abi: querier_1.querierAbi,
            functionName: 'getSubscriptionsRecipient',
            args: [recipient]
        });
        const subscriptions = [];
        for (const indexedSub of data) {
            const subscription = this.formatSubscription(indexedSub.index, indexedSub.subscription);
            subscriptions.push(subscription);
        }
        return subscriptions;
    }
    async getActiveSubscriptionsFromSender(sender) {
        if (!this.publicClient)
            throw new Error('Public client not provided.');
        const data = await this.publicClient.readContract({
            address: constants_1.QUERIER_ADDRESS,
            abi: querier_1.querierAbi,
            functionName: 'getSubscriptionsSender',
            args: [sender]
        });
        const subscriptions = [];
        for (const indexedSub of data) {
            const subscription = this.formatSubscription(indexedSub.index, indexedSub.subscription);
            subscriptions.push(subscription);
        }
        return subscriptions;
    }
    formatSubscription(index, sub) {
        const now = Math.floor(Date.now() / 1000);
        let status;
        if (sub.sender === '0x0000000000000000000000000000000000000000') {
            status = 'canceled';
        }
        else if (now < sub.lastPayment + sub.cooldown) {
            status = 'waiting';
        }
        else if (now < sub.lastPayment + sub.cooldown + sub.auctionDuration) {
            status = 'auction';
        }
        else {
            status = 'expired';
        }
        const subscription = {
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
}
exports.Sub2SDK = Sub2SDK;
