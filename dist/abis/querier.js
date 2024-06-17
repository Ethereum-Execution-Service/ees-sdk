"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.querierAbi = void 0;
exports.querierAbi = [{ "type": "constructor", "inputs": [{ "name": "_sub2", "type": "address", "internalType": "contract Sub2" }], "stateMutability": "nonpayable" }, { "type": "function", "name": "getSubscriptions", "inputs": [{ "name": "_subscriptionIndices", "type": "uint256[]", "internalType": "uint256[]" }], "outputs": [{ "name": "", "type": "tuple[]", "internalType": "struct ISub2.Subscription[]", "components": [{ "name": "sender", "type": "address", "internalType": "address" }, { "name": "recipient", "type": "address", "internalType": "address" }, { "name": "amount", "type": "uint256", "internalType": "uint256" }, { "name": "token", "type": "address", "internalType": "address" }, { "name": "maxProcessingFee", "type": "uint256", "internalType": "uint256" }, { "name": "processingFeeToken", "type": "address", "internalType": "address" }, { "name": "lastPayment", "type": "uint40", "internalType": "uint40" }, { "name": "sponsor", "type": "address", "internalType": "address" }, { "name": "cooldown", "type": "uint32", "internalType": "uint32" }, { "name": "auctionDuration", "type": "uint32", "internalType": "uint32" }, { "name": "paymentCounter", "type": "uint16", "internalType": "uint16" }] }], "stateMutability": "view" }, { "type": "function", "name": "getSubscriptionsRecipient", "inputs": [{ "name": "_recipient", "type": "address", "internalType": "address" }], "outputs": [{ "name": "", "type": "tuple[]", "internalType": "struct ISub2.IndexedSubscription[]", "components": [{ "name": "index", "type": "uint256", "internalType": "uint256" }, { "name": "subscription", "type": "tuple", "internalType": "struct ISub2.Subscription", "components": [{ "name": "sender", "type": "address", "internalType": "address" }, { "name": "recipient", "type": "address", "internalType": "address" }, { "name": "amount", "type": "uint256", "internalType": "uint256" }, { "name": "token", "type": "address", "internalType": "address" }, { "name": "maxProcessingFee", "type": "uint256", "internalType": "uint256" }, { "name": "processingFeeToken", "type": "address", "internalType": "address" }, { "name": "lastPayment", "type": "uint40", "internalType": "uint40" }, { "name": "sponsor", "type": "address", "internalType": "address" }, { "name": "cooldown", "type": "uint32", "internalType": "uint32" }, { "name": "auctionDuration", "type": "uint32", "internalType": "uint32" }, { "name": "paymentCounter", "type": "uint16", "internalType": "uint16" }] }] }], "stateMutability": "view" }, { "type": "function", "name": "getSubscriptionsSender", "inputs": [{ "name": "_sender", "type": "address", "internalType": "address" }], "outputs": [{ "name": "", "type": "tuple[]", "internalType": "struct ISub2.IndexedSubscription[]", "components": [{ "name": "index", "type": "uint256", "internalType": "uint256" }, { "name": "subscription", "type": "tuple", "internalType": "struct ISub2.Subscription", "components": [{ "name": "sender", "type": "address", "internalType": "address" }, { "name": "recipient", "type": "address", "internalType": "address" }, { "name": "amount", "type": "uint256", "internalType": "uint256" }, { "name": "token", "type": "address", "internalType": "address" }, { "name": "maxProcessingFee", "type": "uint256", "internalType": "uint256" }, { "name": "processingFeeToken", "type": "address", "internalType": "address" }, { "name": "lastPayment", "type": "uint40", "internalType": "uint40" }, { "name": "sponsor", "type": "address", "internalType": "address" }, { "name": "cooldown", "type": "uint32", "internalType": "uint32" }, { "name": "auctionDuration", "type": "uint32", "internalType": "uint32" }, { "name": "paymentCounter", "type": "uint16", "internalType": "uint16" }] }] }], "stateMutability": "view" }, { "type": "function", "name": "isPayedSubscriber", "inputs": [{ "name": "_sender", "type": "address", "internalType": "address" }, { "name": "_recipient", "type": "address", "internalType": "address" }, { "name": "_minAmount", "type": "uint256", "internalType": "uint256" }, { "name": "_token", "type": "address", "internalType": "address" }, { "name": "_cooldown", "type": "uint32", "internalType": "uint32" }], "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }], "stateMutability": "view" }, { "type": "function", "name": "sub2", "inputs": [], "outputs": [{ "name": "", "type": "address", "internalType": "contract Sub2" }], "stateMutability": "view" }];
