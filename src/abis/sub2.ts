export const sub2Abi = [{"type":"constructor","inputs":[{"name":"_treasury","type":"address","internalType":"address"},{"name":"_treasuryBasisPoints","type":"uint16","internalType":"uint16"},{"name":"_owner","type":"address","internalType":"address"}],"stateMutability":"nonpayable"},{"type":"function","name":"DOMAIN_SEPARATOR","inputs":[],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"view"},{"type":"function","name":"FEE_BASE","inputs":[],"outputs":[{"name":"","type":"uint32","internalType":"uint32"}],"stateMutability":"view"},{"type":"function","name":"calculateFee","inputs":[{"name":"_amount","type":"uint256","internalType":"uint256"},{"name":"_basisPoints","type":"uint16","internalType":"uint16"}],"outputs":[{"name":"fee","type":"uint256","internalType":"uint256"}],"stateMutability":"pure"},{"type":"function","name":"cancelExpiredSubscription","inputs":[{"name":"_subscriptionIndex","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"cancelSubscription","inputs":[{"name":"_subscriptionIndex","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"createSubscription","inputs":[{"name":"_recipient","type":"address","internalType":"address"},{"name":"_amount","type":"uint256","internalType":"uint256"},{"name":"_token","type":"address","internalType":"address"},{"name":"_cooldown","type":"uint32","internalType":"uint32"},{"name":"_maxProcessingFee","type":"uint256","internalType":"uint256"},{"name":"_processingFeeToken","type":"address","internalType":"address"},{"name":"_auctionDuration","type":"uint32","internalType":"uint32"},{"name":"_delay","type":"uint32","internalType":"uint32"},{"name":"_initialPayments","type":"uint16","internalType":"uint16"},{"name":"_index","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"subscriptionIndex","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"createSubscriptionWithSponsor","inputs":[{"name":"_permit","type":"tuple","internalType":"struct ISub2.SponsorPermit","components":[{"name":"nonce","type":"uint256","internalType":"uint256"},{"name":"deadline","type":"uint256","internalType":"uint256"},{"name":"recipient","type":"address","internalType":"address"},{"name":"amount","type":"uint256","internalType":"uint256"},{"name":"token","type":"address","internalType":"address"},{"name":"cooldown","type":"uint32","internalType":"uint32"},{"name":"delay","type":"uint32","internalType":"uint32"},{"name":"auctionDuration","type":"uint32","internalType":"uint32"},{"name":"initialPayments","type":"uint16","internalType":"uint16"},{"name":"maxProcessingFee","type":"uint256","internalType":"uint256"},{"name":"processingFeeToken","type":"address","internalType":"address"}]},{"name":"_sponsor","type":"address","internalType":"address"},{"name":"_signature","type":"bytes","internalType":"bytes"},{"name":"_index","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"subscriptionIndex","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"getNumberOfSubscriptions","inputs":[],"outputs":[{"name":"numberOfSubscriptions","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"invalidateUnorderedNonces","inputs":[{"name":"wordPos","type":"uint256","internalType":"uint256"},{"name":"mask","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"nonceBitmap","inputs":[{"name":"","type":"address","internalType":"address"},{"name":"","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"owner","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"processPayment","inputs":[{"name":"_subscriptionIndex","type":"uint256","internalType":"uint256"},{"name":"_feeRecipient","type":"address","internalType":"address"}],"outputs":[{"name":"processingFee","type":"uint256","internalType":"uint256"},{"name":"processingToken","type":"address","internalType":"address"}],"stateMutability":"nonpayable"},{"type":"function","name":"recipientSubscriptionNonce","inputs":[{"name":"","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint32","internalType":"uint32"}],"stateMutability":"view"},{"type":"function","name":"recipientToSubscriptionIndex","inputs":[{"name":"","type":"address","internalType":"address"},{"name":"","type":"uint32","internalType":"uint32"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"revokeSponsorship","inputs":[{"name":"_subscriptionIndex","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setTreasury","inputs":[{"name":"_treasury","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setTreasuryFeeBasisPoints","inputs":[{"name":"_treasuryFeeBasisPoints","type":"uint16","internalType":"uint16"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"subscriptionHashToNonce","inputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"outputs":[{"name":"","type":"uint32","internalType":"uint32"}],"stateMutability":"view"},{"type":"function","name":"subscriptionHashToSubscriptionIndex","inputs":[{"name":"","type":"bytes32","internalType":"bytes32"},{"name":"","type":"uint32","internalType":"uint32"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"subscriptions","inputs":[{"name":"","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"sender","type":"address","internalType":"address"},{"name":"recipient","type":"address","internalType":"address"},{"name":"amount","type":"uint256","internalType":"uint256"},{"name":"token","type":"address","internalType":"address"},{"name":"maxProcessingFee","type":"uint256","internalType":"uint256"},{"name":"processingFeeToken","type":"address","internalType":"address"},{"name":"lastPayment","type":"uint40","internalType":"uint40"},{"name":"sponsor","type":"address","internalType":"address"},{"name":"cooldown","type":"uint32","internalType":"uint32"},{"name":"auctionDuration","type":"uint32","internalType":"uint32"},{"name":"paymentCounter","type":"uint16","internalType":"uint16"}],"stateMutability":"view"},{"type":"function","name":"transferOwnership","inputs":[{"name":"newOwner","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"treasuryFeeBasisPoints","inputs":[],"outputs":[{"name":"","type":"uint16","internalType":"uint16"}],"stateMutability":"view"},{"type":"function","name":"updateMaxProcessingFee","inputs":[{"name":"_subscriptionIndex","type":"uint256","internalType":"uint256"},{"name":"_maxProcessingFee","type":"uint256","internalType":"uint256"},{"name":"_processingFeeToken","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"userSubscriptionNonce","inputs":[{"name":"","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint16","internalType":"uint16"}],"stateMutability":"view"},{"type":"function","name":"userToSubscriptionIndex","inputs":[{"name":"","type":"address","internalType":"address"},{"name":"","type":"uint16","internalType":"uint16"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"event","name":"MaxProcessingFeeUpdated","inputs":[{"name":"subscriptionIndex","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"maxProcessingFee","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"processingFeeToken","type":"address","indexed":false,"internalType":"address"}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"name":"user","type":"address","indexed":true,"internalType":"address"},{"name":"newOwner","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"Payment","inputs":[{"name":"sender","type":"address","indexed":true,"internalType":"address"},{"name":"recipient","type":"address","indexed":true,"internalType":"address"},{"name":"subscriptionIndex","type":"uint256","indexed":true,"internalType":"uint256"},{"name":"sponsor","type":"address","indexed":false,"internalType":"address"},{"name":"amount","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"token","type":"address","indexed":false,"internalType":"address"},{"name":"protocolFee","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"processingFee","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"processingFeeToken","type":"address","indexed":false,"internalType":"address"},{"name":"terms","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"SponsorshipRevoked","inputs":[{"name":"subscriptionIndex","type":"uint256","indexed":true,"internalType":"uint256"},{"name":"sender","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"SubscriptionCanceled","inputs":[{"name":"subscriptionIndex","type":"uint256","indexed":true,"internalType":"uint256"},{"name":"recipient","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"SubscriptionCreated","inputs":[{"name":"subscriptionIndex","type":"uint256","indexed":true,"internalType":"uint256"},{"name":"recipient","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"UnorderedNonceInvalidation","inputs":[{"name":"owner","type":"address","indexed":true,"internalType":"address"},{"name":"word","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"mask","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"error","name":"AuctionDurationGreaterThanCooldown","inputs":[]},{"type":"error","name":"AuctionExpired","inputs":[]},{"type":"error","name":"ExceedingMaxProcessingFee","inputs":[]},{"type":"error","name":"InFeeAuctionPeriod","inputs":[]},{"type":"error","name":"InvalidAuthSignature","inputs":[]},{"type":"error","name":"InvalidContractSignature","inputs":[]},{"type":"error","name":"InvalidFeeBasisPoints","inputs":[]},{"type":"error","name":"InvalidNonce","inputs":[]},{"type":"error","name":"InvalidSignature","inputs":[]},{"type":"error","name":"InvalidSignatureLength","inputs":[]},{"type":"error","name":"InvalidSigner","inputs":[]},{"type":"error","name":"NotEnoughTimePast","inputs":[]},{"type":"error","name":"NotSenderOrRecipient","inputs":[]},{"type":"error","name":"NotSponsorOfSubscription","inputs":[]},{"type":"error","name":"SignatureExpired","inputs":[{"name":"signatureDeadline","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"SubscriptionAlreadyExists","inputs":[]},{"type":"error","name":"SubscriptionIsCanceled","inputs":[]}] as const;