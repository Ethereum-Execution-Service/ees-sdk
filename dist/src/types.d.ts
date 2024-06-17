export interface Subscription {
    id: bigint;
    sender: `0x${string}`;
    recipient: `0x${string}`;
    sponsor: `0x${string}`;
    amount: bigint;
    token: `0x${string}`;
    maxProcessingFee: bigint;
    processingFeeToken: `0x${string}`;
    cooldown: number;
    auctionDuration: number;
    paymentCounter: number;
    status: 'canceled' | 'expired' | 'auction' | 'waiting';
    lastPayment: Date;
    nextPaymentAvailable: Date;
    nextPaymentDue: Date;
}
export interface SponsorPermit {
    nonce: bigint;
    deadline: bigint;
    recipient: `0x${string}`;
    amount: bigint;
    token: `0x${string}`;
    cooldown: number;
    delay: number;
    auctionDuration: number;
    initialPayments: number;
    maxProcessingFee: bigint;
    processingFeeToken: `0x${string}`;
}
export interface Payment {
    sender: `0x${string}`;
    recipient: `0x${string}`;
    subscriptionIndex: bigint;
    sponsor: `0x${string}`;
    amount: bigint;
    token: `0x${string}`;
    protocolFee: bigint;
    processingFee: bigint;
    processingFeeToken: `0x${string}`;
    terms: bigint;
}
