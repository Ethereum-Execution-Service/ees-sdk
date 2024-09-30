import { createWalletClient, createPublicClient, encodeAbiParameters, parseUnits, TransactionReceipt } from "viem";
import { JobSpecification, Job } from "./types";
import { publicClient, walletClient } from "../config";
import { EESSDK } from "./EESSDK";
import {JOBREGISTRY_ADDRESS} from "./constants";

async function main() {
  const eesSdk = new EESSDK(publicClient, walletClient);

  const jobSpecification: JobSpecification = {
    nonce: 88805526045906062658843605009268256866115913838000966001699316491583730826117n,
    deadline: 115792089237316195423570985008687907853269984665640564039457584007913129639935n,
    application: '0x94D12a6d10255f6F1e84A823419B37af83841b58',
    executionWindow: 1800,
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
      [2592000, 1724844660]),
    feeModuleInput: encodeAbiParameters(
      [
        { name: 'executionFeeToken', type: 'address' },
        { name: 'minExecutionFee', type: 'uint256' },
        { name: 'maxExecutionFee', type: 'uint256' }
      ],
      ["0x7139F4601480d20d43Fa77780B67D295805aD31a", parseUnits('0.1', 6), parseUnits('0.2', 6)]
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
  const signature: `0x${string}` = await eesSdk.signJobSpecification(jobSpecification);
  //console.log("signature:", signature);
  
  //const txReceipt: TransactionReceipt = await eesSdk.approveFeeToken("0x701f372f2A10688c4f3e31E20ceabC1f3A88ac2c", 115792089237316195423570985008687907853269984665640564039457584007913129639935n);
  //console.log(txReceipt);



  const res: readonly[bigint, boolean] = await eesSdk.getTokenPrice("0xF671644C9e793caF69a45520B609DDD83611FE34", encodeAbiParameters([{ name: 'feed', type: 'address' }], ["0x0FB99723Aee6f420beAD13e6bBB79b7E6F034298"]));

  console.log(res);


  //const txReceipt: TransactionReceipt = await eesSdk.deleteJob(4n);
  //console.log(txReceipt);

  //const signature2: `0x${string}` = await eesSdk.generateSponsorSignature2(jobSpecification);
  //console.log("signature2: ", signature2);

  //const domainSeparator: `0x${string}` = await eesSdk.getDomainSeparator();
  //console.log(domainSeparator);
  //const txReceipt: TransactionReceipt = await eesSdk.createJob(jobSpecification, walletClient.account?.address!, signature, true, 100n);
  //console.log(txReceipt);

  //const data = await eesSdk.getJobs([1n]);
  //console.log(data);

  //const jobs: Job[] = await eesSdk.getJobs([0n]);
  //console.log(jobs);

  //const txReceipt: TransactionReceipt = await eesSdk.executeBatch([3n], "0x303cAE9641B868722194Bd9517eaC5ca2ad6e71a");
  //console.log(txReceipt);
  


}

main();