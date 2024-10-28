import { createWalletClient, createPublicClient, encodeAbiParameters, parseUnits, TransactionReceipt } from "viem";
import { JobSpecification, Job, ContractCallOptions } from "./types";
import { publicClient, walletClient } from "../config";
import { PublicClient, WalletClient } from "viem";
import { EESSDK } from "./EESSDK";

async function main() {
  
  const configProviderAddress = "0x5EA584329e9a6CAE4C056d89E717d62473C58b1b";
  const eesSdk: EESSDK = await EESSDK.init(configProviderAddress, publicClient as PublicClient, walletClient as WalletClient);

  const jobSpecification: JobSpecification = {
    nonce: BigInt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)),
    deadline: 1157920892373161954235709850086879078532694665640564039457584007913129639935n,
    application: '0xcca39E8999C2632EB06811EfCeeC117B2181d3F8',
    executionWindow: 60,
    maxExecutions: 0,
    inactiveGracePeriod: 0,
    ignoreAppRevert: false,
    executionModule: "0x00",
    feeModule: "0x00",
    executionModuleInput: encodeAbiParameters(
      [
          {name: 'cooldown', type: 'uint32'},
          { name: 'initialExecutionTime', type: 'uint40' }
      ],
      [100, 1730029364]),
    feeModuleInput: encodeAbiParameters(
      [
        { name: 'executionFeeToken', type: 'address' },
        { name: 'minExecutionFee', type: 'uint256' },
        { name: 'maxExecutionFee', type: 'uint256' }
      ],
      ["0x7139F4601480d20d43Fa77780B67D295805aD31a", parseUnits('0.5', 6), parseUnits('1', 6)]
    ),
    applicationInput: encodeAbiParameters(
      [
          { name: 'recipient', type: 'address' },
          { name: 'amount', type: 'uint256' },
          { name: 'token', type: 'address' },
          { name: 'amountFactors', type: 'bytes12' }
      ],
      ["0x303cAE9641B868722194Bd9517eaC5ca2ad6e71a", parseUnits("1", 6), "0x7139F4601480d20d43Fa77780B67D295805aD31a", "0x000000000000000000000000"]
    )
  };

  //console.log(jobSpecification);
  

  //console.log(eesSdk.getProtocolConfig());

  //console.log(jobSpecification);
  const signature: `0x${string}` = await eesSdk.signJobSpecification(jobSpecification);
  //console.log("signature:", signature);
  
  /*
  await eesSdk.getEpochInfo().then((epochInfo) => {
    console.log(epochInfo);
  });
  */
  
  
  await eesSdk.approveFeeToken("0x7139F4601480d20d43Fa77780B67D295805aD31a", 115792089237316195423570985008687907853269984665640564039457584007913129639935n, { waitForReceipt: true }).then((result) => {
    console.log(result.transactionReceipt);
  });
  
  await eesSdk.approveAppToken("0xcca39E8999C2632EB06811EfCeeC117B2181d3F8", "0x7139F4601480d20d43Fa77780B67D295805aD31a", 115792089237316195423570985008687907853269984665640564039457584007913129639935n, { waitForReceipt: true }).then((result) => {
    console.log(result.transactionReceipt);
  });
  
  
  

  /*
  await eesSdk.approveStakingToken(115792089237316195423570985008687907853269984665640564039457584007913129639935n).then((result) => {
    console.log(result.transactionReceipt);
  });
 
  await eesSdk.stake({ simulate: true }).then((result) => {
    console.log(result.transactionReceipt);
  });
  */
  
  
  
  /*
  await eesSdk.unstake().then((result) => {
    console.log(result.transactionReceipt);
  });
  */
  
  
  //const currentEpoch: bigint = await eesSdk.getEpoch();
  //console.log("CURRENT EPOCH: ", currentEpoch);
// get chain id
//console.log(publicClient.chain?.id);
  
 /*
  const currentEpoch: bigint = await eesSdk.getEpoch();
  console.log("CURRENT EPOCH: ", currentEpoch);
  */

  /*
  await eesSdk.initiateEpoch().then((res) => {
    console.log(res.transactionHash);
  });
  await eesSdk.commit(6n).then((res) => {
    console.log(res.transactionHash);
    console.log(res.secret);
  });
  */
  //console.log("SIGNATURE: ", secret);
  
  
  /*
  await eesSdk.reveal("0x51de6cf657335f0a5664bc7483aec7d931beb895563fa2312546c22092da62de0c71c2660ee267b1b0ee0e0e7ec7a2b9ad5898dafe450f77151ebfdd61d090221b").then((transactionReceipt: TransactionReceipt) => {
    console.log(transactionReceipt);
  });
  */

  /*
  await eesSdk.getAllowance(eesSdk.getProtocolConfig().stakingToken, walletClient.account?.address!, eesSdk.getProtocolConfig().executionManager).then((allowance: bigint) => {
    console.log(allowance);
  });
  await eesSdk.getBalance(eesSdk.getProtocolConfig().stakingToken, walletClient.account?.address!).then((balance: bigint) => {
    console.log(balance);
  });
  */
  //console.log(eesSdk.getProtocolConfig());
  
  

  //const res: readonly[bigint, boolean] = await eesSdk.getTokenPrice("0xF671644C9e793caF69a45520B609DDD83611FE34", encodeAbiParameters([{ name: 'feed', type: 'address' }], ["0x0FB99723Aee6f420beAD13e6bBB79b7E6F034298"]));
  //console.log(res);


  //const txReceipt: TransactionReceipt = await eesSdk.deleteJob(4n);
  //console.log(txReceipt);

  //const signature2: `0x${string}` = await eesSdk.generateSponsorSignature2(jobSpecification);
  //console.log("signature2: ", signature2);

  //const domainSeparator: `0x${string}` = await eesSdk.getDomainSeparator();
  //console.log(domainSeparator);

  
  /*
  await eesSdk.createJob(jobSpecification, walletClient.account?.address!, signature, true, 100n).then((res) => {
    console.log(res);
  })
    */
    
  

  /*
  console.log(eesSdk.getProtocolConfig());

  await eesSdk.getEpochInfo().then((epochInfo) => {
    console.log(epochInfo);
  });
  */
  
    

  //const data = await eesSdk.getJobs([1n]);
  //console.log(data);

  //const jobs: Job[] = await eesSdk.getJobs([0n]);
  //console.log(jobs);

  //const txReceipt: TransactionReceipt = await eesSdk.executeBatch([3n], "0x303cAE9641B868722194Bd9517eaC5ca2ad6e71a");
  //console.log(txReceipt);
  
  console.log("----- main finished ------");

}

main();
